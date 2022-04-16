import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import {AssignmentService} from '../../shared/assignment.service';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';
import {Assignment} from '../assignments/assignment.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // pour la pagination
  page = 1;
  limit = 5;
  totalDocs = 0;
  totalPages = 0;
  hasPrevPage?: boolean;
  prevPage?: number;
  hasNextPage?: boolean;
  nextPage?: number;

  assignments: Assignment[] = [];

  constructor(
    private assignmentsService: AssignmentService,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (!this.authService.loggedIn) {
      this.router.navigate(['/login']);
    }

    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments(this.page, this.limit)
      .subscribe((data) => {
        this.assignments = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
      });
  }

}

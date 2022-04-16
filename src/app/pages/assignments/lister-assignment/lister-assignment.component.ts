import { Component, OnInit } from '@angular/core';
import {AssignmentService} from '../../../shared/assignment.service';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';
import {Assignment} from '../assignment.model';

@Component({
  selector: 'app-lister-assignment',
  templateUrl: './lister-assignment.component.html',
  styleUrls: ['./lister-assignment.component.scss']
})
export class ListerAssignmentComponent implements OnInit {
  titre = 'Application de gestion des assignments !';
  assignments: Assignment[] = [];
  displayedColumns: string[] = ['id', 'nom', 'dateDeRendu', 'rendu'];

  // pour la pagination
  page = 1;
  limit = 5;
  totalDocs = 0;
  totalPages = 0;
  hasPrevPage?: boolean;
  prevPage?: number;
  hasNextPage?: boolean;
  nextPage?: number;


  constructor(
    private assignmentsService: AssignmentService,
    public authService: AuthService,
    private router: Router
  ) {
    // console.log("dans le constructeur")
  }

  // appelé avant l'affichage
  ngOnInit(): void {

    if (!this.authService.loggedIn) {
      this.router.navigate(['/login']);
    }

    // console.log("dans le ngInit")

    this.getAssignments();
    // console.log("assignmentsService.getAssignments() appelé...");
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

  getColor(index: number) {
    return index % 2 ? 'red' : 'green';
  }

  pageSuivante() {
    this.page++;
    this.getAssignments();
  }

  pagePrecedente() {
    this.page--;
    this.getAssignments();
  }

  premierePage() {
    this.page = 1;
    this.getAssignments();
  }

  dernierePage() {
    this.page = this.totalPages;
    this.getAssignments();
  }

  OnPageChange(event) {
    this.limit = event.pageSize;
    this.page = event.pageIndex + 1;
    this.getAssignments();
    console.log(event);
  }

  peuplerBD() {
    this.assignmentsService.peuplerBDAvecForkJoin()
      .subscribe(() => {
        console.log('TOUS LES AJOUTS ONT ETE REALISES');
        // on peut alors afficher la liste
        this.router.navigate(['/tables']);
      });
  }
}

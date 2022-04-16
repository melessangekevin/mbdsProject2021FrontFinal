import { Component, OnInit } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentService} from '../../../shared/assignment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-modifier-assignment',
  templateUrl: './modifier-assignment.component.html',
  styleUrls: ['./modifier-assignment.component.scss']
})
export class ModifierAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;
  nomAssignment?: string;
  dateDeRendu?: Date;

  constructor(
    private assignmentsService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {

    if (!this.authService.loggedIn) {
      this.router.navigate(['/login']);
    }

    console.log("QUERY PARAMS :");
    console.log(this.route.snapshot.queryParams);

    console.log("FRAGMENT :");
    console.log(this.route.snapshot.fragment);

    this.getAssignment();
  }
  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        this.assignment = assignment;

        // pour pré-remplir le formulaire
        this.nomAssignment = assignment?.nom.replace('MODIFIE PAR LE PIPE', '').trim();
        this.dateDeRendu = assignment?.dateDeRendu;
      });
  }

  onSubmit() {
    if (!this.assignment) return;

    if (this.nomAssignment) {
      this.assignment.nom = this.nomAssignment;
    }

    if (this.dateDeRendu) {
      this.assignment.dateDeRendu = this.dateDeRendu;
    }

    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe(message => {
        console.log(message);
        // navigation vers la home page
        this.router.navigate(['/details-assignment/' + this.assignment.id]);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentService} from '../../../shared/assignment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-detais-assignment',
  templateUrl: './detais-assignment.component.html',
  styleUrls: ['./detais-assignment.component.scss']
})
export class DetaisAssignmentComponent implements OnInit {
  assignmentTransmis?: Assignment;
  renduNotif: boolean;

  constructor(private assignmentsService: AssignmentService,
              private route: ActivatedRoute,
              private router: Router,
              public authService: AuthService) {}

  ngOnInit(): void {
    if (!this.authService.loggedIn) {
      this.router.navigate(['/login']);
    }
    // le + force la conversion "string" vers "number"
    const id: number = +this.route.snapshot.params['id'];

    console.log('Composant detail, id = ' + id);

    // a partir de l'id on demande au service l'assignment qui correspond
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        this.assignmentTransmis = assignment;
        console.log(this.assignmentTransmis);
      })
  }

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
      this.renduNotif = true;

      this.assignmentsService
        .updateAssignment(this.assignmentTransmis)
        .subscribe((reponse) => {
          console.log(reponse.message);

          // pour cacher la vue de details une fois modifié
          this.assignmentTransmis = undefined;

          // on retourne à la page d'accueil
        });
    }
  }

  onDeleteAssignment() {
    if (this.assignmentTransmis) {
      this.assignmentsService
        .deleteAssignment(this.assignmentTransmis)
        .subscribe((reponse) => {
          console.log(reponse.message);

          // pour cacher la vue de details une fois supprimé
          this.assignmentTransmis = undefined;

          // on retourne à la page d'accueil
          this.router.navigate(["/liste-assignment"]);
        });
    }
  }

  onClickEdit() {
    this.router.navigate(['/edit-assignment/', this.assignmentTransmis?.id, 'edit'],
      {
        queryParams : {
          nom: this.assignmentTransmis?.nom,
          debug: true,
          age: 56
        },
        fragment: "edition"
      });
  }

  isAdmin(): boolean {
    return this.authService.loggedIn;
  }
}

import { Component, OnInit } from '@angular/core';
import {AssignmentService} from '../../../shared/assignment.service';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';
import {Assignment} from '../assignment.model';

@Component({
  selector: 'app-ajouter-assignment',
  templateUrl: './ajouter-assignment.component.html',
  styleUrls: ['./ajouter-assignment.component.scss']
})
export class AjouterAssignmentComponent implements OnInit {
// Champs du formulaire
  nomAssignment = '';
  msg = '';
  isAddded = false;
  peupler = false;
  dateDeRenduAssignment!: Date;

  constructor(
    private assignmentsService: AssignmentService,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!this.authService.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    console.log(this.nomAssignment);
    console.log(this.dateDeRenduAssignment);

    let newAssignment = new Assignment();
    newAssignment.id = Math.round(Math.random() * 1000000); // id entier entre 0 et 1M
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateDeRenduAssignment;
    newAssignment.rendu = false;

    this.assignmentsService.addAssignment(newAssignment)
      .subscribe(reponse => {
        console.log(reponse);
        this.isAddded = true;
        // on doit naviguer vers l'URL qui affiche la liste ("" ou "/home")
        // on doit naviguer par programme
        // on retourne à la page d'accueil
      });
  }

}

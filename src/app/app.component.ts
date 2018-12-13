import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Collegue } from "./auth/auth.domains";
import { AuthService } from "./auth/auth.service";

/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  templateUrl: `./app.html`,
  styles: []
})
export class AppComponent implements OnInit {

  collegueConnecte: Observable<Collegue>;

  constructor(private _authSrv: AuthService, private _router: Router) {

  }

  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {
    this.collegueConnecte = this._authSrv.collegueConnecteObs;
  }

  

}

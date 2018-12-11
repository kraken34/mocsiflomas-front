import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AuthComponent } from './auth/auth.component';
import { StatutConnecteService } from "./auth/statut-connecte.service";
import { TechComponent } from './tech/tech.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuVisiteurComponent } from './menu/menu-visiteur/menu-visiteur.component';
import { MenuAdministrateurComponent } from './menu/menu-administrateur/menu-administrateur.component';
import { MenuUtilisateurComponent } from './menu/menu-utilisateur/menu-utilisateur.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component'


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'inscription', component: FormInscriptionComponent},
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    AccueilComponent,
    MenuVisiteurComponent,
    MenuAdministrateurComponent,
    MenuUtilisateurComponent,
    FormInscriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MDBBootstrapModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

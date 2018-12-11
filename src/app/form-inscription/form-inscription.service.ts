import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormUser } from '../ModelFolder/FormUser';

const URL_BACKEND = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class FormInscriptionService {

  constructor(private _http: HttpClient) { }


  CreateUser(form: FormUser,file){
    //let filePath=this.onUpload(file,file.name,file.type);
    console.log("data");
    let data=this._http.post(URL_BACKEND+'collegue/upload', file, {responseType: 'text'})
      return data
    
      

    // return this._http.post(URL_BACKEND.concat("/collegue/nouveau"),
    //   {
    //     prenom: form.prenom,
    //     nom: form.nom,
    //     date: form.dateN,
    //     password: form.password,
    //     adresse: form.adress,
    //     phone: form.phone,
    //     //imgProfil: filePath
    //   },
    //   {
    //     headers: new HttpHeaders({
    //       "Content-Type": "application/json"
    //     }),
    //     responseType: 'text'
    //   })

  }
}

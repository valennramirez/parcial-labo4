import { Injectable } from '@angular/core';
import { Router, UrlCreationOptions } from '@angular/router';
import { Cita } from '../interfaces/cita';


@Injectable({
  providedIn: 'root'
})
export class CitaServiceService {

  constructor(private route: Router) { }

   url: string = "http://localhost:4500/citas"; 

  async getCitas(): Promise<Cita[] | undefined>
  {
    try {
      const resultado= await fetch (this.url); 
      const listadoCitas= await resultado.json(); 
      return listadoCitas
    } catch (error) {
      console.log(error); 
    }
    return undefined; 
  }

  async deleteCita (id: number)
  {
    try {
      await fetch (`${this.url}/${id}`, {method: 'DELETE'});
      this.route.navigate(['home']);  
    } catch (error) {
      console.log(error); 
    }
  }

  async postCita (cita : Cita | undefined)
  {
    try {
      await fetch (this.url, {
        method: 'POST', 
        body: JSON.stringify(cita), 
        headers: {'Content-type' : 'application/json'}
      })

      this.route.navigate(['home']);   

    } catch (error) {
      console.log(error); 
    }
  }


}

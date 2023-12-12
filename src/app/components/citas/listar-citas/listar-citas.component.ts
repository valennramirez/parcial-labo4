import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';
import { CitaServiceService } from 'src/app/services/cita-service.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

  ngOnInit(): void {
    this.mostrarCitas(); 
  }

  constructor(private citaService: CitaServiceService,
              private route: Router
    ) {}

  listadoCitas: Cita[] | undefined= []; 

  async mostrarCitas ()
  {
    this.listadoCitas= await this.citaService.getCitas(); 
  }

  eliminarCita(id:number)
  {
    this.citaService.deleteCita(id); 
    this.route.navigate(['home']); 
  }
  
}

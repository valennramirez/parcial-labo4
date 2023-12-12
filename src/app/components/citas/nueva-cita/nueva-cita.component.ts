import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';
import { CitaServiceService } from 'src/app/services/cita-service.service';

@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.component.html',
  styleUrls: ['./nueva-cita.component.css']
})
export class NuevaCitaComponent implements OnInit {
  
  ngOnInit(): void {
    this.initForm()
  }

  constructor(private citaService: CitaServiceService,
              private route: Router, 
              private formBuilder:FormBuilder) 
  {}

  formulario!: FormGroup


  initForm()
  {
    this.formulario= this.formBuilder.group({
      nombrePaciente: ['', (Validators.required)], 
      fechaCita: [Date, (Validators.required)], 
      horaCita: ['', (Validators.required)], 
      sintomas: ['', (Validators.required)], 
      id: [0, (Validators.required)]
    })
  }

  async guardarCita()
  {

    await this.citaService.postCita(this.formulario.value);  
  }
}

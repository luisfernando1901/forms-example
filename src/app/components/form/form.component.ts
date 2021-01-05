import { Component, OnInit } from '@angular/core';
//Importamos el FormBuilder y el FormGroup
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //Inicializamos el form principal de tipo FormGroup
  formPrincipal:FormGroup;

  constructor(private fb:FormBuilder) { }
  //Dentro del init creamos los campos del form
  ngOnInit(): void {
    this.formPrincipal = this.fb.group({
      name:[''],
      age:[''],
      email:[''],
      company:[''],

    });

  }

  enviar(datos:any){
    console.log(datos);

  }

}

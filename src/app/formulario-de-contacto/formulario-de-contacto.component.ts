import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-de-contacto',
  templateUrl: './formulario-de-contacto.component.html',
  styleUrls: ['./formulario-de-contacto.component.css']
})

export class FormularioDeContactoComponent {


nombre!: string;
correo!: string;
mensaje!: string;
nombreObligatorio = false;
correoObligatorio = false;
nombreCompletoCompletado = false;
correoCompletoCompletado = false;
mensajeEnviado = false;

onSubmit() {
  if (!this.nombre) {
    this.nombreObligatorio = true;
  } else {
    this.nombreObligatorio = false;
    this.nombreCompletoCompletado = true;
  }

  if (!this.correo) {
    this.correoObligatorio = true;
  } else {
    this.correoObligatorio = false;
    this.correoCompletoCompletado = true;
  }

  if (this.nombre && this.correo)  {
    // Aquí iría el código para enviar el mensaje
    console.log('Mensaje enviado');
    this.mensajeEnviado = true;
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
    this.nombreObligatorio = false;
    this.correoObligatorio = false;
    this.nombreCompletoCompletado = false;
    this.correoCompletoCompletado = false;
  }
}
}




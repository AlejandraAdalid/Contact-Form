import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-formulario-de-contacto',
  templateUrl: './formulario-de-contacto.component.html',
  styleUrls: ['./formulario-de-contacto.component.css']
})

export class FormularioDeContactoComponent {

  enviado = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, '_RepkulSbhJmTS25o')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.enviado = true;
        if (e.target) {
          (e.target as HTMLFormElement).reset();        }
      }, (error) => {
        console.log(error.text);
      });
  }
}







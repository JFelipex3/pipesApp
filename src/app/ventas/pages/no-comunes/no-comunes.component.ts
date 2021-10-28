import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana Catalina';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Marcela', 'Roberto', 'Gonzalo'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona(){
    if (this.genero == 'masculino') {
      this.nombre = 'Susana Catalina';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Jhonnatan Machuca';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    this.clientes.shift();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Ricardo',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe - Solo funciona con promesas o observable
  miObservable = interval(2000); // Emite valores númericos 0, 1, 2, 3...

  valorPromesa = new Promise( (resolve, rejects) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa');
    }, 3500);
  });

}

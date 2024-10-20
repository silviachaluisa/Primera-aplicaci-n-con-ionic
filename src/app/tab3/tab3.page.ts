import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  skills = [
    { name: 'HTML', progress: 0.6 },
    { name: 'CSS', progress: 0.3 },
    { name: 'JavaScript', progress: 0.6 },
    { name: 'React', progress: 0.4 },
    { name: 'Node', progress: 0.5 },
    { name: 'Express', progress: 0.5 },
    { name: 'Java', progress: 0.7 },
    { name: 'Python', progress: 0.7 }
  ];

  // Lista de proyectos
  projects = [
    { name:'NodeSetup', version:'2.1.0', desc:'Aplicación GUI en Python para la configuración de un directorio como proyecto de Node.js. Nacio de la idea de poder juntar la mayoria de modulos NPM y configuraciones vistas en la asignatura Aplicaciones web de 4° semestre de la carrera de Desarrollo de Software de la EPN', link:'https://github.com/Alejo-P/NodeSetup-APP', dateC:"2024-05-26"},
    { name:'Main App (Beta)', version:'0.0.7 (Dev)', desc:'Aplicación GUI de escritorio (en desarrollo) para realizar distintas acciones con conjuntos de datos, la aplicación surgió de una idea de juntar la mayor parte de contenidos vistos en la asignatura de 3° semestre Analisis de Datos de la carrera de Desarrollo de Software de la EPN, el nombre de la aplicación puede cambiar durante la fase de desarrollo', link:undefined, dateC:"2023-11-15"},
  ]

  constructor() {}

  // Función para obtener el color de la barra de progreso
  getColor(progress: number): string {
    if (progress <= 0.4) {
      return 'danger';
    } else if (progress <= 0.6) {
      return 'warning';
    } else {
      return 'success';
    }
  }

}

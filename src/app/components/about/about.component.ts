import { Component } from '@angular/core';
//Servicio
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor( public _is:InformacionService ) { }

}

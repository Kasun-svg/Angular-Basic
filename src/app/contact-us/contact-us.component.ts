import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ RouterOutlet, RouterLink
   
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
 
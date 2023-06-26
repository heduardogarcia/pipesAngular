import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower:string='fernado';
  public nameUpper:string='FERNANDO';
  public fullname:string='fErNado HeRRERa';

  public customDate : Date= new Date();

}

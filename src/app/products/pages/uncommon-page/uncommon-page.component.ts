import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select

  public name:string='Eduardo';
  public gender:'male'|'female'='male';

  changeClient():void{
    this.name='Roux';
    this.gender='female';

  }
  public clients:string[]=['Eduardo','Pedro','Jazmin','Rubi','Carlos','Sandra'];
  deleteClient():void{
    console.log(this.clients.length);

    this.clients.shift();
  }
  public invitationMap={
    'male':'saludarlo',
    'female':'saludarla'
  }

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  public person=
  {
    name:'Eduardo',
    age:43,
    adress:'Sinaloa,México'
  }

  public myObservableTimer= interval(2000).pipe(
    tap(value=>console.log('tap',value))
  );



}

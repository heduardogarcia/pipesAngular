import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanflyPipe } from './pipes/canfly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    UncommonPageComponent,
    NumbersPageComponent,
    OrderComponent,

    ToggleCasePipe,
     CanflyPipe,
     SortByPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule
  ],
  exports: [
    CanflyPipe
  ]
})
export class ProductsModule { }

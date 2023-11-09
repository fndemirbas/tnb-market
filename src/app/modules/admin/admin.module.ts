import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductComponent } from './product/product.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductSaveComponent } from './product-save/product-save.component';


@NgModule({
  declarations: [
    ProductComponent,
    AdminLayoutComponent,
    ProductSaveComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

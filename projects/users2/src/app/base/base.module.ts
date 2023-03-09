import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

// Importar el RouterModule para poder utilizar en el html de Menu de este módulo:

@NgModule({
  declarations: [MenuComponent, HeaderComponent, FooterComponent, LayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    LayoutComponent
  ],
})
export class BaseModule {}

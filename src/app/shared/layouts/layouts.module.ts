import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}

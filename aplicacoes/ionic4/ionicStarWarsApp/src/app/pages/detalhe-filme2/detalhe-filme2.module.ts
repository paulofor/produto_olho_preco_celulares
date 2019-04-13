import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheFilme2Page } from './detalhe-filme2.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheFilme2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheFilme2Page]
})
export class DetalheFilme2PageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OportunidadeDetalhePage } from './oportunidade-detalhe';

@NgModule({
  declarations: [
    OportunidadeDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(OportunidadeDetalhePage),
  ],
})
export class OportunidadeDetalhePageModule {}

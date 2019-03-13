import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheComEstatisticaPage } from './detalhe-com-estatistica';

@NgModule({
  declarations: [
    DetalheComEstatisticaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheComEstatisticaPage),
  ],
})
export class DetalheComEstatisticaPageModule {}

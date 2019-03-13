import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OportunidadeListaPage } from './oportunidade-lista';

@NgModule({
  declarations: [
    OportunidadeListaPage,
  ],
  imports: [
    IonicPageModule.forChild(OportunidadeListaPage),
  ],
})
export class OportunidadeListaPageModule {}

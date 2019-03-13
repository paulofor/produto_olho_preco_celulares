import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AparelhoListaPage } from '../pages/aparelho-lista/aparelho-lista';
import { OportunidadeDetalhePage } from '../pages/oportunidade-detalhe/oportunidade-detalhe';
import { OportunidadeListaPage } from '../pages/oportunidade-lista/oportunidade-lista';
import { PrecoAparelhoHistoricoPage } from '../pages/preco-aparelho-historico/preco-aparelho-historico';
import { HomePage } from '../pages/home/home';
import { DetalheComEstatisticaPage } from '../pages/detalhe-com-estatistica/detalhe-com-estatistica';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AparelhoListaPage,
    OportunidadeDetalhePage,
    OportunidadeListaPage,
    PrecoAparelhoHistoricoPage,
    DetalheComEstatisticaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AparelhoListaPage,
    OportunidadeDetalhePage,
    OportunidadeListaPage,
    PrecoAparelhoHistoricoPage,
    DetalheComEstatisticaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

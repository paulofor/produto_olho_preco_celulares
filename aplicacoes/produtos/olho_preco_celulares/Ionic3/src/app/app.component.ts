import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AparelhoListaPage } from '../pages/aparelho-lista/aparelho-lista';
import { PrecoAparelhoHistoricoPage } from '../pages/preco-aparelho-historico/preco-aparelho-historico';
import { OportunidadeListaPage } from '../pages/oportunidade-lista/oportunidade-lista';
import { OportunidadeDetalhePage } from '../pages/oportunidade-detalhe/oportunidade-detalhe';
import { HomePage } from '../pages/home/home';
import { DetalheComEstatisticaPage } from '../pages/detalhe-com-estatistica/detalhe-com-estatistica';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Aparelho-Lista' , component: AparelhoListaPage},
      { title: 'Preco-Historico' , component: PrecoAparelhoHistoricoPage},
      { title: 'Oportunidade-List' , component: OportunidadeListaPage},
      { title: 'Oportunidade-Detalhe' , component: OportunidadeDetalhePage},
      { title: 'Detalhe-Estatistica' , component: DetalheComEstatisticaPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}

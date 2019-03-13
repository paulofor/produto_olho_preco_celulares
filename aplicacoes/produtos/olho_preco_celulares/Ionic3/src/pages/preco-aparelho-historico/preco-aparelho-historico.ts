import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrecoAparelhoHistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preco-aparelho-historico',
  templateUrl: 'preco-aparelho-historico.html',
})
export class PrecoAparelhoHistoricoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrecoAparelhoHistoricoPage');
  }

  criaImagem() {
    var cv01: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('cv01');
    //var img1: HTMLImageElement = <HTMLImageElement>document.getElementById('img1');
    //var ctx = cv01.getContext("2d"); 
    //img1.src = cv01.toDataURL('png');
    //cv01.hidden = true;
  }

  public barChartOptions: any = {
    legend: {
      display: false,
     
    },
    animation: {
      onComplete: this.criaImagem
    },
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public barChartLabels: string[] = ['15/01', '23/01', '30/01', '06/02', '13/02', '20/02', '27/02'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;


  public barChartData: any[] = [
    { data: [799, 759, 839, 839, 839, 759, 769] }
  ];

}

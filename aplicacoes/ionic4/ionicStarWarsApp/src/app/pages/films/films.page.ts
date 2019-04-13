import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  filmes: Observable<any>;

  constructor(private navController: NavController, private router: Router, private srv: ApiService) { }

  ngOnInit() {
    this.filmes =this.srv.getFilms();
   

  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length - 2];
    let urlNavegacao = '/tabs/filmes2/' + filmId;
    console.log('url: ', urlNavegacao);
    this.router.navigateByUrl(urlNavegacao);
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planetas`)
  }
}

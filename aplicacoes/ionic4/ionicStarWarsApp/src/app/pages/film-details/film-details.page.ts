import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  film: any;
  isFavorite: boolean = false;
  carregouFavorito = null;
  filmId = null;
  favorito = false;

  constructor(private activatedRoute: ActivatedRoute, private srv: ApiService, 
    private emailComposer: EmailComposer,  private favoriteService: FavoriteService) { 
      console.log('FavoriteService(1):' , favoriteService);
      console.log('ApiService:' , srv);
      console.log('EmailComposer:' , emailComposer);
    }

  ngOnInit() {
    console.log('FavoriteService(2):' , this.favoriteService);
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.srv.getFilm(this.filmId).subscribe(res => {
      console.log('Resultado:' , res);
      this.film = res;
    });
    this.favoriteService.isFavorite(this.filmId).then(isFav => {
      this.isFavorite = isFav;
      this.carregouFavorito = true;
    });
  }

  shareFilm() {
    let email = {
      to: 'saimon@devdactic.com',
      subject: 'I love this one: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }

  favoriteFilm() {
    this.favoriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }
 
  unfavoriteFilm() {
    this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
      this.isFavorite = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../clases';
import { DbConectionService } from '../home/db-conection.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {

  public movie: Movie;
  public image: string;
  private id: string;

  constructor(private activatedRoute: ActivatedRoute, private dbConectionService: DbConectionService) { }

  ngOnInit() {
    this.movie = new Movie();

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.id = paramMap.get('movieId');
    })

    this.dbConectionService.getMovie(Number(this.id)).subscribe(data => {
      this.movie = data;
      console.log(data.release_date);
      this.image = 'https://image.tmdb.org/t/p/original/' + this.movie.poster_path;
      
    },
      (error: any) => {
        console.log(error)
      }
    );
  }

}

import { Component } from '@angular/core';
import { Movie } from '../clases';
import { DbConectionService } from './db-conection.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dbConectionService: DbConectionService) {}

  public searchbar: any;
  public items: any;
  public movies: Array<any> = [];

  ngOnInit() {

    this.dbConectionService.getMovies().subscribe(data => {
      this.movies = data.results;
    },
      (error: any) => {
        console.log(error)
      }
    );
    
    this.searchbar = document.querySelector('ion-searchbar');
    this.searchbar.addEventListener('ionInput', this.handleInput);
  }

  handleInput(event) {
    this.items = Array.from(document.querySelector('ion-list').children);
    const query = event.target.value.toLowerCase();

    requestAnimationFrame(() => {
        this.items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }
}

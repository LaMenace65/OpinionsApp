import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpinionsApp';
  opinions: string[] = [];
  opinion: string = '';

  constructor(private http: HttpClient) {
    this.loadOpinions();
  }

  loadOpinions() {
    this.http.get<string[]>('/opinions').subscribe(result => {
      this.opinions = result;
    }, error => console.error(error));
  }

  submitOpinion() {
    if (this.opinion === 'pour' || this.opinion === 'contre') {
      this.http.post('/opinions', this.opinion).subscribe(() => {
        this.loadOpinions();
        this.opinion = '';
      }, error => console.error(error));
    } else {
      alert('Opinion invalide. Veuillez entrer "pour" ou "contre".');
    }
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forum-app';
  postId: number = 1;
  constructor(private router: Router) { }
  redirect() {
    this.router.navigate(['/posts', this.postId]);
  }
}

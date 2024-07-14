import { Component } from '@angular/core';
import { DynamicHooksComponent } from 'ngx-dynamic-hooks';
import { ClickableImgParser } from './components/lightbox/clickableImgParser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  parsers = [ClickableImgParser];
  content = `
    <article>
      <h1>Bird is the word</h1>
      <p>Here is a bit of text as it might appear in an article, followed by a normal image element with a "lightbox" class:</p>
      <img class="lightbox" src="https://i.imgur.com/J6Z3OTM.jpeg" src-large="https://i.imgur.com/MjoYlkJ.jpeg">
      <p>Our custom parser finds image elements with that class and automatically transforms them into Angular components with lightbox functionality.</p>
      <p><b>Try clicking it!</b></p>
    <article>
  `;
  
}
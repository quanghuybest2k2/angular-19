import { Component, OnInit } from '@angular/core';
import { HelloWorld } from './decorators/hello.decorator';

@HelloWorld()
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}

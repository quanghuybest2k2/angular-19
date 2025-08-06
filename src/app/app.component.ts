import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, FormsModule, UpperCasePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'angular-basic';
  languages = ['en', 'vi']; // Available languages
  selectedLang: string;

  constructor(private translate: TranslateService) {
    // Set included languages
    this.translate.addLangs(this.languages);
    const browserLang = navigator.languages
      ? navigator.languages[0].split('-')[0]
      : navigator.language.split('-')[0];

    // Get the current browser language, if included set it
    const defaultLang = this.translate.getLangs().includes(browserLang)
      ? browserLang
      : 'en';

    // Set the default and current language
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
    this.selectedLang = defaultLang; // Set initial selected language
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLang = lang; // Update selected language
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Pagination } from '../utilities/pagination.util';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HelloWorld } from '../decorators/hello.decorator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@HelloWorld()
@Component({
  standalone: true,
  selector: 'app-test',
  imports: [CommonModule, TranslatePipe, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  title = 'angular basic';
  languages = ['en', 'vi']; // Available languages
  selectedLang: string;
  users: any[] = [];
  pagination: Pagination;
  translate = inject(TranslateService);

  constructor() {
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
    this.pagination = new Pagination(5);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLang = lang; // Update selected language
  }
  fetchUsers() {
    const allUsers = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
    }));

    this.pagination.setTotalItems(allUsers.length);

    this.users = allUsers.slice(
      this.pagination.getStartIndex(),
      this.pagination.getEndIndex() + 1
    );
  }
  next() {
    this.pagination.nextPage();
    this.fetchUsers();
  }

  prev() {
    this.pagination.prevPage();
    this.fetchUsers();
  }
  ngOnInit() {
    this.fetchUsers();
  }
}

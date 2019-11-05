import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.sass']
})
export class ThemeComponent implements OnInit {
  themes = [
    'theme-purple-green',
    'theme-indigo-pink',
    'theme-pink-bluegrey',
    'theme-deeppurple-amber'
  ];
  currentTheme: string = this.themes[0];

  constructor() { }

  ngOnInit() {
  }

  changeTheme() {
    document.getElementsByTagName('body')[0].className = this.currentTheme;
  }
}

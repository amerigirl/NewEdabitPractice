import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css'],
})
export class EasyComponent {
  isCardVisible = false;

  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
}

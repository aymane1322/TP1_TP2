import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
registerLocaleData(localeFr, 'fr');


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP1_TP2';
  now = new Date()
  factures=[
    {numfact:1,Date:'12/02/2023',montant:1525.25,etat:true},
    {numfact:2,Date:'07/25/2023',montant:156.25,etat:false},
    {numfact:3,Date:'4/10/2023',montant:888.75,etat:true},
    {numfact:4,Date:'04/25/2023',montant:15556.25,etat:false},
  ];
}

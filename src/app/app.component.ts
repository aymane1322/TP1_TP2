import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TP1_TP2';
  now = new Date();
  factures = [
    { numfact: 1, Date: '12/02/2023', montant: 1525.25, etat: true },
    { numfact: 2, Date: '07/25/2023', montant: 156.25, etat: false },
    { numfact: 3, Date: '4/10/2023', montant: 888.75, etat: true },
    { numfact: 4, Date: '04/25/2023', montant: 15556.25, etat: false },
  ];
  show = false;
  montant = 0;
  dateFacture = '';

  totalMontant() {
    return this.factures.reduce((c, item) => c + item.montant, 0);
  }

  addItem() {
    this.factures.push({
      numfact: this.factures.length + 1,
      Date: this.dateFacture,
      montant: this.montant,
      etat: false,
    });
    this.dateFacture = '';
    this.montant = 0;
    this.show = false;
  }

  deleteItem(index: number) {
    if(confirm("are you sure you want to delete ?")===true){
      this.factures.splice(index, 1);
    }
  }

  swipe() {
    this.show = !this.show;
  }

  addItem2(form: NgForm) {
    if(this.montant!=0 && this.dateFacture!=""){
      if (
        confirm(
          `N Facture : ${this.factures.length + 1}
         Montnant : ${form.value.montant}
         Date : ${form.value.dateFacture}
        `
        ) == true
      ) {
        this.factures.push({
          numfact: this.factures.length + 1,
          Date: form.value.dateFacture,
          montant: form.value.montant,
          etat: false,
        });
        this.dateFacture = '';
        this.montant = 0;
        this.show = false;
      } else {
      }
    }else{
      alert("bad informations")
    }
  }
}

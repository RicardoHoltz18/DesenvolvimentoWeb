// segurado.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-segurado',
  templateUrl: './segurado.component.html',
  styleUrls: ['./segurado.component.css']
})
export class SeguradoComponent {
  nome: string = '';
  sexo: string = 'masculino';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number | null = null;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      if (this.idade <= 25) {
        this.valorApolice = this.valorAutomovel * 0.15;
      } else {
        this.valorApolice = this.valorAutomovel * 0.10;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }
}

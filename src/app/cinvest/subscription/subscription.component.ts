import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CinvestSubscription } from '../../_models';

@Component({
  selector: 'app-cinvest-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CinvestSubscriptionComponent implements OnInit {
  form: FormGroup;
  editField: string;
  expanded: any = {};
  @ViewChild('myTable') table: any;
  rows = [
    {
      "id": 0,
      "conta_contabil": "1234-56",
      "description": "PRJ Crediário Não Correntista",
      "tipo_fornecimento": "On Demand",
      "quantidade": 1,
      "unidade": "R$",
      "custo_unitario": 9.99,
      "data_prevista_inicio": "10/11/2019",
      "duracao_projeto": 12
     },
  {
      "id": 1,
      "conta_contabil": "1234-56",
      "description": "PRJ Financiamento Imobiliario",
      "tipo_fornecimento": "On Demand",
      "quantidade": 1,
      "unidade": "R$",
      "custo_unitario": 9.99,
      "data_prevista_inicio": "10/12/2019",
      "duracao_projeto": 12
  },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  onSubmit(){
    let subscription = new CinvestSubscription();
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  constructor(private formBuilder : FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      descricao: ['', Validators.required],
      classificacao: ['', Validators.required],
      categoria: ['', Validators.required],
      solicitante: ['', Validators.required],
      comunidade: ['', Validators.required],
      gerenciaCompras: ['', Validators.required],
      hasContratoFornecedor: ['',]
     });
  }

 onCancel(){
  this.router.navigate(['/cinvest']);
}

}
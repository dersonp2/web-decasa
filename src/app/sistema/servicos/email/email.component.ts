import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  @Input() display;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  contatoCtrl = new FormControl();
  filtroContato: Observable<string[]>;
  contatoPrestador: string[] = ['Tuner Construção'];
  todosContatos: string[] = ['Tuner Construção', 'Joana Leticia', 'Jefersson Luis', 'Pedro Emanuel'];

  @ViewChild('contatoInput') contatoInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filtroContato = this.contatoCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.todosContatos.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.contatoPrestador.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.contatoCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.contatoPrestador.indexOf(fruit);

    if (index >= 0) {
      this.contatoPrestador.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.contatoPrestador.push(event.option.viewValue);
    this.contatoInput.nativeElement.value = '';
    this.contatoCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.todosContatos.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}

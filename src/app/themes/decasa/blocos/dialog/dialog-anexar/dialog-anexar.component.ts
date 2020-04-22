import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';


interface Tipo {
  name: string;
}
@Component({
  selector: 'app-dialog-anexar',
  templateUrl: './dialog-anexar.component.html',
  styleUrls: ['./dialog-anexar.component.css']
})
export class DialogAnexarComponent {
  tipoControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  tipos: Tipo[] = [
    { name: 'Documento' },
    { name: 'Vídeo' },
    { name: 'Imagem' },
  ];
  files: Set<File>;

  filesUpload = [];
  fileNames = [];

  displayedColumns: string[] = ['nome', 'opcoes'];
  dataSource = new MatTableDataSource<any>(this.filesUpload);

  constructor(public dialogRef: MatDialogRef<DialogAnexarComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

  onChange(event) {
    console.log(event);
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const selectedFiles = <FileList> event.srcElement.files;

    this.files = new Set();
    this.fileNames = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < selectedFiles.length; i++) {
      this.fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
      console.log('files ' + this.files);
    }

    document.getElementById('fileLabel').innerHTML = this.fileNames.join(', ');
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      console.log(this.fileNames);
      for (const file of this.fileNames) {
        this.filesUpload.push(file);
      }
      console.log('Uploads ' + this.filesUpload);
      this.dataSource.data = this.filesUpload;
    }
  }

  onRemove(event) {
    const index = this.filesUpload.indexOf( event );
    this.filesUpload.splice(index, 1);
    this.dataSource.data = this.filesUpload;
  }

}

import { Component, OnInit  } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Imagem } from './image';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updateImage';

 teste = 'http://localhost:5000/';

  selectFile:any;

  ListaAlunos:Imagem[] = [];

  ngOnInit() {
    this.pesquisaTodos();
    this.esconderCampoImagem();
  }

  constructor(private AlunoService: ApiService) { }

  pesquisaTodos() {
    this.AlunoService.getAll().subscribe(result => { this.ListaAlunos = result })
  }

  ver(){
    console.log(this.ListaAlunos)
  }
  enviar(){

   const formData = new FormData();
   var nome = (<HTMLSelectElement>document.getElementById('nome')).value;
   
   formData.append('arquivo', this.selectFile); 
  formData.append('titulo', nome)
  
   this.AlunoService.create(formData).subscribe(res => { console.log(res) })

  window.location.reload();

  }

  onFile(event:any){
  this.selectFile = event.target.files[0]

  console.log(this.selectFile)
  }

  

   esconderCampoImagem() {
    (<HTMLSelectElement>document.getElementById('imagem')).style.display = 'none'
    
 }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LivroInterface } from '../model/livro-interface';
import { LivroServiceService } from '../services/livro-service.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent implements OnInit {

  livro: Observable<LivroInterface[]>;
  displayedColumns = ['_id','titulo' ,'autor', 'ano_publicacao',
   'btnAction',]
   
   

  

 constructor(private livroServico: LivroServiceService,
   private router: Router, private rout: ActivatedRoute ){
  
   this.livro = this.livroServico.list();
   
  

 }

 ngOnInit(): void {
     
 }
 btnClic(){
  this.router.navigate(['new'], {relativeTo: this.rout})

 }
 btnDelete(_id: string){
  this.livroServico.deletLivros(_id).subscribe(()=>{
  console.log('sucesso ao deletar')
}, error =>{
  console.log('Erro ao  tentar deletar livro',  _id);
});

 }
 btnAtualizar(livro: LivroInterface){
  console.log('botao salvar')
  this.router.navigate(['edit', livro._id], {relativeTo: this.rout})
}

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivroServiceService } from '../services/livro-service.service';
import { LivroInterface } from '../model/livro-interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cad-livro',
  templateUrl: './cad-livro.component.html',
  styleUrl: './cad-livro.component.css'
})
export class CadLivroComponent implements OnInit {



  form: FormGroup;

  constructor(private livroService: LivroServiceService, 
    private formBuilder: FormBuilder, private snackBar: MatSnackBar,
     private service: LivroServiceService, private router: Router, 
     private location: Location, private rout: ActivatedRoute){

      this.form = this.formBuilder.group({
      titulo:[],
      autor:[],
      ano_publicacao:[]

    })
      


    
  }

  ngOnInit(): void {
      
  }
  onSubmit(){
    console.log( 'Clique Salvar')
       if (this.form.valid) {
  
        const livro: LivroInterface = this.form.value;
      this.livroService.saveLivros(livro).subscribe(() => {
        
        console.log('Livro cadastrado com sucesso!');
        this.snackBar.open('Livro cadastrado com sucesso!', '', {duration: 3000})
       this.carregarLivros();
      }
      
      , error => {
        console.error('Erro ao cadastrar livro:', error);
        this.snackBar.open('Erro ao cadastrar livro:', '', {duration: 3000})
      });

    } else {
      console.error('Formulário inválido');
      this.snackBar.open('O campos não podem estar vazios', '', {duration: 3000})
    }
 
  
  }
  

  carregarLivros(){
   this.location.back();
    console.log("metodo chamado")
  }
  

  btnCancel(){

  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, identity, tap } from 'rxjs';
import { LivroInterface } from '../model/livro-interface';

@Injectable({
  providedIn: 'root'
})




export class LivroServiceService {

  private readonly API = 'http://localhost:8080/api/livros'  //Caminho da Rota Url
  

  constructor(private httpClient: HttpClient)  { }

  list(){
    return this.httpClient.get<LivroInterface[]>(this.API)
    .pipe(
      tap(livros => console.log(livros))
    )
   
  }

 

  saveLivros(livro: LivroInterface){
    return this.httpClient.post<LivroInterface>(this.API, livro);
  }

  deletLivros(_id : string){
    return this.httpClient.delete(this.API)
   
  }

  atualizaLivros(livro: LivroInterface){
    return this.httpClient.put<LivroInterface>(this.API,livro )
    

  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './livro/livro.component';
import { CadLivroComponent } from './cad-livro/cad-livro.component';

const routes: Routes = [
  {path: '', component: LivroComponent},
  {path: 'new', component: CadLivroComponent},
  {path: 'edit/id', component: CadLivroComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }

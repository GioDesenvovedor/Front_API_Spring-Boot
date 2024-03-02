import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatTableModule } from '@angular/material/table';
import { CadLivroComponent } from './cad-livro/cad-livro.component';
import { LivroComponent } from './livro/livro.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LivroComponent,
    CadLivroComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class LivrosModule { }

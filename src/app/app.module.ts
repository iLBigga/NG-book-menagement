import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/book.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // In questa linea stiamo dichiarando che il modulo store deve usare il BookReducer per gestire i cambiamenti relativi ai libri
    StoreModule.forRoot<AppState>({book: BookReducer}),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

	// Questo è un NgRx Effect che risponde ad AddBook actions
	addBook$ = createEffect(() => this.actions$.pipe(
		// Listen per le azioni di tipo AddBook
		ofType(bookActions.AddBook),

		// Per ogni AddBook action, chiama addBook nel servizio book
		// mergeMap permette chiamate multiple di addBook
		mergeMap((action) => this.bookService.addBook(action)
			.pipe(
				// Se la chiamata addBook viene eseguita, dispatch AddBookSuccess action con i dati del libro
				map(book => bookActions.AddBookSuccess(book)),
				// se la chiamata addBook fallisce, dipatch AddBookFailure action con l'errore
				catchError((error) => of(bookActions.AddBookFailure({error})))
			))
		)
	);
	
	constructor(
		private actions$: Actions,
		private bookService: BookService
	){}
}
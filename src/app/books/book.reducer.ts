import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
	initialState,
	// Qui viene creato una specie di ascoltatore per l'azione, una volta che l'azione compare bisogna definire il comportamento del reducer.
	// Prendiamo tutti dati dello stato precedente (in questo caso unarray di libri) e dopo di che creiamo un nuovo array copiando tutto il contenuto dello stato precedente [...stare] ed aggiungiamo il nuovo libro
	on(AddBook, (state) => {return state}),
	on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
	on(AddBookFailure, (state, {error}) => {
		console.error(error);
		return state;
	}),
	// Qui con l'azione RemoveBook facciamo la stessa cosa solo che utilizziamo il metodo filter per ritornare un nuovo array senza il libro che vogliamo eliminare
	on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);
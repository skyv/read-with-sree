import { Book } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IBookState {
	books: Book[];
	bookItem: Book;
	newBook: Book;
}

const initialState: IBookState = {
	books: [],
	bookItem: {},
	newBook: {}
};

export const authSlice = createSlice({
	name: "bookShelf",
	initialState,
	reducers: {
		setBooksList: (state, action: PayloadAction<Book[]>) => {
			state.books = action.payload;
		},
		setBookItem: (state, action: PayloadAction<Book>) => {
			state.bookItem = action.payload;
		},
		setNewBook: (state, action: PayloadAction<Book>) => {
			state.newBook = action.payload;
		},
	},
});

export const { setBooksList, setBookItem, setNewBook } = authSlice.actions;
export const authReducer = authSlice.reducer;
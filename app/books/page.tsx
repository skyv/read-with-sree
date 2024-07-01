"use client";
import { Book, IGetAllAssets } from "../../interfaces";
import BookList from "../../components/BookList";
import { useAppSelector } from "@/store";

import { setBooksList } from "@/store/bookSlice";
import { useAppDispatch } from "@/store";



import * as api from '../../services/index.js';
import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";

const getBooks = async (dispatch:Dispatch<IGetAllAssets>): Promise<void> => {
  try {
    const { data } = await api.fetchBooks();
    dispatch(setBooksList(data))
  } catch (error) {
    console.log(error);
  }
};

const BookListPage = () => {
  const items = useAppSelector((state) => state.bookShelf.books);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    getBooks(dispatch);
  }, [dispatch]);
  
  return(
    <>
      <BookList books={items} />
    </>
  )
};

export default BookListPage;
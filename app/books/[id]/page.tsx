"use client";

import BookDetail from "../../../components/BookDetail";
import { Book, IGetAllAssets } from "../../../interfaces";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { setBookItem } from "@/store/bookSlice";

import * as api from '../../../services/index.js';
import BookDetailLoading from "@/components/BookDetailLoading";

type Props = {
	params: { id: number }
}

const getBook = async (dispatch:Dispatch<IGetAllAssets>, id: number): Promise<void> => {
	try {
	  const { data } = await api.fetchBook(id);
	  dispatch(setBookItem(data))
	} catch (error) {
	  console.log(error);
	}
  };

const BookDetailPage = ({ params }: Props) => {
	const id = params.id

	const item = useAppSelector((state) => state.bookShelf.bookItem);
  
	const dispatch = useAppDispatch();
	useEffect(() => {
		getBook(dispatch, id);
	}, [dispatch]);

	useEffect(() => {
		return () => {
      dispatch(setBookItem({}))
    };
	}, []);
	return (
		item?.title ? 
			<BookDetail item={item} />
			:
			<BookDetailLoading />
	)
};

export default BookDetailPage;


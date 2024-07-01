"use client";
import { Book, IGetAllAssets } from "../../../../interfaces";
import { useAppSelector } from "@/store";

import { setBooksList, setNewBook } from "@/store/bookSlice";
import { useAppDispatch } from "@/store";

import { useRouter } from 'next/navigation';

// import FileBase from 'react-file-base64';


import * as api from '../../../../services/index.js';
import { useEffect, useState } from "react";
import { Dispatch } from "@reduxjs/toolkit";

const editBookApi = async (dispatch: Dispatch<IGetAllAssets>, book: Book, emptyBook: Book): Promise<void> => {
	try {
		const { data } = await api.updateBook(book._id, book);
		dispatch(setNewBook(emptyBook))
	} catch (error) {
		console.log(error);
	}
};

const EditBook = () => {
	const newBook = useAppSelector((state) => state.bookShelf.newBook);
	const currentBook = useAppSelector((state) => state.bookShelf.bookItem);
	const { push } = useRouter();

	const newItem: Book = {
		title: '',
		author: '',
		description: '',
		rating: 0,
		status: '',
		imgUrl: '',
		thumbnailUrl: '',
		category: '',
		publishedOn: '',
	}
	const dispatch = useAppDispatch();

	const [bookData, setBookData] = useState(currentBook);

	useEffect(() => {
		if (bookData) {
			dispatch(setNewBook(bookData));
		}
	}, [bookData]);

	const cancel = () => {
		push('/books');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		editBookApi(dispatch, newBook, newItem)
		push('/books');
	};

	return (
		<form className="p-4 pr-6 pb-6">
			<div>
				<div className="border-b border-gray-900/10 pb-12">

					<h2 className="text-4xl text-center uppercase text-black my-6">Edit Book Details</h2>
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="col-span-full">
							<label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
								Title
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="title"
									id="title"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={bookData.title}
									onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
								Author
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="author"
									id="author"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={bookData.author}
									onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
								Rating
							</label>
							<div className="mt-2">
								<input
									type="number"
									name="rating"
									id="rating"
									step="0.1"
									min='0'
									max='5'
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={bookData.rating || 0}
									onChange={(e) => setBookData({ ...bookData, rating: parseInt(e.target.value) })}
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
								Description
							</label>
							<div className="mt-2">
								<textarea
									id="description"
									name="description"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={bookData.description}
									onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
								/>
							</div>
							<p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about book</p>
						</div>

						<div className="col-span-full">
							<label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
								Status
							</label>
							<div className="mt-2 mr-4 inline-flex gap-2 items-center">
								<input
									type="radio"
									name="read"
									id="read"
									className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={"read"}
									checked={bookData.status === "read"}
									onChange={(e) => setBookData({ ...bookData, status: e.target.value })}
								/>
								<label htmlFor="read" className="block text-sm font-medium leading-6 text-gray-900">
									Read
								</label>
							</div>
							<div className="mt-2 mr-4 inline-flex gap-2 items-center">
								<input
									type="radio"
									name="status"
									id="status-reading"
									className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={"currently reading"}
									checked={bookData.status === "currently reading"}
									onChange={(e) => setBookData({ ...bookData, status: e.target.value})}
								/>
								<label htmlFor="status-reading" className="block text-sm font-medium leading-6 text-gray-900">
									Currently reading
								</label>
							</div>
							<div className="mt-2 mr-4 inline-flex gap-2 items-center">
								<input
									type="radio"
									name="status"
									id="status-to-read"
									className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={"want to read"}
									checked={bookData.status === "want to read"}
									onChange={(e) => setBookData({ ...bookData, status: e.target.value })}
								/>
								<label htmlFor="status-to-read" className="block text-sm font-medium leading-6 text-gray-900">
									Want to read
								</label>
							</div>
						</div>

						<div className="col-span-full">
							<label htmlFor="imgUrl" className="block text-sm font-medium leading-6 text-gray-900">
								Upload book cover image reference path
							</label>
							{/* <FileBase type="file" multiple={false} onDone={({ base64 }) => setBookData({ ...bookData, imgUrl: base64 })} /> */}
							<input
								type="text"
								name="imgUrl"
								id="imgUrl"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								value={bookData.imgUrl}
								onChange={(e) => setBookData({ ...bookData, imgUrl: e.target.value })}
							/>
						</div>

					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => cancel()}>
					Cancel
				</button>
				<button
					type="button"
					onClick={(e) => handleSubmit(e)}
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Update
				</button>
			</div>
		</form>
	);
};

export default EditBook;
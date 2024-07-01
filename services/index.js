import axios from 'axios';

// const url = 'http://localhost:3500/books';
const url = 'https://read-with-sree-node-js.vercel.app/books'

export const fetchBooks = () => axios.get(url);
export const fetchBook = (id) => axios.get(`${url}/${id}`);
export const createBook = (newBook) => axios.post(url, newBook);
export const likeBook = (id) => axios.patch(`${url}/${id}/likeBook`);
export const updateBook = (id, updatedBook) => axios.patch(`${url}/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`${url}/${id}`);

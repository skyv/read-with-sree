import * as React from "react";
import BookItem from "./BookItem";
import { Book } from "../interfaces";

type Props = {
  books: Book[];
};

const BookList = ({ books }: Props) => {

  return(
    <div className="grid grid-cols-3 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 my-6">
      {books?.map((item) => (
        <BookItem data={item} key={item.id}/>
      ))}
    </div>
)};

export default BookList;

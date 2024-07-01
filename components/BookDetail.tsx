import * as React from "react";
import { Book } from "../interfaces";
import Link from "next/link";
import ReadStatus from "./ReadStatus";
 
type BookDetailProps = {
  item: Book;
};

const BookDetail = ({ item: book }: BookDetailProps) => {
  
  return (
    <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row p-6 my-6">
      <div
        className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        <img
          src={book.imgUrl}
          alt="card-image" className="object-cover w-full " />
      </div>
      <div className="px-6">
        <ReadStatus status={book.status ? book.status : ''} />
        <h6
          className="block mb-4 text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
          {book.author}
        </h6>
        <h4 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {book.title}
        </h4>

        <Link href="/books/:id/edit" className="hover:text-blue-600 smooth-transition text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
				</Link>
        
        <div className="flow-root ">
          <div className="float-left">
            {book.status === 'currently reading' ? 
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-yellow-300 border border-yellow-300 uppercase">
                {book.status}
              </span>
              :
              <span className="bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 uppercase">
              {book.status}
              </span>
            }
          </div>

          <div className="float-right">
            {Array.from({ length: 5 }, (_, k) => k + 1).map((item) => (
              <button
                key={`buttonItem${item}`}
                type="button"
                className={`mr-1 mt-2 lg:mt-0 cursor-default`}
              >
                <svg className={ `${book.rating && book.rating >= item ? 'text-yellow-400' : 'text-gray-600 '} duration-100 `} width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
        <p className="block my-8 text-base antialiased font-normal leading-relaxed text-gray-700">
          {book.description}
        </p>
        
      </div>
    </div> 
)};

export default BookDetail;

import * as React from "react";
import BookItem from "./BookItem";
import { Book } from "../interfaces";

type Props = {
  books: Book[];
};

const BookDetailLoading = () => {

  return(
    
      <div className="relative flex-auto bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row p-6 my-6">
        <div className="animate-pulse flex space-x-4">
          <div className=" bg-slate-700 h-200 w-80"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-12 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
                <div className="h-2 bg-slate-700 rounded col-span-12"></div>
              </div>
            </div>
          </div>
          
      </div>
      </div>
)};

export default BookDetailLoading;

import React from "react";
import Link from "next/link";

import { Book } from "../interfaces";

type Props = {
  data: Book;
};

const book = ({ data }: Props) => (
  <Link href="/books/[id]" as={`/books/${data.id}`} className="book-zoom cursor-pointer">
    <img className="object-cover object-center w-full h-full rounded-lg book-zoom-image"
      src={data.imgUrl}
      alt={`book-${data.id}`} />

    {data.status === "currently reading" ?
      <span
      className="status-badge absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[6%] right-[10%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px] bg-gradient-to-tr from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
        </svg>

      </span>
      : <></>
    }
  </Link>
);

export default book;

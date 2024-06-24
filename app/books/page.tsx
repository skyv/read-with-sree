import Link from "next/link";

import { Book } from "../../interfaces";
import { sampleBooksData } from "../../utils/sample-data";
import BookList from "../../components/BookList";

async function getData() {
  const items: Book[] = sampleBooksData;
  return items;
}

const WithStaticProps = async () => {
  const items: Book[] = await getData()

  return(
    <BookList books={items} />
  )
};

export default WithStaticProps;
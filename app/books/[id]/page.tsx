
import { sampleBooksData } from "../../../utils/sample-data";

import BookDetail from "../../../components/BookDetail";
import { Book } from "../../../interfaces";

type Props = {
	params: { id: number }
}

async function getData(id: number) {
	const item:Book = sampleBooksData.find((data) => data.id === Number(id)) || {};
	return item;
}

const BookDetailPage = async ({ params }: Props) => {
	const id = params.id

	const item:Book = await getData(id);

	return (
		<BookDetail item={item} />
	)
};

export default BookDetailPage;
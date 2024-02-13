import { fetchBooks } from "@/lib/data"
import { Book } from "@/lib/definitions"
import BookItem from '../BookItem/BookItem';


export default async function BooksList() {

    const books = await fetchBooks();
    return (
        <>
            <p>{books.length}</p>
            <ul className='px-5'>
                {books.map((book: Book) => (
                    <BookItem book={book}></BookItem>
                ))}
            </ul>
        </>
    )
}

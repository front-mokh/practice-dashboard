import { Book } from "@/lib/definitions";
import styles from "./component.module.css";
import Link from "next/link";

export default function BookItem({ book }: { book: Book }) {
    return (
        <li key={book._id} className={styles.BookItem}>
            <Link href={`/books/${book._id}`}>
                <p className={styles.title}>{book.title}</p>
                <p>{book.isbn}</p>
            </Link>
        </li>
    )
}

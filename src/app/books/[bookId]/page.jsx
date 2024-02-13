import { fetchBookDetails } from "@/lib/data";
import React from "react";

export default async function BookDetails({ params }) {
  const bookId = params.bookId;
  const bookDetails = await fetchBookDetails(bookId);
  return (
    <div>
      <h1>Book number {bookId}</h1>
      <p>{bookDetails.title}</p>
      <p>{bookDetails.longDescription}</p>
    </div>
  );
}

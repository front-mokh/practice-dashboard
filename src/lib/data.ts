import connectDB from "@/lib/mongoose";
import Customer from "@/models/Customer";
import Book from "@/models/Book";
import BookDetails from "@/models/BookDetails";
import { unstable_noStore as noStore } from "next/cache";
import { BookDetailsType } from "./definitions";

export async function fetchCustomers() {
  noStore();
  console.log("DATA FETCHED");
  await connectDB();
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const customers = await Customer.find({}).exec();

  return JSON.parse(JSON.stringify(customers));
}

export async function fetchBooks() {
  await connectDB();

  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const books = await Book.find({}).exec();
  return JSON.parse(JSON.stringify(books));
}

export async function fetchBookDetails(bookId: number) {
  await connectDB();
  const bookDetails = await BookDetails.findOne({ _id: bookId }).exec();
  return bookDetails;
}

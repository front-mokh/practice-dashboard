import React from 'react'

import BookItem from '@/components/BookItem/BookItem';
import BooksList from '@/components/BooksList/BooksList';
import { Suspense } from "react"
export default async function BooksPage() {

    return (
        <div className='flex-col items-center justify-center w-100 text-center'>
            <h1 style={{ fontSize: "4rem" }}>Books List</h1>
            <Suspense fallback={<p>Loading books</p>}>
                <BooksList></BooksList>
            </Suspense>
        </div>
    )
}

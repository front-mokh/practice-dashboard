import React from 'react'
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function GoToDashboard() {
    return (
        <Link href="/dashboard" className='flex p-4 gap-4 text-white bg-black font-medium rounded-md'>
            <span>Go to dashboard</span>
            <ArrowRightCircleIcon />
        </Link>
    )
}

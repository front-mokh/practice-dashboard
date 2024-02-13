"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"


export default function Search({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {

        if (term) {
            params.set("query", term);
        } else {
            params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <form >
            <input type="text" defaultValue={params.get("query")?.toString()} onChange={(event) => {
                handleSearch(event.target.value)
            }} />
        </form>
    )
}

'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Search = () => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={search}
                placeholder="Enter the Search term"
                onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit" className="bg-blue-500 py-2 px-4 text-white font-bold rounded-lg">
                Search
            </button>
        </form>
    )
}

export default Search;
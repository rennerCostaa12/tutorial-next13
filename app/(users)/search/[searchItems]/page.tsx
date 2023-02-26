interface SearchResultProps {
    params: {
        searchItems: string;
    }
}

interface SearchResult {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ]
}

const search = async (search: string) => {
    const response = await fetch(`https://serpapi.com/search.json?q=${search}&api_key=${process.env.API_KEY}`);
    
    const datasJson: SearchResult = await response.json();
    return datasJson;
}

const SearchResult = async ({ params: { searchItems } }: SearchResultProps) => {
    const searchResults = await search(searchItems);

    return (
        <div>
            <p className="text-gray-500 text-sm">You searched for: {searchItems}</p>
            <ol className="space-y-5 p-5">
                {searchResults.organic_results.map((value) => {
                    return (
                        <li key={value.position} className="list-decimal">
                            <p className="font-bold">{value.title}</p>
                            <p>{value.snippet}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default SearchResult;
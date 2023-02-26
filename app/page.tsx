import Link from "next/link";

const Home = () => {
    return(
        <div>
            <h1 className="text-red-500 text-center text-lg">THIS IS MY HOMEPAGE!</h1>
            <div className="flex justify-center gap-3 my-2">
                <Link className="bg-blue-500 px-4 py-2 text-white font-bold rounded-md" href="/todos">Todo List</Link>
                <Link className="bg-blue-500 px-4 py-2 text-white font-bold rounded-md" href="/search">Search</Link>
            </div>
        </div>
    )
}

export default Home;
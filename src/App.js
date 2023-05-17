import { useState } from "react";
import { useQuery } from "@apollo/client";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";

import { ALL_AUTHORS, ALL_BOOKS } from "./queries/queries";

const App = () => {
  const [page, setPage] = useState("authors");
  const result = useQuery(ALL_AUTHORS);
  const bookresult = useQuery(ALL_BOOKS);
  console.log(bookresult);

  if (result.loading) {
    return <div>loading...</div>;
  }
  if (bookresult.loading) {
    return <div>loading books...</div>;
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>

      <Authors authors={result.data.allAuthors} show={page === "authors"} />

      <Books books={bookresult.data.allBooks} show={page === "books"} />

      <NewBook show={page === "add"} />
    </div>
  );
};

export default App;

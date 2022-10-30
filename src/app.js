import { useState } from "react";
import "./styles.css";

const bookDataBase = {
  Programming: [
    {
      name: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      rating: "⭐4.9 / 5"
    },
    {
      name: "Introduction to Algorithms",
      author:
        "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      rating: "⭐ 4.8 / 5"
    },
    {
      name: "Structure and Interpretation of Computer Programs (SICP)",
      author: "Harold Abelson, Gerald Jay Sussman, Julie Sussman",
      rating: "⭐ 4.6 / 5"
    },
    {
      name: "The Clean Coder: A Code of Conduct for Professional Programmers",
      author: "Robert C. Martin",
      rating: "⭐ 4.4 / 5"
    },
    {
      name: "Code Complete: A Practical Handbook of Software Construction",
      author: "Steve McConnell",
      rating: "⭐ 4 / 5"
    }
  ],
  Cooking: [
    { name: "How to Eat", author: "Nigella Lawson", rating: "⭐ 5 / 5" },
    {
      name: "The Cook's Companion",
      author: "Stephanie Alexander",
      rating: "⭐ 4.9 / 5"
    },
    {
      name: "French Provincial Cooking",
      author: "Elizabeth David",
      rating: "⭐ 4.7 / 5"
    },
    {
      name: "Essentials of Classic Italian Cooking",
      author: "Marcella Hazanc",
      rating: "⭐ 4.5 / 5"
    },
    { name: "Thai Food", author: "David Thompson", rating: "⭐ 4.2 / 5" }
  ],
  Fiction: [
    { name: "The Hobbit", author: "J.R.R. Tolkien", rating: "⭐ 4.7 / 5" },
    { name: "Catch-22", author: "Joseph Heller", rating: "⭐ 4.5 / 5" },
    {
      name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      rating: "⭐ 4.4 / 5"
    },
    {
      name: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      rating: "⭐ 4.2 / 5"
    },
    { name: "A Gentleman in Moscow", author: "Amor Towles", rating: "⭐ 4 / 5" }
  ],
  SelfHelp: [
    { name: "The Alchemist", author: "Paulo Coelho", rating: "⭐ 4.7 / 5" },
    { name: "Atomic Habits", author: "James Clear", rating: "⭐ 4.5 / 5" },
    {
      name: "Thinking Fast and Slow",
      author: "Daniel Kahneman",
      rating: "⭐ 4.5 / 5"
    },
    {
      name: "The Four Agreements",
      author: "Don Miguel Ruiz",
      rating: "⭐ 4.2 / 5"
    },
    {
      name: "The 7 Habits Of Highly Effective People",
      author: "Stephen R. Covey",
      rating: "⭐ 4.2 / 5"
    }
  ],
  History: [
    {
      name: "What Is History",
      author: "Edward Hallett Carr",
      rating: "⭐ 4.6 / 5"
    },
    { name: "1491", author: "Charles C. Mann", rating: "⭐ 4.5 / 5" },
    {
      name: "Precolonial Black Africa",
      author: "Cheikh Anta Diop",
      rating: "⭐ 4.4 / 5"
    },
    {
      name: "The Guns of August",
      author: "Barbara Tuchman",
      rating: "⭐ 4.3 / 5"
    },
    { name: "Parallel Lives", author: "Plutarch", rating: "⭐ 4.2 / 5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Programming");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: "yellow",
        padding: "40px 80px"
      }}
    >
      <h1>📚 Good Books</h1>
      <p>
        Here are the top 5 recommendation from each genre.
        <span style={{ color: "red" }}> Happy Read!</span>
      </p>
      <hr></hr>
      <div>
        {Object.keys(bookDataBase).map((genre) => {
          return (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                padding: "8px",
                fontSize: "1rem",
                fontFamily: "Manrope",
                margin: "8px 0",
                marginRight: "8px",
                cursor: "pointer"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div>
        <ul
          style={{
            margin: "24px 0px",
            paddingInlineStart: "0",
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {bookDataBase[selectedGenre].map((book) => {
            return (
              <>
                <li
                  key={book.name}
                  style={{
                    marginTop: "2rem",
                    border: "1px solid gray",
                    padding: ".5rem 2rem",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "20vw",
                    overflow: "hidden"
                  }}
                >
                  <h2>{book.name}</h2>
                  <p>{book.author}</p>
                  <h4>{book.rating}</h4>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
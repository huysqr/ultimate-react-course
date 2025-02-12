const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El seÃ±or de los anillos",
      chinese: "é­”æ??",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "ú±´?¦¬ ú«¬ú °?™€ ?§ˆë²•ì‚¬?˜ ?Œ",
      bengali:
        "à¦¹à§à¦¯à¦¾à¦°à¦¿ à¦ªà¦Ÿà¦¾à¦° à¦à¦¨à§à¦¡ à¦¦à§à¦¯ à¦«à¦¿à¦²à§‹à¦¸à¦«à¦¾à¦°à§à¦¸ à¦¸à§à¦Ÿà§‹à¦¨",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "?™•?¢Œì˜ ?²Œìž„",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//DESTRUCTURING + REST/SPREAD OPERATOR
const book = getBook(2);
const tiltle = book.title;
const { title, author, genres, publicationDate, pages } = getBook(5);

console.log(book.title + " by " + book.author);

console.log(title + " by " + author + " in " + genres[0]);

const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre + " and " + secondaryGenre);

const updateBook = {
  ...book,
  //adding new properties
  moviePublicationDate: "2023-01-01",
  //overwriting existing properties
  pages: 1210,
};

updateBook;

//TEMPLATE LITERALS
const sumary = `${title} is a book, written by ${author} in ${
  publicationDate.split("-")[0]
}.`;
console.log(sumary);

//TERNARIES INSTEAD OF IF/ELSE STATEMENTS
const pagesRange = pages > 1000 ? "over 1000 pages" : "less than 1000 pages";
pagesRange;
console.log(pagesRange);

//ARROW FUNCTIONS
function getYear(str) {
  return str.split("-")[0];
}
//or
const getYearVer2 = (str) => str.split("-")[0];

console.log(getYear(publicationDate));
console.log(getYearVer2(publicationDate));

//23. SHORT-CIRCUITING AND LOGICAL OPERATORS: &&, ||, ??

//&& example
console.log(true && "Hello");
console.log(false && "Hello");
//>> The && operator will return the first value if it is false, null, undefined, 0, NaN, or an empty string.
// Otherwise, it will return the second value.

// || example
console.log(true || "Hello");
console.log(false || "Hello");

// The && operator returns the first falsy value or the last value if none are falsy
// The || operator returns the first truthy value or the last value if none are truthy

const spanishTranslation = book.translations.spanish || "NOT TRANSLATION";
console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount || "no data");

// ?? example
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;
// This operator returns the left-hand value if it is not null or undefined.
// If the left-hand value is null or undefined, it returns the right-hand value.

//24. OPTIONAL CHAINING
const book1 = getBook(4);
function getTotalReviewCount(book) {
  return (
    book.reviews.goodreads.ratingsCount + book.reviews.librarything.ratingsCount
  );
}
getTotalReviewCount(book1); // 678160

//4. Read Books TS

type Book = {title: string, isRead: boolean};
const isBookReadTyped = (books: Book[], titleToSearch: string) =>
{
    const booksTitle = books.filter((b)=>b.title === titleToSearch);
    return (booksTitle.length > 0) && booksTitle[0].isRead;
}

const booksTyped: Book[]= 
[
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookReadTyped(booksTyped, "Devastación")); // true
console.log(isBookReadTyped(booksTyped, "Canción de hielo y fuego")); // false
console.log(isBookReadTyped(booksTyped, "Los Pilares de la Tierra")); // false
//1. Array operations

const Head = ([first]) =>  first;
const array = [1, 2, 3, 4];
console.log("Head: " + Head(array));
console.log(array);

const Tail = ([first, ...tail]) =>  tail;
console.log("Tail: " + Tail(array));
console.log(array);

function Init (array)
{
    const array2 = [...array];
    array2.pop();
    return array2;
}

console.log("Init vacio: " + Init([]));
console.log("Init: " + Init([1, 2, 3]));
console.log(array);


const Last = (array) => array[array.length -1];
console.log("Last vacio: " + Last([]));
console.log("Last: " + Last(array));
console.log(array);

//2. Concat

const Concat = (array1, array2) => [...array1, ...array2];
console.log("Concat: " + Concat([1, 2,3], [4, 5, 6]));

function ConcatMultiple () 
{
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        result = [...result, ...arguments[i]];
    }
    return result;
}

console.log("Concat Multiple: " + ConcatMultiple([1,2,3],[4, 5, 6], [7, 8, 9]));

//3. Clone Merge

function Clone (a)  
{
    return {...a};
};

console.log({name: "Ángeles", age:35 });
console.log(Clone({name: "Ángeles", age:35 }));


function Merge(source, target) 
{
    const result = Clone(target);
    return {...result, ...source};
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log(Merge(a, b));

//4. Read Books
function isBookRead(books, titleToSearch) 
{
    const booksTitle = books.filter((b)=>b.title ===titleToSearch);
    return (booksTitle.length>0 && booksTitle[0].isRead);
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


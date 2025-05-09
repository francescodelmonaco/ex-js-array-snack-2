const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// snack 1
const longBooks = books.filter(b => b.pages > 300);
console.log(longBooks);

const longBooksTitles = longBooks.map(b => b.title);
console.log(longBooksTitles);

longBooksTitles.forEach(t => console.log(t));

// snack 2
const availableBooks = books.filter(b => b.available);
console.log(availableBooks);

const discountedBooks = availableBooks.map(b => {
    const price = parseFloat(b.price.replace("€", ""));
    console.log(price);
    const discountedPrice = (price - (price / 5)).toFixed(2);
    return {
        ...b,
        price: `${discountedPrice}€`
    };
});
console.log(discountedBooks);

const fullPricedBook = discountedBooks.find(b => {
    const price = parseFloat(b.price.replace("€", ""));
    console.log(price);
    return price % 1 === 0; // numero intero diviso per 1 dà resto 0
})
console.log(fullPricedBook);

// snack 3
const authors = books.map(b => b.author);
console.log(authors);

const areAuthorsAdults = authors.every(a => a.age >= 18);
console.log(areAuthorsAdults);

if (areAuthorsAdults) {
    authors.sort((a, b) => a.age - b.age);
} else {
    authors.sort((a, b) => b.age - a.age);
}
console.log(authors);

// snack 4
const ages = authors.map(a => a.age);
console.log(ages);

const agesSum = ages.reduce((acc, a) => acc + a, 0);
console.log(agesSum);

const agesAverage = agesSum / ages.length;
console.log(agesAverage);
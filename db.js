const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function createBook(bookData) {
    return await prisma.book.create({
        data: {
            slug: bookData.id,
            title: bookData.name,
            author: bookData.author,
            description: bookData.description,
            genre: bookData.genres
        }
    });
};

async function updateBook(bookId, bookData){
    return await prisma.book.update({
        where:{
            slug: bookId
        },
        data: {
            slug: bookData.id || undefined,
            title: bookData.name || undefined,
            author: bookData.author || undefined,
            description: bookData.description || undefined,
            genre: bookData.genres || undefined
        }
    });
}

async function deleteBook(bookId){
    return await prisma.book.delete({
        where: {
            slug: bookId
        }
    });
}

async function getBookData(bookId){
    return await prisma.book.findFirst({
        where: {
            slug: bookId
        },
        select: {
            id: false,
            slug: true,
            title: true,
            description: true,
            author: true,
            genre: true
        }
    });
}

async function getAllBooks(){
    return await prisma.book.findMany({
        select: {
            id: false,
            slug: true,
            title: true,
            description: true,
            author: true,
            genre: true
        }
    });
}

/*createBook({
    id: 'id2',
    name: "Harry Potter",
    author: "Saptarshi Dey",
    description: "Idk",
    genres: ['horror', 'adventure', 'thriller']
}).then(() => console.log("Data inserted"))
.catch(err => {
    let actualError = JSON.parse(JSON.stringify(err));
    if (actualError.code == 'P2002') console.log("Id already present");
    else console.error(err);
});*/

/*updateBook('id2', {
    name: "Adeventues of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle"
}).then((data) => console.log("Data updated", data))
.catch(err => {
    console.error(err)
});*/

/*deleteBook('id1')
.then(() => console.log("Data deleted"))
.catch(err => {
    let actualError = JSON.parse(JSON.stringify(err));
    if (actualError.code == 'P2025') console.log("Record doesn't exist");
    else console.error(err);
})

getBookData('id2')
.then(data => console.log(data))
.catch(err => console.error(err))

getAllBooks()
.then(data => console.log(data))
.catch(err => console.error(err))*/

module.exports = {
    createBook, deleteBook, updateBook, getBookData, getAllBooks
}
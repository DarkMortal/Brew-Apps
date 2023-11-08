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

module.exports = {
    createBook, deleteBook, updateBook, getBookData, getAllBooks
}
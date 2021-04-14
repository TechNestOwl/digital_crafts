const mainContainer = document.querySelector("#main-container");
const bookTitle = document.querySelector("#bookTitle");
const publishDate = document.querySelector("#publishDate");
const bookDescription = document.querySelector("#bookDescription")

const getBook = async () => {
    const retrieveBook = await fetch("https://openlibrary.org/books/OL26491056M.json")
    let formattedBook = await retrieveBook.json();
    console.log(formattedBook);

    const bookPublishDate = formattedBook.publish_date;
    publishDate.innerHTML = bookPublishDate;
    
    const bookDescrip = formattedBook.description;
    bookDescription.innerHTML = bookDescrip;
    // console.log(formattedGatsby.description);
}
getBook();
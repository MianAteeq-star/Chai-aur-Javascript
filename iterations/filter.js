const myNums=[1,2,3,4,5,6,7,8,9,10]


// let newNums= myNums.filter((nums)=> nums > 5)

// console.log(newNums);


let newNums = myNums.filter((nums)=>{
   return nums>5
})

// console.log(newNums);



// myNums.forEach((nums)=> console.log(nums > 5)) Galat tarika is my logic lagy ga 



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//  let firstBook= books.filter((book) => book.title==='Book One')
//  console.log(firstBook);

//  let book= books.filter((book) => book.genre==='History')
//  console.log(book);




 let book= books.filter((book) => book.genre==='History' && book.publish> 1990)
 console.log(book);
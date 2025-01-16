// JavaScript Lists are called Arrays
// for storing different types of data.
// example:
// classes = ["math", "reading","gym",  10,   10.23,   true,  "reading"];

// var shirts= ['s','m','l']
// var shoe =['nike','addidas']

// Methods = A special type of function that works
// on lists and objects.

// push() method - a special function that allow us to
// add an item to a list. The new piece of data will always
// go to the back/ end of the list.
// Push DOES require an argument (data). telling the program
// what you want to add

// LIFO (Last in, First Out)
var bookBag = ['pencils', 'pens', 'notebooks', 'fiction book', 'sketch book']
bookBag.push('sketch book')
console.log(bookBag)

// pop() method - a special function that allows us to
// remove an item from a list. The most recent item, usually
// at the end of the list, will be removed.
bookBag.pop()
console.log(bookBag)

// lenght function - a special function that counts the
// number of items inside of a list.

console.log(bookBag.length)

function amazonCart(item) {
    itemsInCart = ['pencils', 'pens', 'notebooks', 'fiction book', 'sketch book'];
    itemsInCart.push(item);
    console.log(itemsInCart)
}
function removeAmazonCart(item){
    itemsInCart.pop(item);
    console.log(itemsInCart)
}
addAmazonCart('sneakers')

amazonCart(['pen','pencil','notebook'])



// They are more flexible compared to other programming 
// language list data types.

// In python/ Java they have Lists, Dictionary, Set, Tuple 
// which are all under the Array family. But these list
// data types all have a special job or function, where as
// other data types, including other lists.


const AudioProduct = require('./src/classes/Product/Audio.js')
const NameType = require('./src/struct/NameType.js')
const VideoProduct = require('./src/classes/Product/Video.js')
const EBook = require('./src/classes/Product/Book/eBook.js')
const PaperBook = require('./src/classes/Product/Book/paperBook.js')
const Cart = require('./src/classes/Cart.js')


//THIS IS THE MAIN() FUNCTION TO TEST ALL CLASSES

// Create Cart Owner
const owner = new NameType("John", "Smith")

// Create AudioProduct Objects

// Audio Product
aName = new NameType("The Beatles", " ")     // Javascript does not have nametypes
music1 = new AudioProduct("Yesterday", 16.5, aName)
music1.setGenre("Pop")       // Javascript does not have enum
music1.setReviewRate(9.8)

// Audio Product
aName2 = new NameType("Michael", "Jackson")
music2 = new AudioProduct("YWe Are The World", 13.75, aName2)
music2.setGenre("Country")
music2.setReviewRate(9.1)


aName8 = new NameType("Ricky", "Martin")
music3 = new AudioProduct("Bailamos", 27.50, aName8)
music3.setGenre("Pop")
music3.setReviewRate(9.9)


// Video Product
aName3 = new NameType("Robert", "Wise")
video1 = new VideoProduct("Sound of Music", 22, aName3, 1965, 195)
video1.setFilmRate("G")
video1.setReviewRate(9.8)

aName4 = new NameType("Ernest", "Hemmingway")
book1 = new EBook("The Old Man and the Sea", 8.3, aName4, 127)
book1.setReviewRate(9.5)

aName6 = new NameType("Erich Maria", "Marque")
book2 = new PaperBook("All Quiet on the Western Front", 15.80, aName6, 250)
book2.setReviewRate(9.8)


aName7 = new NameType("David", "Beldacci")
book10 = new PaperBook("DaVinci Code", 0.99, aName7, 49)
book2.setReviewRate(1.0)



aName5 = new NameType("George", "Lucas")
video2 = new VideoProduct("Star Wars", 22, aName5, 1977, 120)
video2.setFilmRate("PG")
video2.setReviewRate(8.5)



aName9 = new NameType("James", "Cameron")
video3 = new VideoProduct("Terminator 2", 19.99, aName9, 1987, 120)
video3.setFilmRate("R")
video3.setReviewRate(9.9)




// LOAD CART
myCart = new Cart(owner)

// First add 9 items to exceed capacity (7 items)
myCart.addItem(music1)
myCart.addItem(music3)
myCart.addItem(music2)
myCart.addItem(video1)
myCart.addItem(book1)
myCart.addItem(video2)
myCart.addItem(video3)
myCart.addItem(book2)
myCart.addItem(book10)



// Then remove 2 items from full list
myCart.removeItem(video3)
myCart.removeItem(music3)



//Print
myCart.displayCart()

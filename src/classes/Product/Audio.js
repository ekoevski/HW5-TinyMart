const Product = require('../Product')
const GenreType = require('../../struct/GenreType.js')

class Audio extends Product {
	constructor(aProdName, aPrice, aSinger) {
		super()
		this.productName = aProdName
		this.price = aPrice
		this.singer = aSinger
		this.genre = new GenreType("Default")

	}

	//Getters
	getSinger() {
		return this.singer
	}
	getGenre() {
		return this.genre.genreType
	}
	setGenre(aGenre) {

		this.genre.setGenre(aGenre)
	}
	setSinger(aSinger) {
		this.singer = aSinger
	}

	// Virtual Functions
	getProdTypeStr() {
		return "Music"
	}


	
	displayProdInfo() {
		console.log('[Music]')
		console.log(`Product ID: ${this.nextID}`.padEnd(30, " ") + `ProductName: ${this.productName}`);
	}


	displayContentInfo() {
		console.log(`Price: $${this.price}`.padEnd(30, " ") + `Product Review Rate: ${this.reviewRate}`);



		console.log(`Singer Name: ${this.singer.firstName} ${this.singer.lastName}`)
		console.log(`Genre: ${this.genre.genreType}`)
				console.log(``)
	}
}


module.exports = Audio
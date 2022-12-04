const Book = require('../Book.js')

class eBook extends Book {
	constructor(aProdName, aPrice, anAuthor, pageNum) {
		super()
		this.productName = aProdName
		this.price = aPrice
		this.author = anAuthor
		this.pageNumber = pageNum

	}


	// Virtual Functions
	getProdTypeStr() {
		return "EBook"
	}

	displayProdInfo() {
		console.log('[E Book]')
		console.log(`Product ID: ${this.nextID}`.padEnd(30, " ") + `Product Name: ${this.productName}`);
	}

	displayContentInfo() {
		console.log(`Price: $${this.price}`.padEnd(30, " ") + `Product Review Rate: ${this.reviewRate}`);

		console.log(`Author: ${this.author.firstName} ${this.author.lastName}`)
		console.log(`Pages: ${this.pageNumber}`)
		console.log(``)
	}

	
}


module.exports = eBook
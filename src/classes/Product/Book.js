const Product = require('../Product.js')

class Book extends Product {
	constructor(aProdName, aPrice, anAuthor, pageNum) {
		super()
		this.productName = aProdName
		this.price = aPrice
		this.author = anAuthor
		this.pageNumber = pageNum

	}

	//Getters
	getAuthor() {
		return this.author
	}
	getPages() {
		return this.pageNumber
	}

	setPages(newPageNum) {
		this.pageNumber = newPageNum
	}
	setAuthor(anAuthor) {
		this.author = anAuthor
	}

	// Virtual Functions
	getProdTypeStr() {
		return "General Book"
	}

	displayProdInfo() {
		console.log('[Book]')
		console.log(`Product ID: ${this.nextID}`.padEnd(30, " ") + `ProductName: ${this.productName}`);
	}

	displayContentInfo() {
		console.log(`Price: $${this.price}`.padEnd(30, " ") + `Product Review Rate: ${this.price}`);

}
}

module.exports = Book
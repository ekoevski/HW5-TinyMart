const Product = require('../Product')

class Video extends Product {
	constructor(aProdName, aPrice, aDirectorName, aReleaseYear, aRunTime) {
		super()
		this.productName = aProdName
		this.price = aPrice
		this.director = aDirectorName
		this.filmRate = "CONSTRUCTION"
		this.releaseYear = aReleaseYear
		this.runTime = aRunTime
		this.filmRateType = "Construction"

	}

	// Getters
	getDirector() {
		return this.director
	}
	getFilmRate() {
		return this.filmRate
	}

	getReleaseYear() {
		return this.releaseYear
	}

	getRunTime() {
		return this.runTime
	}


	// Setters
	setDirector(aDirector) {
		this.director = aDirector
	}

	setFilmRate(aRate) {
		this.filmRate = aRate
	}

	setReleaseYear(aYear) {
		this.releaseYear = aYear
	}

	setRunTime(aRunTime) {
		this.runTime = aRunTime
	}

	isNewRelease(theYear) {
		if (theYear > 2022) {
			return true
		}
		return false
	}

	getProdTypeStr() {
		return "Video"
	}

	setReviewRate(aRate) {
		this.reviewRate = aRate
	}

	displayProdInfo() {
		console.log('[Movie]')
		console.log(`Product ID: ${this.nextID}`.padEnd(30, " ") + `ProductName: ${this.productName}`);
	}


	displayContentInfo() {
		console.log(`Price: ${this.price}`.padEnd(30, " ") + `Product Review Rate: ${this.reviewRate}`);
		console.log(`Release Year: ${this.releaseYear}`)
		console.log(`Film Rating: ${this.filmRate}`)
		console.log(`Runtime: ${this.runTime}`)
		console.log(`Director Name: ${this.director.firstName} ${this.director.lastName}`)
		console.log(" ")
	}
}


module.exports = Video
const Product = require('./Product')

class Cart {
	constructor(theOwner) {
		const MAX_ITEMS = 7
		this.itemNum = 0
		this.owner = theOwner
		this.purchasedItems = []

	}

	//Getters
	getItemNum() {
		return this.itemNum
	}
	getOwner() {
		return this.owner
	}

	addItem(anItem) {
		if (this.itemNum < 7) {
			this.purchasedItems[this.itemNum] = anItem
			this.itemNum++
			return true
		}
		return false
	}

	removeItem(Product) {
		for (let i = 0; i < this.purchasedItems.length; i++) {
			if (this.purchasedItems[i].getProdID() == Product.getProdID()) {
				this.purchasedItems.splice(i, i)
				this.itemNum--
				return true
			}
		}
		return false
	}


	displayCart() {
		console.log('Testing Cart')
		console.log('============')

		console.log(`Cart Owner:  ${this.owner.firstName} ${this.owner.lastName}`)
		console.log()
		let total = 0
		for (let i = 0; i < this.purchasedItems.length; i++) {
			this.purchasedItems[i].displayProdInfo()
			this.purchasedItems[i].displayContentInfo()
			total += this.purchasedItems[i].getPrice()
		}


		let average = total/this.itemNum
		console.log("===== Summary of Purchase =====")
		console.log(`Total number of purchases: ${this.itemNum}`)
		console.log(`Total purchasing amount: $${total.toFixed(2)}`)
		console.log(`Average Price: $${average.toFixed(2)}`)
	}
}


module.exports = Cart
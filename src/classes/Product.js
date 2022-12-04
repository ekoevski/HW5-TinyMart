class Product {

    //Static variable
    static nextID = 0

    //Default Constructor

    constructor(aProdName, aPrice){

        
        this.productName = aProdName
        this.price = aPrice
        this.reviewRate = 0.0
        this.nextID = Product.createNewID()
			  this.productID = Product.nextID

    }


    //Static Function
    static createNewID(){
        return ++Product.nextID
    }


    // Getters
    // prod_id_t getProdID();
    getProdName(){
        return this.productName
    }
    getProdID(){
        return this.productID
    }
    getPrice(){
        return this.price
    }
    getReviewRate(){
        return this.reviewRate
    }

    // Setters
    setProdName(newName){
        this.productName = newName
    }
    setProdID(theID){
        this.productID = theID
    }
    setProdName(theName){
        this.productName = theName
    }
    setPrice(thePrice){
        this.price = thePrice
    }
    setReviewRate(theRate){
        this.reviewRate = theRate
    }



    //Virtual Funx  (Javascript does not have virtual functions, all can be redefined within child instances at any time)
    getProdTypeStr(){
        return "Default Product"
    }


    displayContentInfo(){
    console.log('GENERIC PRODUCT CONTENT')
    console.log(`ProductID: ${this.productID}`);
    console.log(`Product Name: ${this.productName}`);
    console.log(`Price: ${this.price}`);
    console.log(`Review Rate: ${this.reviewRate}`);

    }

    displayProdInfo(){
    console.log('GENERIC PRODUCT INFO')       
    console.log(`Next ID: ${this.nextID}`);       
    }

}

module.exports = Product
// Class in one file 
// We can export it and use in another file

class ShoppingDataType {

    constructor() {
        //private properties
        this.shoppingList = ['coffee', 'chicken', 'pizza'];
    }

    // public methods
    getShippingList(){
        return this.shoppingList.join(', ')
    }

    addItem(item){
        this.shoppingList.push(item)
    }
}
//export default ShoppingDataType;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  This in another file and we need to import 
// 
//  import ShoppingDataType from './fileName.js'
//

let shoppingCart = new ShoppingDataType;

console.log(shoppingCart.getShippingList());

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
export default ShoppingDataType;
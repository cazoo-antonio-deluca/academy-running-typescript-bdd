interface IProduct {
    name: string
    price: number;
}

interface IShoppingBasketItem {
    quantity: number,
    product: IProduct
}
 
interface IShoppingBasket {
    addItem: (numberOfItems: number, productName: string) => void;
    getFormattedContent: () => string;
}

interface ICart { 
    createShoppingBasket: (username: string) => IShoppingBasket;
    getProduct: (productName: string) => IProduct | undefined;
}

class ShoppingBasket implements IShoppingBasket {
    private items: IShoppingBasketItem[] = [];

    addItem(numberOfItems: number, productName: string) {
        const itemAlreadyInTheBasket = this.items.find((item) => item.product.name === productName);

        if (itemAlreadyInTheBasket) {
            const { quantity } = itemAlreadyInTheBasket;
            itemAlreadyInTheBasket.quantity = quantity + numberOfItems;
            return;
        }

        this.items.push({
            quantity: numberOfItems,
            product: {
                name: productName,
                price: 0.00
            }
        })
    }

    getFormattedContent() {
        const integratedBasketContent = this.items.
    }
}

class Cart implements ICart {
    private products: IProduct[] = [
        {
            name: "The Hobbit",
            price: 5.00
        },
        {
            name: "Breaking Bad",
            price: 7.00
        }
    ]

    constructor() {

    }

    createShoppingBasket(username: string) {
        username;
        return new ShoppingBasket();
    }

    getProduct(productName: string) {
        return this.products.find((product) => product.name === productName);
    }
}

export {
    Cart
}
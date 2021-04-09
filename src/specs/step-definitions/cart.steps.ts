import {defineFeature, loadFeature} from "jest-cucumber";
import {Cart} from "../../main/cart";

const feature = loadFeature('./src/specs/features/cart.feature')

defineFeature(feature, test => {
    const username = "the-username-which-would-normally-come-form-cookie";
    const cart = new Cart();
    const shoppingBasket = cart.createShoppingBasket(username);
    let shoppingBasketFormattedContent: string;
    test('Add items to shopping basket', ({
        given,
        and,
        when,
        then
    }) => {
        given(/^I add (.*) units of (.*) to my shopping basket$/, (numberOfUnits, productName) => {
            shoppingBasket.addItem(numberOfUnits, productName);
        });
    
        and(/^I add (.*) units of (.*)$/, (numberOfUnits, productName) => {
            shoppingBasket.addItem(numberOfUnits, productName);
        });
    
        when('I check the content of my shopping basket', () => {
            shoppingBasketFormattedContent = shoppingBasket.getFormattedContent()
        });
    
        then('it should contain the following information', (docString) => {
            expect(shoppingBasketFormattedContent).toBe(docString);
        });
    });
});
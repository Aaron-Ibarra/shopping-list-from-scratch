/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { createItem, fetchItems } from './fetch-utils.js';
import { renderItem } from './render-utils.js';

/* Get DOM Elements */
const form = document.getElementById('add-item');
const shoppingList = document.getElementById('shopping-list');

/* State */

/* Events */
window.addEventListener('load', () => {
    displayListItems();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const item = data.get('item');
    form.reset();

    if (item) {
        await createItem(item);
        displayListItems();
    }
});

/* Display Functions */
async function displayListItems() {
    shoppingList.innerHTML = '';

    const list = await fetchItems();

    for (let item of list) {
        const listItem = renderItem(item);
        shoppingList.append(listItem);
    }
}

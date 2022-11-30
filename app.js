/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { buyItem, createItem, deleteAllItems, fetchItems } from './fetch-utils.js';
import { renderItem } from './render-utils.js';

/* Get DOM Elements */
const form = document.getElementById('add-item');
const shoppingList = document.getElementById('shopping-list');
const deleteBtn = document.getElementById('delete-button');

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

deleteBtn.addEventListener('click', async () => {
    await deleteAllItems();
    displayListItems();
});

/* Display Functions */
async function displayListItems() {
    shoppingList.innerHTML = '';

    const list = await fetchItems();

    for (let item of list) {
        const listItem = renderItem(item);
        listItem.addEventListener('click', async () => {
            await buyItem(item);
            await displayListItems();
        });
        if (item.bought) {
            listItem.classList.add('bought');
        }

        shoppingList.append(listItem);
    }
}

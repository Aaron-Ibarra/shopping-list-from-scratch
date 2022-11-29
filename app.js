/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { createItem } from './fetch-utils.js';

/* Get DOM Elements */
const form = document.getElementById('add-item');

/* State */

/* Events */
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const item = data.get('item');
    form.reset();

    // createItem(item);
});

/* Display Functions */
function displayListItems() {}

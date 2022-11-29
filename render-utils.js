export function renderItem(item) {
    const itemLi = document.createElement('li');

    if (item.bought) {
        itemLi.classList.add('bought');
    }

    itemLi.textContent = item.item;

    return itemLi;
}

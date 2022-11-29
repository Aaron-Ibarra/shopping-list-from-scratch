export function renderItem(item) {
    const itemLi = document.createElement('li');

    itemLi.textContent = item.item;

    return itemLi;
}

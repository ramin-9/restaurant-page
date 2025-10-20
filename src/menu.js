export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const items = ['Grilled Salmon', 'Pasta Primavera', 'Chocolate Soufflé'];
    const list = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    menuDiv.appendChild(heading);
    menuDiv.appendChild(list);
    content.appendChild(menuDiv);
}

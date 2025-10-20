import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function initialiseNav() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');

    homeBtn.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    contactBtn.addEventListener('click', () => {
        clearContent();
        loadContact();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initialiseNav();
    loadHome(); // default page
});

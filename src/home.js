export default function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Bistro Aurora';

    const para = document.createElement('p');
    para.textContent = 'Experience elegant dining with our curated seasonal menu.';

    homeDiv.appendChild(heading);
    homeDiv.appendChild(para);
    content.appendChild(homeDiv);
}

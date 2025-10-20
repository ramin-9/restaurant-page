export default function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const para = document.createElement('p');
    para.textContent = 'Call us on (02) 1234 5678 or visit us at 123 Gourmet Street, Sydney.';

    contactDiv.appendChild(heading);
    contactDiv.appendChild(para);
    content.appendChild(contactDiv);
}

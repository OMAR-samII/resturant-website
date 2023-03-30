const form = document.querySelector('form');
const thankYouMessage = document.createElement('p');
thankYouMessage.textContent = 'Thank you for your message! We will get back to you shortly.';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  // send form data to server using fetch or XMLHttpRequest
  form.reset();
  form.appendChild(thankYouMessage);
  setTimeout(() => {
    form.removeChild(thankYouMessage);
  }, 5000);
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseover', () => {
    const img = menuItem.querySelector('img');
    img.style.transform = 'scale(1.1)';
  });
  menuItem.addEventListener('mouseout', () => {
    const img = menuItem.querySelector('img');
    img.style.transform = 'scale(1)';
  });
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = navLink.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
  });
});
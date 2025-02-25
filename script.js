document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        button.nextElementSibling.classList.toggle('faq-answer');
        button.classList.toggle('active');
    });
});

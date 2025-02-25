document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            button.style.transform = 'scale(1)';
        } else {
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            document.querySelectorAll('.faq-question').forEach(btn => btn.style.transform = 'scale(1)');
            answer.style.display = 'block';
            button.style.transform = 'scale(1.05)';
        }
    });
});

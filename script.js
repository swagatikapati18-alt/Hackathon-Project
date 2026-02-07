// Intersection Observer for Smooth "Nirman" Style Reveals
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        const isOpen = faqItem.classList.contains('active-faq');

        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active-faq'));

        if (!isOpen) {
            faqItem.classList.add('active-faq');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
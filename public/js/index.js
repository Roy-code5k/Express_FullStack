// Form submission interaction
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-user-form');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', () => {
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').textContent = 'Creating...';
            submitBtn.querySelector('.btn-icon').textContent = '⏳';
        });
    }

    // Add staggered entrance animation to user rows
    const rows = document.querySelectorAll('.user-row');
    rows.forEach((row, i) => {
        row.style.animationDelay = `${i * 0.08}s`;
    });
});
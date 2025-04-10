const buttons = document.querySelectorAll('.tab-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active')); // Remove from all
    button.classList.add('active'); // Add to the clicked one
  });
});

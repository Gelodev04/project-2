const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content'); 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active')); 
    button.classList.add('active'); 

    const targetId = button.id + 'Content'; 
    contents.forEach(content => {
      if (content.id === targetId) {
        content.style.display = 'block'; 
      } else {
        content.style.display = 'none'; 
      }
    });
  });
});

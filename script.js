const button = document.getElementById('colorBtn');

button.addEventListener('click', () => {
  // Random color generator
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

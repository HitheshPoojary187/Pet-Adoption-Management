// document.querySelector('.card').addEventListener('click', function(event) {
//   event.preventDefault();
//   var adivContainer = document.getElementById('adivContainer');
//   console.log(adivContainer);
//   adivContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
//   var abox = document.getElementById('abox');
//   console.log(abox);
//   abox.style.display = 'block';
// });


// Select all elements with the class 'card'
var cards = document.querySelectorAll('.card');

// Loop through each 'card' element and attach the click event listener
cards.forEach(function(card) {
  card.addEventListener('click', function(event) {
    event.preventDefault();
    var adivContainer = document.getElementById('adivContainer');
    console.log(adivContainer);
    adivContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    var abox = document.getElementById('abox');
    console.log(abox);
    abox.style.display = 'block';
  });
});

  document.getElementById('aexit').addEventListener('click', function(event) {
    var adivContainer = document.getElementById('adivContainer');
    adivContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    
    var abox = document.getElementById('abox');
    abox.style.display = 'none';
  });
  
  
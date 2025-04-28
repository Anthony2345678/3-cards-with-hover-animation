const container = document.querySelector('.cards-container');
let cards = Array.from(document.querySelectorAll('.card'));

function shuffleCards() {
  cards.sort(() => Math.random() - 0.5); // shuffle array
  cards.forEach(card => container.appendChild(card)); // reappend in new order
}

// Example: shuffle every 5 seconds
setInterval(shuffleCards, 5000);
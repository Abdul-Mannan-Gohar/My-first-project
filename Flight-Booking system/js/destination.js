const destinations = [
  { name: "Dubai, UAE", img: "img/dubai.jpg", desc: "Experience luxury and innovation in the heart of the desert." },
  { name: "Makkah, Saudi Arabia", img: "img/makhaa.jpeg", desc: "A sacred city for millions of pilgrims every year." },
  { name: "Maldives", img: "img/maldive.jpg", desc: "Relax on crystal-clear beaches surrounded by coral reefs." },
  { name: "Istanbul, Turkey", img: "img/istanbol.jpeg", desc: "Where East meets West — rich culture and history." },
  { name: "Paris, France", img: "img/paris.jpeg", desc: "The city of lights, love, and world-famous landmarks." },
  { name: "New York, USA", img: "img/new york.jpg", desc: "A city that never sleeps — full of life and opportunity." },
  { name: "London, UK", img: "img/london.jpeg", desc: "History and modernity combined on the River Thames." },
  { name: "Tokyo, Japan", img: "img/Japan.jpeg", desc: "Futuristic skyline meets centuries-old tradition." },
  { name: "Doha, Qatar", img: "img/Doha, Qatar.jpg", desc: "A growing hub of culture, art, and world-class hospitality." },
  { name: "Kuala Lumpur, Malaysia", img: "img/Kuala Lumpur, Malaysia.jpg", desc: "Home to the iconic Petronas Towers and vibrant street life." },
  { name: "Cairo, Egypt", img: "img/egypt.jpg", desc: "Discover the timeless pyramids and the Nile’s magic." },
  { name: "Bangkok, Thailand", img: "img/Bangkok, Thailand.jpg", desc: "Temples, nightlife, and street food paradise." },
  { name: "Rome, Italy", img: "img/Rome Italy.jpg", desc: "Walk through the ancient ruins of the Roman Empire." },
  { name: "Sydney, Australia", img: "img/Sydney, Australia.jpg", desc: "Opera House, beaches, and laid-back coastal charm." },
  { name: "Toronto, Canada", img: "img/Toronto, Canada.jpg", desc: "A multicultural city with stunning urban landscapes." },
  { name: "Beijing, China", img: "img/Beijing, Chin.jpg", desc: "Home to the Great Wall and centuries of imperial history." },
  { name: "Singapore", img: "img/Singapore.jpg", desc: "A global hub of innovation, greenery, and skyline views." },
  { name: "Barcelona, Spain", img: "img/Barcelona, Spain.jpg", desc: "Art, beaches, and Gaudí’s architectural wonders." },
  { name: "Bali, Indonesia", img: "img/Bali, Indonesia.jpg", desc: "Tropical paradise with temples, waves, and sunsets." },
  { name: "Zurich, Switzerland", img: "img/Zurich, Switzerland.jpg", desc: "A blend of nature, luxury, and alpine charm." }
];


// Display all destinations
const container = document.getElementById("destinations-container");
function displayDestinations(list) {
  container.innerHTML = "";
  list.forEach(dest => {
    const card = `
    <div class="container-destination">
      <div class="card">
        <img src="${dest.img}" alt="${dest.name}">
        <div class="card-content">
          <h3>${dest.name}</h3>
          <p>${dest.desc}</p>
        </div>
      </div>
      </div>`;
    container.innerHTML += card;
  });
}
displayDestinations(destinations);

// Search functionality
document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filtered = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchValue)
  );
  displayDestinations(filtered);
});

// Script to handle dynamic features

// Dynamic inventory loading
const marqueeText = document.getElementById('HELLO')
const cars = [
    { brand: "Tesla", model: "Model S", price: "$80,000", type: "electric", image: "images/tesla-model-s.jpeg" },
    { brand: "Ford", model: "Mustang", price: "$55,000", type: "sedan", image: "images/ford-mustang.jpeg" },
    { brand: "Toyota", model: "Rav4", price: "$65,000", type: "SUV", image: "images/toyota-rav4.jpeg" }, 
];

const carList = document.querySelector('.car-list');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');

function loadCars(filter = "all", searchTerm = "") {
    carList.innerHTML = "";
    const filteredCars = cars.filter(car => {
        return (filter === "all" || car.type === filter) &&
               (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.model.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image">
            <h3>${car.brand} ${car.model}</h3>
            <p>Price: ${car.price}</p>
            <p>Type: ${car.type}</p>
        `;
        carList.appendChild(carCard);
    });
    
}

searchInput.addEventListener('input', () => loadCars(filterSelect.value, searchInput.value));
filterSelect.addEventListener('change', () => loadCars(filterSelect.value, searchInput.value));

// Initialize cars on page load
loadCars();

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    contactForm.reset();
});

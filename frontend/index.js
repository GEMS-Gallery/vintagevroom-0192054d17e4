import { backend } from 'declarations/backend';

async function displayTrophyCars() {
    const trophyCars = await backend.getTrophyCars();
    const container = document.getElementById('trophy-cars-container');
    container.innerHTML = '';
    trophyCars.forEach(car => {
        container.appendChild(createCarCard(car));
    });
}

async function displayAllCars() {
    const allCars = await backend.getAllCars();
    const container = document.getElementById('cars-for-sale-container');
    container.innerHTML = '';
    allCars.forEach(car => {
        container.appendChild(createCarCard(car));
    });
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <h3>${car.make} ${car.model}</h3>
        <p>Year: ${car.year}</p>
        <p>Price: $${car.price.toFixed(2)}</p>
    `;
    return card;
}

async function addCar(event) {
    event.preventDefault();
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = parseInt(document.getElementById('year').value);
    const price = parseFloat(document.getElementById('price').value);
    const isTrophy = document.getElementById('isTrophy').checked;

    await backend.addCar(make, model, year, price, isTrophy);
    await displayTrophyCars();
    await displayAllCars();
    event.target.reset();
}

document.getElementById('add-car-form').addEventListener('submit', addCar);

// Initial display
displayTrophyCars();
displayAllCars();

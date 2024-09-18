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
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
        <div class="card car-card">
            <div class="card-body">
                <h5 class="card-title">${car.make} ${car.model}</h5>
                <p class="card-text">
                    Year: ${car.year}<br>
                    Price: $${car.price.toFixed(2)}
                </p>
                <a href="#" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `;
    return card;
}

async function addCar(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        const make = document.getElementById('make').value;
        const model = document.getElementById('model').value;
        const year = parseInt(document.getElementById('year').value);
        const price = parseFloat(document.getElementById('price').value);
        const isTrophy = document.getElementById('isTrophy').checked;

        await backend.addCar(make, model, year, price, isTrophy);
        await displayTrophyCars();
        await displayAllCars();
        form.reset();
    }
    form.classList.add('was-validated');
}

document.getElementById('add-car-form').addEventListener('submit', addCar);

// Initial display
displayTrophyCars();
displayAllCars();

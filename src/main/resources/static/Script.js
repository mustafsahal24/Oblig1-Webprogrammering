
const ticketForm = document.getElementById('ticketForm');
const ticketList = document.getElementById('ticketList');
const deleteAllButton = document.getElementById('deleteAll');
let tickets = [];

ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const movieInput = document.getElementById('filmer').value;
    const nameInput = document.getElementById('name').value;
    const surnameInput = document.getElementById('surname').value;
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    const quantityInput = document.getElementById('quantity').value;

    if (movieInput && nameInput && surnameInput && emailInput && phoneInput && quantityInput > 0) {
        const ticket = {
            movie: movieInput,
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            phone: phoneInput,
            quantity: quantityInput
        };

        tickets.push(ticket);
        displayTickets();
        ticketForm.reset();
    } else {
        alert('Vennligst fyll ut alle feltene korrekt.');
    }
});

deleteAllButton.addEventListener('click', function() {
    tickets = [];
    displayTickets();
});

function displayTickets() {
    ticketList.innerHTML = '';
    tickets.forEach(function (ticket) {
        const li = document.createElement('li');
        li.textContent = `Film: ${ticket.movie}, Navn: ${ticket.name} ${ticket.surname}, E-post: ${ticket.email}, Telefon: ${ticket.phone}, Antall billetter: ${ticket.quantity}`;
        ticketList.appendChild(li);
    });

}

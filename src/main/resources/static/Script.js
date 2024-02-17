const ticketForm = document.getElementById('ticketForm');
const ticketList = document.getElementById('ticketList');
const printTable = document.getElementById('print');
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
    // Clear table rows except the header row
    while (printTable.rows.length > 1) {
        printTable.deleteRow(1);
    }

    // Add tickets to the table
    tickets.forEach(function(ticket) {
        const newRow = printTable.insertRow(-1);
        newRow.innerHTML = `
            <td>${ticket.movie}</td>
            <td>${ticket.quantity}</td>
            <td>${ticket.name}</td>
            <td>${ticket.surname}</td>
            <td>${ticket.phone}</td>
            <td>${ticket.email}</td>
        `;
    });
}
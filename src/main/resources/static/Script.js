

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

    const errorFilmer = document.getElementById("errorFilmer");
    const antError = document.getElementById("antError");
    const fornavnError = document.getElementById("fornavnError");
    const etternavnError = document.getElementById("EtternavnError");
    const telError = document.getElementById("telError");
    const epostError = document.getElementById("epostError");
    let validInput=true;

    if (movieInput === "blank" || movieInput.trim() === "") {
        errorFilmer.innerHTML = 'Vennligst velg en film.';
        validInput = false;
    } else {
        errorFilmer.innerHTML = '';
    }

    if (!quantityInput || quantityInput <= 0) {
        antError.innerHTML = 'Vennligst velg en gyldig mengde billetter.';
    } else {
        antError.innerHTML = '';
    }

    if (!nameInput) {
        fornavnError.innerHTML = 'Vennligst fyll ut navn.';
    } else {
        fornavnError.innerHTML = '';
    }

    if (!surnameInput) {
        etternavnError.innerHTML = 'Vennligst fyll ut etternavn.';
    } else {
        etternavnError.innerHTML = '';
    }

    if (!phoneInput) {
        telError.innerHTML = 'Vennligst fyll ut telefonnummer.';
    } else {
        telError.innerHTML = '';
    }

    if (!emailInput) {
        epostError.innerHTML = 'Vennligst fyll ut e-postadresse.';
    } else {
        epostError.innerHTML = '';
    }

    if (validInput && movieInput && nameInput && surnameInput && emailInput && phoneInput && quantityInput > 0) {
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

    let billetter = [];

    function kjopticket() {
    const billett = {
    film: document.getElementById("filmer").value,
    antall: document.getElementById("Antall").value,
    fornavn: document.getElementById("Fornavn").value,
    etternavn: document.getElementById("Etternavn").value,
    telefonnr: document.getElementById("TelefonNr").value,
    epost: document.getElementById("Epost").value
};

    if (!isValidEmail(billett.epost)) {
    alert("Vennligst skriv inn en gyldig e-postadresse.");
    return;
}

    billetter.push(billett);
    oppdaterTabell();

}
    function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]/.test(email);
}

    function oppdaterTabell() {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";

    for (let i = 0; i < billetter.length; i++) {
    ut += "<tr><td>" + billetter[i].film + "</td><td>" + billetter[i].antall + "</td><td>" + billetter[i].fornavn + "</td><td>" + billetter[i].etternavn + "</td><td>" + billetter[i].telefonnr + "</td><td>" + billetter[i].epost + "</td></tr>";
}

    ut += "</table>";
    document.getElementById("ut").innerHTML = ut;
}

    function AltDelete() {
    billetter = [];
    oppdaterTabell();
}


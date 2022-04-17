const total_cases_element = document.querySelector("#total_spesimen");
const recovered_element = document.querySelector("#jumlah_sembuh");
const deaths_element = document.querySelector("#jumlah_meninggal");
const date_element = document.querySelector("#tanggal");

fetch("https://covid19.mathdro.id/api")
    .then(response => response.json())
    .then(data => {
        //total_cases_element.innerHTML = data["confirmed"].value
        //recovered_element.innerHTML = data["recovered"].value
        //deaths_element.innerHTML = data["deaths"].value
        //date_element.innerHTML = data["lastUpdate"]
    });
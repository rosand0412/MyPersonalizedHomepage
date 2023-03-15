const startSearch = () => {
    let txtToSearch = document.getElementById("searchBox").value;
    if (txtToSearch !== "") {
        window.location = ("https://www.google.com/search?q=" + txtToSearch);
    }
}

const getMonthSpanish = (numbMonth) => {
    switch(numbMonth) {
        case 0:
            return "enero";
        case 1:
            return "febrero";
        case 2:
            return "marzo";
        case 3:
            return "abril";
        case 4:
            return "mayo";
        case 5:
            return "junio";
        case 6:
            return "julio";
        case 7:
            return "agosto";
        case 8:
            return "septiembre";
        case 9:
            return "octubre";
        case 10:
            return "noviembre";
        case 11:
            return "diciembre";
    }
}

const greet = (hour) => {
    let greet = "";
    if (hour >= 18 && hour <= 23) {
        greet = "Buenas noches";
    } else if (hour <= 11 && hour >= 0) {
        greet = "Buenos días";
    } else {
        greet = "Buenas tardes";
    }

    return greet;
}

document.addEventListener('DOMContentLoaded', () => {
    const btnSearch = document.getElementById("btnSearch");
    const searchBox = document.getElementById("searchBox");

    let hoy = new Date();
    
    //related to hour
    let clockText = document.getElementById("clock");
    clockText.textContent = hoy.getHours() + ":" + hoy.getMinutes();

    //related to date
    let dayText = document.getElementById("day");
    let monthText = document.getElementById("month");
    let yearText = document.getElementById("year");
    dayText.textContent = hoy.getDate();
    monthText.textContent = getMonthSpanish(hoy.getMonth());
    yearText.textContent = hoy.getFullYear();

    //related to greeting
    let greetText = document.getElementById("greet");
    greetText.textContent = greet(hoy.getHours());

    searchBox.addEventListener('keypress', function (event){
        if (event.key === "Enter") {
            startSearch();
        }
    });

    btnSearch.addEventListener('click', () => {
        startSearch();
    });


});

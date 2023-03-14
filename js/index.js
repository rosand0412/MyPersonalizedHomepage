const startSearch = () => {
    let txtToSearch = document.getElementById("searchBox").value;
    if (txtToSearch !== "") {
        window.location = ("https://www.google.com/search?q=" + txtToSearch);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnSearch = document.getElementById("btnSearch");
    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener('keypress', function (event){
        if (event.key === "Enter") {
            startSearch();
        }
    });

    btnSearch.addEventListener('click', () => {
        startSearch();
    });
});
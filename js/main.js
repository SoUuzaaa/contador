document.getElementById("startCounter").addEventListener('click', function count() {
    if(!document.getElementById("dateInput").value) {
        alert("Insira uma data válida")
    } else {
        var dateStorage = JSON.stringify(new Date(document.querySelector("#dateInput").value))
        sessionStorage.setItem('dateInput', dateStorage)
        window.location = "counter.html"
    }
})
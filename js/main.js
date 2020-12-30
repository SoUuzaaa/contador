document.getElementById("startCounter").addEventListener('click', function count() {
    if(!document.getElementById("dateInput").value) {
        alert("Insira uma data válida")
    } else {
        let dateInput = new Date(document.querySelector("#dateNow").value)
    }
})
function timeLeft() {
    let dateInput = new Date(document.querySelector("#dateNow").value)
    let currentDate = new Date()
    let differece = dateInput.getTime() - currentDate.getTime()

    let days = Math.floor((differece / 1000 / 60 / 60 / 24))
    let hrs = Math.floor((differece / 1000 / 60 / 60) % 24)
    let min = Math.floor((differece / 1000 / 60) % 60)
    let secs = Math.floor((differece / 1000) % 60)
    document.getElementById("writeHere").innerHTML = secs
}
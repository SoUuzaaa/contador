function timeLeft() {
    let timeStorage = new Date(JSON.parse(sessionStorage.getItem('dateInput')))
    let currentDate = new Date()
    var differece = timeStorage.getTime() - currentDate.getTime()

    let days = Math.floor((differece / 1000 / 60 / 60 / 24))
    let hrs = Math.floor((differece / 1000 / 60 / 60) % 24)
    let min = Math.floor((differece / 1000 / 60) % 60)
    let secs = Math.floor((differece / 1000) % 60)
    
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hrs
    document.getElementById("minutes").innerHTML = min
    document.getElementById("secs").innerHTML = secs
    if(differece < 0) {
        clearInterval(timeLeft)

        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("secs").innerHTML = "00"
    }
}
setInterval(timeLeft, 1000)

document.getElementById("btnRestart").addEventListener("click", function returnPage() {
    window.location = "index.html"
})
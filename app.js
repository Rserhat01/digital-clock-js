function showTime(){
let date = new Date()
let h = date.getHours()
let m = date.getMinutes()
let s = date.getSeconds()

document.querySelector('.h').textContent = h
document.querySelector('.m').textContent = m
document.querySelector('.s').textContent = s

setTimeout(showTime, 1000)
}

showTime()
//define all the spans

const hours = document.querySelector('.hours');

const mins = document.querySelector('.mins');

const secs = document.querySelector('.secs');

let time = new Date().getMinutes();

//add event listeners to the DOM

window.addEventListener('DOMContentLoaded', function() {
  this.setInterval(t, 1000)
})

function t() {
  let h = new Date().getHours();
  if (h < 10) {
    hours.textContent = `0${h}`
  } else{
    hours.textContent = h
  }

  let m = new Date().getMinutes();
  if (m < 10) {
    mins.textContent = `0${m}`
  } else{
    mins.textContent = m
  }
  let s = new Date().getSeconds();
  if (s < 10) {
    secs.textContent = `0${s}`
  } else{
    secs.textContent = s
  }
}
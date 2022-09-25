


// countdown

const bacDate = new Date('2023-06-18T08:00:00+01:00').getTime()
console.log(bacDate);


setInterval(() => {
    let now = new Date(Date.now())
    
    let difference = Math.round(bacDate - now)
    let months =  Math.floor(difference / 1000 / 60 / 60 / 24 / 30)
    let days =  Math.floor((difference / 1000 / 60 / 60 / 24) - months * 30)
    let hours =  Math.floor(difference / 1000 / 60 / 60 - months * 24 * 30 - days * 24)
    let minutes =  Math.floor(difference / 1000 / 60  - months * 24 * 30 * 60 - days * 24 * 60 - hours * 60)
    let seconds =  Math.floor(difference / 1000 - months * 24 * 30 * 60 *60 - days * 24 * 60 *60 - hours * 60 *60 - minutes * 60)
    console.log(`${months} : ${days} : ${hours} : ${minutes} : ${seconds}`);
    updateTime(months, days, hours, minutes, seconds)
}, 1000);

const months = document.getElementById('monthsCount')
const days = document.getElementById('daysCount')
const hours = document.getElementById('hoursCount')
const minutes = document.getElementById('minutesCount')
const seconds = document.getElementById('secondsCount')


function updateTime(mo,d,h,m,s) {
    months.innerText = mo 
    days.innerText = d 
    hours.innerText = h 
    minutes.innerText = m 
    seconds.innerText = s
}





















particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#dcdcdc" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#181818" },
      polygon: { nb_sides: 10 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);


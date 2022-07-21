const player = document.getElementById("player")
const enemy = document.getElementById("enemy")
let spikeInterval = Math.random() * (10 - 3) + 1

// enemy.style.animationDelay = Math.random() * (10 - 3) + 1 + 's'
// do {
//     enemy.classList.add("enemy-animation")
// } while (enemy.classList !== "enemy-animation");

//нужно попробовать сделать разницу между шипами используя setInterval!!!
//сделать чтобы когда едет был дым а когда в прыжке постепенно поворачивался на 90 градусов!!!
//сделать домашнюю страницу!!!

document.addEventListener('keydown', function () {
    jump()
})

function jump() {
    if (player.classList !== "jump") {
        player.classList.add("jump")
    }
    setTimeout(() => {
        player.classList.remove("jump")
    }, 500);
}

let isAlive = setInterval(() => {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"))

    if (enemyLeft < 50 && enemyLeft > 0 && playerTop >= 210) {
        window.location.pathname = './game-over.html'
    }
}, 10);


//theme chenger
// document.querySelector('.themes').addEventListener('change', (event) => {
//     if (event.target.nodeName === 'INPUT') {
//         console.log("lalala")
//         document.documentElement.classList.remove('dark', 'light')
//         document.documentElement.classList.add(event.target.value)
//     }
// })
document.querySelector('.theme-input').addEventListener('change', (event) => {
    if (event.target.nodeName === 'INPUT') {
        document.documentElement.classList.toggle('dark')
        console.log("theme changed")
    }
})
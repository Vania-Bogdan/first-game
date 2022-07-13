const player = document.getElementById("player")
const enemy = document.getElementById("enemy")
// let spikeInterval = Math.random() * (10 - 3) + 1

// enemy.style.animationDelay = Math.random() * (10 - 3) + 1 + 's'

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
        alert("GAME OVER")
        enemy.style.left = '570px'
    }
}, 10)
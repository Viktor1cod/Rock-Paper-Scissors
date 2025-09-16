const choices = ["rock", "paper", "scissors"];

let ps = 0, cs = 0; //счёт игры

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function result(player, comp) {
    if (player === comp) return "Ничья";
    const win =
        (player === "rock" && comp === "scissors") ||
        (player === "scissors" && comp === "paper") ||
        (player === "paper" && comp === "rock");
    if (win) { ps++; return "Ты выиграл!"; }
    cs++; return "Комп выиграл.";
}

document.querySelectorAll("button[data-move]").forEach(btn => {
    btn.addEventListener("click", () => {
        const player = btn.dataset.move;
        const comp = computerChoice();
        const res = result(player, comp);
        document.getElementById("info").textContent =
            `Ты: ${player} - Комп: ${comp}. ${res}`;
        document.getElementById("p").textContent = ps;
        document.getElementById("c").textContent = cs;
    });
});
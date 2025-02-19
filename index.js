let number = parseInt(prompt("Digite o número do mês do seu aniversário:"), 10);
let m = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

if (number >= 1 && number <= 12) {
    alert("Você nasceu no mês de " + m[number - 1]);
} else {
    alert("Número inválido! Digite um número entre 1 e 12.");
}

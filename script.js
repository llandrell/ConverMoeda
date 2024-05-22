// Suponha que você tenha uma lista de moedas
const moedas = ["USD", "EUR", "GBP", "JPY", "RMB"]; // Exemplo de lista de moedas
const nomesMoedas = ["Dólar", "Euro", "Libra", "Iene", "Yuan"]

// Função para preencher o select
function populateCurrencySelect() {
    const selectElement = document.getElementById("fromCurrency");
    moedas.forEach(moeda => {
        const option = document.createElement("option");
        option.value = moeda;
        selectElement.add(option);
    });

    nomesMoedas.forEach(nome => {
        const option = document.createElement("option");
        option.text = nome;
        selectElement.add(option);
    });
}

// Chame a função para preencher o select quando a página for carregada
window.onload = populateCurrencySelect;


function convertCurrency() {
    const valor = document.getElementById("valor").value;
    const moedaInicial = document.getElementById("moedaInicial").value;
    const moedaFinal = document.getElementById("moedaFinal").value;

    fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.log("Error fetching exchange rate:", error);
            document.getElementById("result").innerHTML = "Erro ao obter taxa de câmbio. Tente novamente mais tarde.";
        });
}


function updateTime() {
    let horaAtual = new Date();
    let hours = horaAtual.getHours();
    let minutes = horaAtual.getMinutes();
    let seconds = horaAtual.getSeconds();
  
    // Formatação de zero à esquerda, se necessário
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("datetime").innerText = timeString;
}
  
// Atualiza o relógio a cada segundo
setInterval(updateTime, 1000);


   
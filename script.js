const price = document.querySelector('.price');
const time = document.querySelector('.time');
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const refreshTime = 301;

let timeLeft = refreshTime;

function updatePrice() {
	fetch(proxyurl+ 'https://poe.ninja/api/data/CurrencyHistory?league=Heist&type=Currency&currencyId=2')
		.then(response => response.json())
		.then(data => {
			const prices = data.receiveCurrencyGraphData;
			price.textContent = Math.round(prices[prices.length - 1].value * 10) / 10;
		});
	timeLeft = refreshTime;
}

updatePrice();
setInterval(() => {
	timeLeft = timeLeft - 1;
	time.textContent = timeLeft;
}, 1000);
setInterval( updatePrice, refreshTime * 1000);
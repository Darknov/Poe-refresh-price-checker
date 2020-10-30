const price = document.querySelector('.price');
const proxyurl = "https://cors-anywhere.herokuapp.com/";

function updatePrice() {
	fetch(proxyurl+ 'https://poe.ninja/api/data/CurrencyHistory?league=Heist&type=Currency&currencyId=2')
		.then(response => response.json())
		.then(data => {
			const prices = data.receiveCurrencyGraphData;
			price.textContent = prices[prices.length - 1].value;
		});
}

updatePrice();
setInterval( updatePrice, 300000);
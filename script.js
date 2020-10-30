const price = document.querySelector('.price');


function updatePrice() {
	fetch('https://poe.ninja/api/data/CurrencyHistory?league=Heist&type=Currency&currencyId=2',	{mode: 'no-cors'})
		.then(response => response.json())
		.then(data => {
			const prices = data.receiveCurrencyGraphData;
			price.textContent = prices[prices.length - 1].value;
		});
}

updatePrice();
setInterval( updatePrice, 5000);
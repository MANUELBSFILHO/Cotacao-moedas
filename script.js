function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
    const apiKey = '069a0c204371988a99c52a65';
  
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[toCurrency];
        const result = amount * rate;
  
        document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => console.error('Erro ao obter a taxa de câmbio:', error));
  }
  
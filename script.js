let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");




const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-yzAnHKycxnAvCTHvUjFSyPjS'}
  };
  
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20ethereum%2C%20dogecoin', options)
    .then(res => res.json())
    .then(res => {

        btc.innerHTML = response.bitcoin.usd;
        eth.innerHTML = response.ethereum.usd;
        doge.innerHTML = response.dogecoin.usd;
    })
    .catch(err => console.error(err));
  
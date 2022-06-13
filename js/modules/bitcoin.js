export default function initBitcoin() {
  async function fetchBitcoin(url) {
    const bitcoinResponse = await fetch(url);
    const json = await bitcoinResponse.json();
    const price = (1000 / json.BRL.sell).toFixed(4);
    changePrice(price);
  }

  function changePrice(price) {
    const priceHolder = document.querySelector(".btc-preco");
    priceHolder.innerHTML = price;
  }

  fetchBitcoin("https://blockchain.info/ticker");
}


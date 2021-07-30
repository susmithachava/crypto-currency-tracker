import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {id, currencyLogo, currencyName, usdValue, euroValue} = cryptoItem
  return (
    <div className="item-container">
      <div className="items">
        <img src={currencyLogo} alt={currencyName} className="coin-type" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </div>
  )
}
export default CryptocurrencyItem

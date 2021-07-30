// Write your JS code here
import React from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends React.Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div className="cyprto-list-container">
        <div className="heading">
          <h3 className="coin-type-heading">Coin Type</h3>
          <div className="heading-2">
            <h3 className="usd-heading">USD</h3>
            <h3 className="euro-heading">EURO</h3>
          </div>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          cryptoData.map(item => (
            <CryptocurrencyItem cryptoItem={item} key={item.id} />
          ))
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList

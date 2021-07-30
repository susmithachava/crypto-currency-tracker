// Write your code here
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => (
  <div className="app-container">
    <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      className="crypto-image"
      alt="Cryptocurrency Tracker"
    />
    <CryptocurrenciesList />
  </div>
)
export default CryptocurrencyTracker

import PropTypes from 'prop-types';
import './Pricing.scss';

const Pricing = ({ title, price, person, features, buttonText }) => {
return (
    <section className="card-section">
      <div className="card">
        <div className="card-part card-top">
          {/* <span className="card-icon">{icon}</span> */}
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-part card-center">
          <span className="sign">€</span>
          <span className="price">{price}</span>
          <span className="time">/{person}</span>
        </div>
        <div className="card-part card-bottom">
          <ul className="list-options">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="btn-signup">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Pricing;

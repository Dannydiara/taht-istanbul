
import PropTypes from 'prop-types';
import './ImageCard.scss';

const ImageCard = ({ imageUrl, title1, title2, title3, link }) => {
  return (
    <a href={link} className="figure">
      <img src={imageUrl} alt="Card Image" />
      <figcaption>
        <h3 className="title1">{title1}</h3>
        <h3 className="title2">{title2}</h3>
        <h3 className="title3">{title3}</h3>
      </figcaption>
    </a>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ImageCard;


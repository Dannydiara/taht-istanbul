import './GalleryCard.scss';
import PropTypes from 'prop-types';

const GalleryCard = ({ imageSrc, title }) => {
  return (
    <section className="section-card">
      <figure className="figure">
        <img src={imageSrc} alt={title} />
        <div className="caption">
          <h3>{title}</h3>
        </div>
      </figure>
    </section>
  );
};

GalleryCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GalleryCard;

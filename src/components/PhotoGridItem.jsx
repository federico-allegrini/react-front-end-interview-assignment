import PropTypes from "prop-types";

import { photoGridItem, info } from "./PhotoGridItem.module.css";

const PhotoGridItem = ({ title, text, image, grayscale }) => {
  const smallImageUrl = image
    .replace(image.split("/")[5], 500)
    .replace(image.split("/")[6], 500);
  return (
    <div
      className={photoGridItem}
      style={{
        backgroundImage: `url(${smallImageUrl})`,
        filter: grayscale ? "grayscale(100%)" : "none",
      }}
    >
      <div className={info}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

PhotoGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  grayscale: PropTypes.bool,
};

export default PhotoGridItem;

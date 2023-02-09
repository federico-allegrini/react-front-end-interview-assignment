import PropTypes from "prop-types";

import PhotoGridItem from "./PhotoGridItem";

import { photoGrid } from "./PhotoGrid.module.css";

const PhotoGrid = ({ photos, grayscale }) => {
  return (
    <div className={photoGrid}>
      {photos.map((photo, index) => (
        <PhotoGridItem
          key={index}
          title={photo.author}
          text={photo.url}
          image={photo.download_url}
          grayscale={grayscale}
        />
      ))}
    </div>
  );
};

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      url: PropTypes.string,
      download_url: PropTypes.string,
    })
  ).isRequired,
  grayscale: PropTypes.bool,
};

export default PhotoGrid;

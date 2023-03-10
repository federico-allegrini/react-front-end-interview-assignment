import React, { useState, useEffect } from "react";

import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import PhotoGrid from "./PhotoGrid";

import { photoFetcher, toolbar } from "./PhotoFetcher.module.css";

const PhotoFetcher = () => {
  const [photos, setPhotos] = useState([]);
  const [grayscale, setGrayscale] = useState(false);
  const [newPhotos, setNewPhotos] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${newPhotos}&limit=4`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error(error));
  }, [newPhotos]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${newPhotos + page}&limit=4`)
      .then((response) => response.json())
      .then((data) => setPhotos([...photos, ...data]))
      .catch((error) => console.error(error));
  }, [page]);

  useEffect(() => {
    if (photos.length > 4) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [photos]);

  const handleToggle = () => setGrayscale(!grayscale);

  const fetchNewPhotos = () => setNewPhotos(newPhotos + 1);

  const morePhotos = () => setPage(page + 1);

  return (
    <div className={photoFetcher}>
      <h1>Photo Fetcher</h1>
      <div className={toolbar}>
        <ToggleSwitch isOn={grayscale} handleToggle={handleToggle} />
        <Button onClick={fetchNewPhotos}>Fetch New Photos</Button>
      </div>
      <PhotoGrid photos={photos} grayscale={grayscale} />
      <Button onClick={morePhotos} fullWidth>
        More Photos
      </Button>
    </div>
  );
};

export default PhotoFetcher;
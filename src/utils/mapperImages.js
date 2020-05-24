const mapperImages = images => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
};

export default mapperImages;

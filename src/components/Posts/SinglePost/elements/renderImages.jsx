import {
  NumberOfPhotosNotShown,
  PhotoInGroupOfPhotos,
  PhotoNoGroup,
  PostPhotosContainer,
} from "../styles";

export const renderImages = (images) => {
  // const images = images || [];
  if (images.length === 0) return null;

  if (images.length === 1) {
    return <PhotoNoGroup src={images[0].image} alt="Post Image" />;
  }

  return (
    <PostPhotosContainer>
      {images.slice(0, 4).map((image, index) => (
        <div key={image.id} style={{ position: "relative" }}>
          <PhotoInGroupOfPhotos
            src={image.image}
            alt={`Post Image ${index + 1}`}
          />
          {index === 3 && images.length > 4 && (
            <NumberOfPhotosNotShown>
              +{images.length - 4}
            </NumberOfPhotosNotShown>
          )}
        </div>
      ))}
    </PostPhotosContainer>
  );
};

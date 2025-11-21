export default function ImagePreview({ image }) {
  return (
    <div className="main-image-wrapper">
      <img className="main-image" src={image.src} alt={image.title} />
      <div className="image-info">
        <h2>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
}

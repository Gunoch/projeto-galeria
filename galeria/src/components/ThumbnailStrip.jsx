export default function ThumbnailStrip({ images, currentIndex, onSelect }) {
  return (
    <div className="thumb-strip">
      {images.map((img, index) => (
        <button
          key={img.id}
          className={index === currentIndex ? "thumb-button active" : "thumb-button"}
          onClick={() => onSelect(index)}
        >
          <img className="thumb-image" src={img.src} alt={img.title} />
        </button>
      ))}
    </div>
  );
}

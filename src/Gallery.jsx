import ImageGallery from "react-image-gallery";

export function Gallery() {
  const images = [
    {
      original: "/auto.jpeg",
      thumbnail: "/auto.jpeg",
    },
    {
      original: "/click-me-button.webp",
      thumbnail: "/click-me-button.webp",
    },
  ];

  return <ImageGallery items={images} />;
}
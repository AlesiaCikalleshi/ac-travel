import { TRIP_PREVIEW_IMAGES } from "../data";
import type { PreviewImage } from "../types";

export default function usePreviewImageSrc(
  previewImage?: PreviewImage | null,
) {
  const previewImageSrc = previewImage?.templateImageId
    ? TRIP_PREVIEW_IMAGES.find(
        (image) => image.id === previewImage?.templateImageId,
      )
    : null;
  return previewImageSrc;
}

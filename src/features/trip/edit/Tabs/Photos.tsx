import FilesForm from "@features/trip/components/Files/FilesForm";
import { Trip, TripFile } from "@features/trip/types";

import ContentCard from "./ContentCard";

interface Props {
  trip: Trip;
  onUpdate: (data: Partial<Trip>) => void;
}

export default function Photos({ trip, onUpdate }: Props) {
  const onChange = (photos: TripFile[]) => {
    onUpdate({ photos });
  };
  return (
    <ContentCard title="Photos">
      <FilesForm
        tripId={trip.id}
        defaultFiles={trip.photos}
        onChange={onChange}
        type="photo"
        autoUpload
      />
    </ContentCard>
  );
}

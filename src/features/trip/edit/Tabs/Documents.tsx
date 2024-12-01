import FilesForm from "@features/trip/components/Files/FilesForm";
import { Trip, TripFile } from "@features/trip/types";

import ContentCard from "./ContentCard";

interface Props {
  trip: Trip;
  onUpdate: (data: Partial<Trip>) => void;
}

export default function DocumentTabs({ trip, onUpdate }: Props) {
  const onChange = (documents: TripFile[]) => {
    onUpdate({ documents });
  };
  return (
    <ContentCard title="Documents">
      <FilesForm
        tripId={trip.id}
        defaultFiles={trip.documents}
        onChange={onChange}
        type="document"
        autoUpload
      />
    </ContentCard>
  );
}

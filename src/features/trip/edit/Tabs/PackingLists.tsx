import { Trip } from "@features/trip/types";

import ContentCard from "./ContentCard";
import PackingListForm from "@features/trip/components/PackingListForm";

interface Props {
  trip: Trip;
  onUpdate: (data: Partial<Trip>) => void;
}

export default function PackingLists({ trip, onUpdate }: Props) {
  const onChange = (packingLists: Trip['packingLists']) => {
    onUpdate({ packingLists });
  };
  return (
    <ContentCard title="Packing List">
      <PackingListForm
        defaultPackingLists={trip.packingLists}
        onChange={onChange}
      />
    </ContentCard>
  );
}

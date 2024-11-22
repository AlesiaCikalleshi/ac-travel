import PlacesForm from "@features/trip/components/PlacesForm";
import { Trip } from "@features/trip/types";
import { useAppDispatch, useAppSelector } from "@store/index";

import {
  nextStep,
  selectWizardTrip,
  setPlaces,
} from "../../store/tripWizardSlice";
import Pagination from "../Navigation/Pagination";

export default function Places() {
  const { onSubmit, places } = usePlacesForm();

  return (
    <PlacesForm
      defaultPlaces={places}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination />}
      autoFocus
    />
  );
}

function usePlacesForm() {
  const trip = useAppSelector(selectWizardTrip);
  const dispatch = useAppDispatch();

  const onSubmit = (places: Trip["places"]) => {
    dispatch(setPlaces(places));
    dispatch(nextStep());
  };

  return {
    onSubmit,
    places: trip.places,
  };
}

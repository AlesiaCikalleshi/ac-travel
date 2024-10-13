import { type SubmitHandler } from "react-hook-form";

import PlacesForm from "@features/trip/componnets/PlacesForm";
import { Trip } from "@features/trip/types";
import { useAppDispatch, useAppSelector } from "@store/index";

import {
  nextStep,
  selectWizardTrip,
  setPlaces,
} from "../../store/tripWizardSlice";
import Pagination from "../Navigation/Pagination";

interface FormInput {
  places: Trip["places"];
}

export default function Places() {
  const { onSubmit, places } = usePlacesForm();

  return (
    <PlacesForm
      defaultPlaces={places}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination />}
    />
  );
}

function usePlacesForm() {
  const trip = useAppSelector(selectWizardTrip);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    dispatch(setPlaces(data.places));
    dispatch(nextStep());
  };

  return {
    onSubmit,
    places: trip.places,
  };
}

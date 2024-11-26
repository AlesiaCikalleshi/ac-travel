import { useNavigate } from "react-router-dom";

import { AppRoutes } from "@config/routes";
import { useAddTripMutation } from "@features/trip/store/tripApi";
import { useAppDispatch, useAppSelector } from "@store/index";

import FilesForm from "../../../components/Files/FilesForm";
import type { TripFile } from "../../../types";
import {
  resetWizard,
  selectWizardTrip,
  setPhotos,
} from "../../store/tripWizardSlice";
import Pagination from "../Navigation/Pagination";

export default function Photos() {
  const { photos, onSubmit, onFileStorageRemoval, isLoading, tripId } =
    usePhotosForm();

  return (
    <FilesForm
      defaultFiles={photos}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination isLoading={isLoading} />}
      onFileStorageRemoval={onFileStorageRemoval}
      type="photo"
      tripId={tripId}
    />
  );
}

function usePhotosForm() {
  const [addTrip, { isLoading }] = useAddTripMutation();
  const navigate = useNavigate();
  const trip = useAppSelector(selectWizardTrip);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: TripFile[]) => {
    if (isLoading) {
      return;
    }
    dispatch(setPhotos(data));
    const result = await addTrip({ ...trip, photos: data });
    if (!("error" in result)) {
      navigate(AppRoutes.trips);
      dispatch(resetWizard());
    }
  };

  const onFileStorageRemoval = (data: TripFile[]) => {
    dispatch(setPhotos(data));
  };

  return {
    onSubmit,
    photos: trip.photos,
    isLoading,
    onFileStorageRemoval,
    tripId: trip.id,
  };
}

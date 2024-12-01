import { useAppDispatch, useAppSelector } from '@store/index';

import FilesForm from '../../../components/Files/FilesForm';
import type { TripFile } from '../../../types';
import {
  nextStep,
  selectWizardTrip,
  setDocuments,
} from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';

export default function Documents() {
  const { documents, onSubmit, onFileStorageRemoval } = useDocumentsForm();

  return (
    <FilesForm
      tripId={tripId}
      defaultFiles={documents}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination />}
      onChange={onFileStorageRemoval}
      type="document"
    />
  );
}

function useDocumentsForm() {
  const trip = useAppSelector(selectWizardTrip);
  const dispatch = useAppDispatch();

  const onSubmit = (data: TripFile[]) => {
    dispatch(setDocuments(data));
    dispatch(nextStep());
  };

  const onFileStorageRemoval = (data: TripFile[]) => {
    dispatch(setDocuments(data));
  };

  return {
    onSubmit,
    documents: trip.documents,
    onFileStorageRemoval,
    tripId: trip.id,
  };
}

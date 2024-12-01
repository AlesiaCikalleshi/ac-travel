import { type SubmitHandler } from 'react-hook-form';

import PackingListForm from '../../../components/PackingListsForm';
import type { Trip } from '@features/trip/types';
import { useAppDispatch, useAppSelector } from '@store/index';

import {
  nextStep,
  selectWizardTrip,
  setPackingLists,
} from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';

interface FormInput {
  packingLists: Trip['packingLists'];
}

export default function PackingLists() {
  const { onSubmit, packingLists } = usePackingLists();

  return (
    <PackingListsForm
      defaultPackingLists={packingLists}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination />}
    />
  );
}

function usePackingLists() {
  const trip = useAppSelector(selectWizardTrip);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    dispatch(setPackingLists(data.packingLists));
    dispatch(nextStep());
  };

  return {
    onSubmit,
    packingLists: trip.packingLists,
  };
}

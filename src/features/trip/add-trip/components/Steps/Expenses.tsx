import { type SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';

import ExpenseDialog from '@features/trip/components/Expenses/ExpenseDialog';
import ExpensesTable from '@features/trip/components/Expenses/ExpensesTable';
import type { Expense, Trip } from '@features/trip/types';
import AppButton from '@features/ui/AppButton';
import useDialog from '@hooks/useDialog';
import { useAppDispatch, useAppSelector } from '@store/index';

import {
  nextStep,
  selectWizardTrip,
  setExpenses,
} from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';

interface FormInput {
  expenses: Trip['expenses'];
}

export default function expenses() {
  const { open, close, isOpen } = useDialog();
  const { onSubmit, expenses, handleSubmit, addExpense, removeExpense } =
    useExpensesForm({
      closeExpenseDialog: close,
    });

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ width: '100%' }}
      gap={3}
    >
      <AppButton
        variant="outlined"
        onClick={open}
        endIcon={<AddIcon />}
        fullWidth
      >
        Add Expense
      </AppButton>
      <ExpenseDialog isOpen={isOpen} onClose={close} onSave={addExpense} />
      {expenses.length > 0 && (
        <ExpensesTable expenses={expenses} onDelete={removeExpense} />
      )}
      <Pagination />
    </Stack>
  );
}

function useExpensesForm({
  closeExpenseDialog,
}: {
  closeExpenseDialog: () => void;
}) {
  const trip = useAppSelector(selectWizardTrip);
  const dispatch = useAppDispatch();

  const { handleSubmit, watch, control } = useForm<FormInput>({
    defaultValues: {
      expenses: trip.expenses,
    },
  });
  const expenses = watch('expenses');
  const { append, remove } = useFieldArray({
    control,
    name: 'expenses',
  });

  const addExpense = (expense: Expense) => {
    append(expense);
    closeExpenseDialog();
  };

  const removeExpense = (expenseId: string) => {
    remove(expenses.findIndex((expense) => expense.id === expenseId));
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    dispatch(setExpenses(data.expenses));
    dispatch(nextStep());
  };

  return {
    onSubmit,
    handleSubmit,
    expenses,
    addExpense,
    removeExpense,
  };
}

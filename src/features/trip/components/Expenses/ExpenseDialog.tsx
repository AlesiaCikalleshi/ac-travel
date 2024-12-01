import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Box, FormHelperText, Grid, Stack, TextField } from '@mui/material';

import {
  EXPENSES_CATEGORIES,
  EXPENSE_ICON_BY_CATEGORY,
} from '@features/trip/data';
import { removeTrailingZeros } from '@features/trip/utils/removeTrailingZeros';
import AppDialog from '@features/ui/AppDialog';
import { useBreakpoints } from '@hooks/useBreakpoints';

import type { Expense } from '../../types';
import ExpenseCategoryIcon from './ExpenseCategoryIcon';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (addedExpense: Expense) => void;
}

interface FormInput {
  category: Expense['category'];
  amount: Expense['amount'];
  description: Expense['description'];
}

export default function (props: Props) {
  const { md } = useBreakpoints();
  const {
    onSubmit,
    onReset,
    control,
    handleSubmit,
    register,
    onCategoryClick,
    errors,
    selectedCategory,
  } = useExpenseForm(props);

  return (
    <AppDialog
      isOpen={props.isOpen}
      onClose={onReset}
      onPrimaryButtonClick={handleSubmit(onSubmit)}
      title="Add expense"
      primaryButtonText="Save"
      isForm
      maxWidth={684}
    >
      <Stack sx={{ width: '100%' }} gap={4}>
        <Box>
          <Grid
            container={!md}
            display={{ xs: 'grid', md: 'flex' }}
            gridTemplateColumns="repeat(3, 75px)"
            columnGap={{ xs: 5, sm: 20, md: 0 }}
            justifyContent="space-between"
            rowGap={2}
          >
            {EXPENSES_CATEGORIES.map(({ id, category }) => {
              const iconInfo = EXPENSE_ICON_BY_CATEGORY[category];

              return (
                <Grid
                  item
                  gap={1}
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                  key={id}
                >
                  <ExpenseCategoryIcon
                    onClick={() => onCategoryClick(category)}
                    category={category}
                    color={iconInfo.color}
                    backgroundColor={iconInfo.backgroundColor}
                    borderColor={
                      category === selectedCategory ? iconInfo.color : 'white'
                    }
                  >
                    {<iconInfo.icon fontSize="large" />}
                  </ExpenseCategoryIcon>
                </Grid>
              );
            })}
            <input
              type="hidden"
              {...register('category', {
                required: 'Please select a category!',
              })}
            />
          </Grid>
          {errors.category && (
            <FormHelperText error>{errors.category.message}</FormHelperText>
          )}
        </Box>
        <Stack gap={3}>
          <Controller
            name="amount"
            control={control}
            rules={{
              required: 'Please specify your amount!',
              validate: {
                positiveNumber: (value) =>
                  value > 0 ? undefined : 'Amount should be grater than zero!',
              },
            }}
            render={({ field: { ref, ...field }, fieldState }) => (
              <TextField
                type="number"
                inputRef={ref}
                margin="normal"
                fullWidth
                id="amount"
                label="Amount"
                variant="standard"
                required
                helperText={fieldState.error?.message}
                error={Boolean(fieldState.error)}
                {...field}
                onChange={(event) =>
                  field.onChange(removeTrailingZeros(event.target.value))
                }
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field: { ref, ...field }, fieldState }) => (
              <TextField
                inputRef={ref}
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                variant="standard"
                multiline
                maxRows={6}
                inputProps={{ maxLength: 200 }}
                helperText={
                  fieldState.error?.message ?? `${field.value?.length}/200`
                }
                error={Boolean(fieldState.error)}
                {...field}
              />
            )}
          />
        </Stack>
      </Stack>
    </AppDialog>
  );
}

function useExpenseForm({ onSave, onClose }: Props) {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    resetField,
    trigger,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      amount: 0,
      description: '',
    },
  });

  const selectedCategory = watch('category');

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    onSave({ id: uuidv4(), ...data });
    reset();
  };

  const onReset = () => {
    resetField('category');
    reset();
    onClose();
  };

  const onCategoryClick = (category: Expense['category']) => {
    setValue('category', category);
    trigger('category');
  };

  return {
    onSubmit,
    onReset,
    control,
    handleSubmit,
    register,
    onCategoryClick,
    errors,
    selectedCategory,
  };
}

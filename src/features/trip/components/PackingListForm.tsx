import { useState } from 'react';
import {
  Controller,
  type SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {
  Checkbox,
  Grid,
  IconButton,
  InputBase,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { Colors } from '@config/styles';
import { Trip } from '@features/trip/types';
import AppButton from '@features/ui/AppButton';

interface Props {
  defaultPackingLists: Trip['packingLists'];
  onSubmit: SubmitHandler<FormInput>;
  SubmitComponent: React.ReactNode;
}

interface FormInput {
  packingLists: Trip['packingLists'];
}

export default function PackingListForm(props: Props) {
  const {
    packingLists,
    handleSubmit,
    control,
    onInputKeyDown,
    onAddPackingListClick,
    newListName,
    setNewListName,
    onRemovePackingListClick,
    onNewListInputKeyDown,
  } = usePackingListsForm(props);

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(props.onSubmit)}
      noValidate
      sx={{ width: '100%' }}
      gap={3}
    >
      <Stack gap={1}>
        <TextField
          label="List title"
          placeholder="👕 Clothes"
          value={newListName}
          onChange={(event) => setNewListName(event.target.value)}
          inputProps={{
            autoFocus: true,
            onKeyDown: (event) => onNewListInputKeyDown(event),
          }}
          variant="standard"
        />
        <AppButton
          disabled={!newListName}
          variant="text"
          onClick={onAddPackingListClick}
          startIcon={<AddIcon />}
          sx={{ textTransform: 'uppercase' }}
        >
          Add checklist
        </AppButton>
      </Stack>

      <Grid columns={{ xs: 1, md: 3, xl: 4 }} container rowGap={2}>
        {packingLists.map((packingList, packingListIndex) => (
          <Grid
            item
            key={packingList.id}
            xs={1}
            sx={{
              borderRight: { xs: 'none', md: 1 },
              borderBottom: { xs: 1, md: 'none' },
              borderColor: { xs: 'grey.200', md: 'grey.200' },
              pb: { xs: 2, md: 0 },
              px: { md: 2 },
              minHeight: { xs: 194, md: 'auto' },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pb={{ md: 0.5 }}
            >
              <Typography variant="body2">{packingList.name}</Typography>
              <IconButton
                onClick={() => onRemovePackingListClick(packingListIndex)}
                sx={{ mr: { xs: 1, md: 0 } }}
              >
                <DeleteOutlinedIcon sx={{ color: Colors.secondaryBlue }} />
              </IconButton>
            </Stack>

            <Stack gap={1}>
              {packingList.items.map((item, itemIndex) => (
                <Stack direction="row" key={item.id}>
                  <Controller
                    name={`packingLists.${packingListIndex}.items.${itemIndex}.isChecked`}
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onChange={field.onChange}
                        inputProps={{
                          'aria-label': 'Is packing list item checked',
                        }}
                      />
                    )}
                  />
                  <Controller
                    name={`packingLists.${packingListIndex}.items.${itemIndex}.text`}
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <InputBase
                        id={`${packingList.name}.${packingListIndex}.items.${itemIndex}`}
                        inputRef={ref}
                        placeholder="Type here..."
                        inputProps={{ 'aria-label': 'Packing list item name' }}
                        onKeyDown={(event) =>
                          onInputKeyDown(event, packingListIndex, itemIndex)
                        }
                        sx={{
                          textDecoration: item.isChecked
                            ? 'line-through'
                            : 'none',
                          width: '100%',
                        }}
                        {...field}
                      />
                    )}
                  />
                </Stack>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
      {props.SubmitComponent}
    </Stack>
  );
}

function usePackingListsForm({ defaultPackingLists }: Props) {
  const [newListName, setNewListName] = useState('');
  const { watch, handleSubmit, control, setFocus } = useForm<FormInput>({
    defaultValues: {
      packingLists: defaultPackingLists,
    },
  });
  const packingLists = watch('packingLists');
  const { update, remove, append } = useFieldArray({
    control,
    name: 'packingLists',
  });

  const onAddPackingListClick = () => {
    if (!newListName) {
      return;
    }
    append({
      id: uuidv4(),
      name: newListName,
      items: [{ id: uuidv4(), text: '', isChecked: false }],
    });
    setNewListName('');
  };

  const onRemovePackingListClick = (packingListIndex: number) => {
    remove(packingListIndex);
  };

  const onNewListInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onAddPackingListClick();
    }
  };

  const onInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    packingListIndex: number,
    itemIndex: number,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newItems = [...packingLists[packingListIndex].items];
      newItems.splice(itemIndex + 1, 0, {
        id: uuidv4(),
        text: '',
        isChecked: false,
      });
      update(packingListIndex, {
        ...packingLists[packingListIndex],
        items: newItems,
      });
      setTimeout(
        () =>
          setFocus(
            `packingLists.${packingListIndex}.items.${itemIndex + 1}.text`,
          ),
        0,
      );
    } else if (event.key === 'Backspace') {
      if (
        !packingLists[packingListIndex].items[itemIndex].text &&
        packingLists[packingListIndex].items.length > 1
      ) {
        event.preventDefault();
        const newItems = [...packingLists[packingListIndex].items];
        newItems.splice(itemIndex, 1);
        update(packingListIndex, {
          ...packingLists[packingListIndex],
          items: newItems,
        });
        setTimeout(
          () =>
            setFocus(
              `packingLists.${packingListIndex}.items.${
                itemIndex === 0 ? 0 : itemIndex - 1
              }.text`,
            ),
          0,
        );
      }
    }
  };
  return {
    control,
    handleSubmit,
    packingLists,
    onInputKeyDown,
    newListName,
    setNewListName,
    onNewListInputKeyDown,
    onAddPackingListClick,
    onRemovePackingListClick,
  };
}

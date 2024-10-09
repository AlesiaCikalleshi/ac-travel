import { PURGE } from "redux-persist";
import { v4 as uuidv4 } from "uuid";

import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@store/index";

import { Trip } from "../../types";

interface TripWizardState {
  trip: Trip;
  currentStep: number;
}

const getInitialState = () => ({
  currentStep: 0,
  trip: {
    id: uuidv4(),
    name: "",
    previewImage: null,
    description: "",
    startDate: null,
    endDate: null,
    locationFrom: "",
    destinations: [],
    places: [],
    expenses: [],
    documents: [],
    packingLists: [],
    photos: [],
  },
});

const initialState: TripWizardState = getInitialState();

export const tripWizardSlice = createSlice({
  name: "tripWizard",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      if (state.currentStep === 0) {
        throw new Error("You are already on the first step. You can't go back");
      }
      state.currentStep -= 1;
    },
    setTravelInfromation: (
      state,
      action: PayloadAction<
        Pick<
          Trip,
          "startDate" | "endDate" | "description" | "name" | "previewImage"
        >
      >,
    ) => {
      state.trip.name = action.payload.name;
      state.trip.description = action.payload.description;
      state.trip.previewImage = action.payload.previewImage;
      state.trip.startDate = action.payload.startDate;
      state.trip.endDate = action.payload.endDate;
    },
  },
  //The PURGE action is used to clear the persisted state from storage.
  // When this action is triggered, it will execute the provided function.
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return getInitialState();
    });
  },
});

export const { nextStep, previousStep, setTravelInfromation } =
  tripWizardSlice.actions;

export const selectCurrentStep = (state: RootState) =>
  state.tripWizard.currentStep;
export const selectWizardTrip = (state: RootState) => state.tripWizard.trip;

export default tripWizardSlice.reducer;

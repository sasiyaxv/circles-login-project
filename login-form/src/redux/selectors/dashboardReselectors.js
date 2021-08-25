import { createSelector } from "reselect";

export const selectEmail = createSelector(
  (state) => state.getDashboard.email,
  (email) => email
);

export const selectName = createSelector(
  (state) => state.getDashboard.name,
  (name) => name
);

export const selectOrigin = createSelector(
  (state) => state.getDashboard.origin,
  (origin) => origin
);

export const selectIsLoading = createSelector(
  (state) => state.getDashboard.isLoading,
  (isLoading) => isLoading
);

export const selectDashboardHeader = createSelector(
  (state) => state.setValues?.dashBoardHeader,
  (dashBoardHeader) => dashBoardHeader
);

import { createSelector } from "reselect";

export const reselectEmail = createSelector(
  (state) => state.getDashboard.email,
  (email) => {
    return email;
  }
);

export const reselectName = createSelector(
  (state) => state.getDashboard.name,
  (name) => {
    return name;
  }
);

export const reselectOrigin = createSelector(
  (state) => state.getDashboard.origin,
  (origin) => {
    return origin;
  }
);

export const reselectIsLoading = createSelector(
  (state) => state.getDashboard.isLoading,
  (isLoading) => {
    return isLoading;
  }
);

export const reselectDashboardHeader = createSelector(
  (state) => state.setValues?.dashBoardHeader,
  (dashBoardHeader) => {
    return dashBoardHeader;
  }
);

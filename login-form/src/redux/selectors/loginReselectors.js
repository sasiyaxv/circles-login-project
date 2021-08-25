import { createSelector } from "reselect";

export const selectUserName = createSelector(
  (state) => state.form?.loginForm?.values?.userName,
  (userName) => userName
);

export const selectPassWord = createSelector(
  (state) => state.form?.loginForm?.values?.passWord,
  (passWord) => passWord
);

export const selectLoginHeader = createSelector(
  (state) => state?.setValues?.loginHeader,
  (loginHeader) => loginHeader
);

export const selectLoginSubHeader = createSelector(
  (state) => state.setValues?.loginSubHeader,
  (loginSubHeader) => loginSubHeader
);

export const selectIsLoading = createSelector(
  (state) => state.setValues?.isLoading,
  (isLoading) => isLoading
);

export const selectIsError = createSelector(
  (state) => state.setValues?.isError,
  (isError) => isError
);

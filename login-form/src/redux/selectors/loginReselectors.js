import { createSelector } from "reselect";

export const reselectUserName = createSelector(
  (state) => state.form?.loginForm?.values?.userName,
  (userName) => {
    return userName;
  }
);

export const reselectPassWord = createSelector(
  (state) => state.form?.loginForm?.values?.passWord,
  (passWord) => {
    return passWord;
  }
);

export const reselectLoginHeader = createSelector(
  (state) => state?.setValues?.loginHeader,
  (loginHeader) => {
    return loginHeader;
  }
);

export const reselectLoginSubHeader = createSelector(
  (state) => state.setValues?.loginSubHeader,
  (loginSubHeader) => {
    return loginSubHeader;
  }
);

export const reselectIsLoading = createSelector(
  (state) => state.setValues?.isLoading,
  (isLoading) => {
    return isLoading;
  }
);

export const reselectIsError = createSelector(
  (state) => state.setValues?.isError,
  (isError) => {
    return isError;
  }
);

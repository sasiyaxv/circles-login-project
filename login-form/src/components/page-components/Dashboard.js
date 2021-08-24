import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "rebass";
import { getDashboardData } from "../../redux/actions";
import { RebassHeading } from "../ui-components/RebassHeading";
import { RebassLabel } from "../ui-components/RebassLabel";
import { LoadingScreen } from "./LoadingScreen";
import {
  reselectEmail,
  reselectName,
  reselectOrigin,
  reselectIsLoading,
  reselectDashboardHeader,
} from "../../redux/selectors/dashboardReselectors";

const Dashboard = ({
  getDashboard,
  email,
  name,
  origin,
  isLoading,
  dashBoardHeader,
}) => {
  useEffect(() => {
    const user = getDashboard();
    console.log("NEWUSER", user);
  }, []);

  return (
    <Box m={[2, 3, 4]}>
      <RebassHeading
        name={dashBoardHeader}
        fontSize={[5, 6, 7]}
        textAlign={"center"}
      />

      <Box
        bg="#E8E8E8"
        mt={[2, 3, 4]}
        mb={[2, 3, 4]}
        p={[2, 3, 4]}
        sx={{ borderWidth: "1px", borderStyle: "solid", borderColor: "black" }}
      >
        <RebassHeading
          name={"Information"}
          fontSize={[3, 4, 5]}
          marginBottom={[2, 3, 4]}
          marginTop={[2, 3, 4]}
        />
        {!isLoading ? (
          <RebassLabel
            fontSize={[2, 3, 4]}
            fontWeight="bold"
            fontFamily="serif"
            name={`
          Email address : ${email} 
          Name : ${name}
         Origin Port : ${origin}`}
          />
        ) : (
          ("isLoading...", (<LoadingScreen />))
        )}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    email: reselectEmail(state),
    name: reselectName(state),
    origin: reselectOrigin(state),
    isLoading: reselectIsLoading(state),
    dashBoardHeader: reselectDashboardHeader(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDashboard: () => {
      dispatch(getDashboardData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// email: getUserEmailSelector()
// function getDashboardDomainSelector(state) {
//   return state.getDashboard
// }

// function getUserEmailSelector(state) {
//   return getDashboardDomainSelector(state).email
// }

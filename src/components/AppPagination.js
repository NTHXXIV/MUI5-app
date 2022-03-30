import React from "react";
import { Pagination } from "@mui/material";

function AppPagination({ setCurrentPage, numberOfPage }) {
  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scroll(0, 0);
  };

  // const useStyles = makeStyles((theme) => ({
  //   selected: {
  //     color: "rgb(255, 255, 255)",
  //     backgroundColor: "rgb(215, 71, 66)",
  //   },
  // }));

  // const classes = useStyles();

  return (
    <Pagination
      sx={{
        display: "flex",
        justifyContent: "center",
        ".Mui-selected": {
          backgroundColor: "rgb(215, 71, 66)",
          "&:hover": {
            backgroundColor: "rgb(150, 49, 46)",
          },
        },
      }}
      count={numberOfPage}
      onChange={handleChange}
    ></Pagination>
  );
}

export default AppPagination;

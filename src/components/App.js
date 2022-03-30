import React, { useState } from "react";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import AppCard from "./AppCard";
import Data from "../data";
import { CssBaseline, Grid, Container } from "@mui/material";
import AppPagination from "./AppPagination";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const boxPerPage = 5;
  const indexOfLastBox = currentPage * boxPerPage;
  const indexOfFirstBox = indexOfLastBox - boxPerPage;
  const data = Data().slice(indexOfFirstBox, indexOfLastBox);
  const numberOfPage = Number((Data().length / boxPerPage).toFixed());

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar />
      <Container maxWidth="lg" m="auto">
        <Grid container spacing={2} m={4} justifyContent="flex-start">
          {data.map((e) => (
            <Grid item xs={9} md={5} lg={4} marginTop={3}>
              <AppCard e={e} key={e.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <AppPagination
        setCurrentPage={setCurrentPage}
        numberOfPage={numberOfPage}
      />
    </ThemeProvider>
  );
}

export default App;

import type { NextPage } from "next";
import { Button, Stack } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default Home;

import { Box, Button, Container, Divider, Stack } from "@mui/material";
import "./App.css";
import styled from "@emotion/styled";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed,";
import Navbar from "./components/Navbar";

// const useStyles = makeStyles({
//   button: {
//     color: "white",
//     backgroundColor: "black",
//   },
// });

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: theme.palette.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  return (
    <Box>
        <Navbar />
        <Divider />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
    </Box>
  );
}

export default App;

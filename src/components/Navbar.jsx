import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../theme";
import styled from "@emotion/styled";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  Dashboard,
  Mail,
  MailOutline,
  NotificationAdd,
  NotificationAddOutlined,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  width: "250px",
  // padding: 6,
  color: "black",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "30%",
    margin: "10px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "5px 0px 2px 0px",
  margin: 2,
  position: "absolute",
  alignItems: "center",

  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "12ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      // sx={{ backgroundColor: theme.palette.primary.red }}
      position="sticky"
      // height="20vh"
    >
      <StyleToolBar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="h6">
          Admin Panel
        </Typography>

        <Dashboard
          sx={{ display: { xs: "block", sm: "none" }, marginRight: "10px" }}
        />

        <Search sx={{ backgroundColor: theme.palette.primary.red }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Stack direction="row" spacing={2}>
          <UserBox sx={{ justifyContent: "center", alignItems: "center" }}>
            <ModeNightIcon />
            <LightModeIcon />
            <Switch />
          </UserBox>
          <UserBox sx={{ justifyContent: "center", alignItems: "center" }}>
            <MailOutline />
          </UserBox>
          <UserBox sx={{ justifyContent: "center", alignItems: "center" }}>
            <NotificationAddOutlined />
          </UserBox>
          <UserBox sx={{ justifyContent: "center", alignItems: "center" }}>
            <SettingsOutlined onClick={handleClick} />
          </UserBox>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ top: 20 }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Stack>
      </StyleToolBar>
    </AppBar>
  );
};

export default Navbar;

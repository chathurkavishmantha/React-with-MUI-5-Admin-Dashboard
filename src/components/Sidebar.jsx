import { ExpandLess, ExpandMore, Palette, People } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import { theme } from "../theme";
import StarBorder from "@mui/icons-material/StarBorder";
import ListSubheader from "@mui/material/ListSubheader";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <Box
    flex={1} p={2} sx={{ display: { xs: "none", sm: "block", borderRight: "solid 0.1em #176045", boxShadow: "0px 0px 11px 0px black"} }}
    >
      <Box position="fixed" width={270}>
        <List
          // sx={{bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader   sx={{bgcolor:"none"}} component="div" id="nested-list-subheader">
              Dashboard
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AddHomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <LandscapeIcon />
            </ListItemIcon>
            <ListItemText primary="Lands" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Qutations" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

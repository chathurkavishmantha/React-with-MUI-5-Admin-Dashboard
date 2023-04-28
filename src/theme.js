import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary:{
            main:"#176045",
            light:"skyblue",
            red: "#FF0000"
        },
        secondary:{
            main:"#15c630"
        },
        otherColor:{
            main:"#999"
        },
        common: {
            white: "#ffff"
        },
        shape:{
            borderRadius: 0.5,
        }

    }
})
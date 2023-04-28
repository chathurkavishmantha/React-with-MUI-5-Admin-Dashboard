import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const amount = useSelector((state) => state.amount);
const dispatch = useDispatch();

return (
  <Container maxWidth="sm">
    <Typography>Amount: {amount}</Typography>

    <Button
      variant="contained"
      color="primary"
      onClick={() => dispatch({ type: "INCREMENTS", value: 1000 })}
    >
      Deposite
    </Button>
    <Button
      variant="contained"
      color="secondary"
      onClick={() => dispatch({ type: "DECREMENTS", value: 1000 })}
    >
      Withdrow
    </Button>
  </Container>
);

export default App;

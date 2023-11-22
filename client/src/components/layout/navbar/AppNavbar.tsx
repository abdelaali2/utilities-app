import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CONTACT_PAGE,
  HOME_PAGE,
  TODOS_PAGE,
} from "../../../utilities/PagesIndex";

import "./AppNavbar.scss";

const AppNavbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0.2 }}>
            <Link to={HOME_PAGE} className="NavLink">
              <h2>UTILITIES</h2>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0.1 }}>
            <Link to={CONTACT_PAGE} className="NavLink">
              <h3>Contacts</h3>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0.1 }}>
            <Link to={TODOS_PAGE} className="NavLink">
              <h3>Todo</h3>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppNavbar;

// TODO: Make automatic redirection between "/" & "/home", through usable redirection TSX element

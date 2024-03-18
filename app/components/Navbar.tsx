"use client";

import * as React from "react";
import { COIN_NAME, TWITTER_HANDLE } from "../constants";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

type navLink = {
  text: string;
  link: string;
};

const pages: navLink[] = [
  { text: "Tweetr (I mean X)", link: `https://twitter.com/${TWITTER_HANDLE}` },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar className="flex flex-row justify-between">
          <div className="hidden flex-row md:flex">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {COIN_NAME}
            </Typography>
          </div>
          <div className="flex flex-row md:hidden">
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {COIN_NAME}
            </Typography>
          </div>
          <Box className="flex md:hidden">
            <IconButton
              size="large"
              aria-label="navbar options"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className="block md:hidden"
            >
              {pages.map((page) => (
                <MenuItem key={page.text}>
                  <a href={page.link}>{page.text}</a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="hidden md:flex">
            {pages.map((page) => (
              <Button
                className="ml-5"
                key={page.text}
                href={page.link}
                sx={{ mx: 1, my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

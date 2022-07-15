import React from 'react'
import {AppBar, Toolbar, styled, Typography, InputBase, Badge, Box } from '@mui/material'
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export const Navbar = () => {

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between"
  });

  const Search = styled("div")(({theme}) => ({
    background: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }));

  const MenuBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }));


  return (
    <AppBar position='sticky' >
      <StyledToolbar>
      <Typography variant='h5' fontWeight={600} sx={{ display: {xs: 'none', sm: 'block'}}}> Social Circle </Typography>
      <SocialDistanceIcon  sx={{ display: {xs: 'block', sm: 'none'}}} />
      <Search><InputBase placeholder='Search..' /> </Search>

      <MenuBox>
      <Badge badgeContent={11} color="error">
      <MessageIcon />
      </Badge>

      <Badge badgeContent={4} color="error">
      <NotificationsActiveIcon />
      </Badge>
      </MenuBox>

      </StyledToolbar>
      </AppBar>
  )
}

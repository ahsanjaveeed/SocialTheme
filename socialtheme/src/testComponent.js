import { Button, Typography } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import React from 'react'
import { styled } from '@mui/system';


export const TestComponent = () => {

  const CustomButton = styled(Button)({
    background: "yellow",
    color:"white",
    margin:5,
    "&:hover": {
      background: "white",
      color: "yellow",
      variant: "outlined"},
  });

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<AddLocationAltIcon />} size="small">Settings</Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h1">h1 tag with h1 component</Typography>
      <Typography variant="h1">h1 tag with h2 component</Typography>

      <CustomButton>Heelo </CustomButton>
      <CustomButton>Jeee </CustomButton>
    </div>
  )
}

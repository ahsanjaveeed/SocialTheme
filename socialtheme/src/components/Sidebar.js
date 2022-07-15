import React from 'react'
import {Box, List, ListItem, ListItemButton,
     ListItemIcon, ListItemText, Switch} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import GroupsIcon from '@mui/icons-material/Groups';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const Sidebar = ({appMode, setMode}) => {
  return (
    <Box position="sticky" flex={1} p={2} sx={{
        display: { xs: 'none', sm: 'block'}
    }}>

      <Box position="fixed">
        <List>
          <ListItem>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href='#pages'>
              <ListItemIcon>
                <PagesIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href='#groups'>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href='#newpost'>
              <ListItemIcon>
                <DataSaverOnIcon />
              </ListItemIcon>
              <ListItemText primary="New Post" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href='#logout'>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href='#darkmode'>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={e=> setMode(appMode === "light"? "dark": "light")} />
            </ListItemButton>
          </ListItem>

        </List>
        </Box>
    </Box>
  )
}

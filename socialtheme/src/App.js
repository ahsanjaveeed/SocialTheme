
import {Box, Stack, createTheme, ThemeProvider} from '@mui/material'
import { useState } from 'react';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';

function App() {

  const [appMode, setMode] = useState('light')

  const appTheme = createTheme({
    palette: {
      mode : appMode
    }
  });

  return (
    <ThemeProvider theme={appTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      
        <Navbar></Navbar>
          <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar appMode={appMode} setMode={setMode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
          </Stack>
        
    </Box>
    </ThemeProvider>
  );
}

export default App;

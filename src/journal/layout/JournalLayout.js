import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components/index.js';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>

        <NavBar drawerWidth={drawerWidth}></NavBar>

        <SideBar drawerWidth={drawerWidth}></SideBar>

        <Box 
            component='main'
            sx={{flexGrow: 1, p:3}}
        >

            <Toolbar/>
            {children}

        </Box>

    </Box>
  )
}

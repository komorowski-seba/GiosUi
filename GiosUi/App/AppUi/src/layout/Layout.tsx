import { Drawer, List, ListItemButton, ListItemText, Toolbar, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemIcon from "@mui/material/ListItemIcon";


const drawerWidth = 220;

export default function Layout(): JSX.Element {
    return (
        <Box sx={{ display: "flex" }}>

            <Drawer
                variant="permanent"
                sx={{
                width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": { width: drawerWidth }
                }} >
    
            <Toolbar />

            <List>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <MapIcon />
                    </ListItemIcon>
                    <ListItemText primary="Maps" />
                </ListItemButton>

                <ListItemButton component={Link} to="/items">
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Items" />
                </ListItemButton>                
                
            </List>

            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>

        </Box>
    );
}
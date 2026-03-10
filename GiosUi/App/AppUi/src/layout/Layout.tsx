import { Drawer, List, ListItemButton, ListItemText, Toolbar, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

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
                }}
            >
    
                <Toolbar />

                <List>
                    <ListItemButton component={Link} to="/">
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
            
                    <ListItemButton component={Link} to="/users">
                        <ListItemText primary="Users" />
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
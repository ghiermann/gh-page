import * as React from 'react';
import Typography from '@mui/material/Typography';
import ScienceIcon from '@mui/icons-material/Science';
import GitHubIcon from '@mui/icons-material/GitHub';
import { List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const navigateToResearch = () => {
        navigate('research');
    }

    return (
        <>
            <Typography sx={{mt: 6, mb: 3}} color="text.secondary" variant="h3">
                {'ghiermann'}
            </Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>{navigateToResearch()}}>
                        <ListItemIcon>
                            <ScienceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Research" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href={'https://github.com/ghiermann'} target="_blank" rel="noopener">
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </ListItem>
            </List>

        </>
    );
}

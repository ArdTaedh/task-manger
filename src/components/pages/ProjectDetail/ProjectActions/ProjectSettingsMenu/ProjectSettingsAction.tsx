import React, {useState} from 'react';
import {IconButton} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuComp from '../../../../MenuComp/MenuComp';



const ProjectSettingsAction = () => {
    const [menuElement, setMenuElement] = useState<null | HTMLElement>(null);
    const open = Boolean(menuElement);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuElement(event.currentTarget);
    };

    const handleClose = () => {
        setMenuElement(null);
    };

    const menuElements = [
        {  
            MenuItemTitle: "Edit Project", MenuItemOnClick: handleClose
        },
        {  
            MenuItemTitle: "Delete Project", MenuItemOnClick: handleClose
        }
    ]

    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleOpen}
            >
                <MoreHorizIcon/>
            </IconButton>
            <MenuComp 
                menuElement={menuElement}
                open={open}
                close={handleClose}
                menuItems={menuElements}
            />
        </>
    );
};

export default ProjectSettingsAction;
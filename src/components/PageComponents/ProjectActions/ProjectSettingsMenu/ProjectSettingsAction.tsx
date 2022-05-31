import React, {useState} from 'react';
import {IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProjectSettingsMenu from "./ProjectSettingsMenu";

const ProjectSettingsAction = () => {
    const [menuElement, setMenuElement] = useState<null | HTMLElement>(null);
    const open = Boolean(menuElement);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuElement(event.currentTarget);
    };

    const handleClose = () => {
        setMenuElement(null);
    };

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
                <MoreVertIcon/>
            </IconButton>
            <ProjectSettingsMenu
                menuElement={menuElement}
                open={open}
                close={handleClose}
            />
        </>
    );
};

export default ProjectSettingsAction;
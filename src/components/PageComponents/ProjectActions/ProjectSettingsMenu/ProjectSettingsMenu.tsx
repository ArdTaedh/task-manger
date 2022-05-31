import React from 'react';
import {Menu, MenuItem} from "@mui/material";

type ProjectSettingsMenuProps = {
    menuElement: null | HTMLElement,
    open: boolean,
    close: () => void
}

const ProjectSettingsMenu = ({ menuElement, open, close }: ProjectSettingsMenuProps) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={menuElement}
            open={open}
            onClose={close}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={close}>Edit Project</MenuItem>
            <MenuItem onClick={close}>Delete Project</MenuItem>
        </Menu>
    );
};

export default ProjectSettingsMenu;
import React, {FC} from 'react';
import {MenuItem, Menu, Box, Typography, List, ListItem, ListItemText, Divider} from "@mui/material";
import ViewMenu from "./Submenu/ViewMenu";

type ViewSortMenuProps = {
    menuElement: null | HTMLElement,
    open: boolean,
    close: () => void
}

const ViewSortMenu = ({menuElement, open, close}: ViewSortMenuProps) => {
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
            <Box
                sx={{
                    width: '300px',
                    // padding: '0 1rem'
                }}
            >
                <Box>
                    <Typography
                        pl="1rem"
                        fontWeight='bold'
                    >
                        View
                    </Typography>
                    <ViewMenu />
                </Box>
            </Box>
            <Divider />
            <Box
                sx={{
                    padding: '1rem 1rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography
                    fontWeight='bold'
                >
                    Sort
                </Typography>
                Sort Actions
            </Box>
            {/*<MenuItem onClick={close}>Profile</MenuItem>*/}
            {/*<MenuItem onClick={close}>My account</MenuItem>*/}
            {/*<MenuItem onClick={close}>Logout</MenuItem>*/}
        </Menu>
    );
};

export default ViewSortMenu;
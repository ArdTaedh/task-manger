import React, {useEffect} from 'react';
import {List, ListItem, ListItemText, Menu, MenuItem} from "@mui/material";
import {useLocalStorage} from "../../../../../../hooks/useLocalStorage";
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import {setType} from "../../../../../store/slices/UI/setTasksViewTypeSlice/setTasksViewTypeSlice";
import { getType } from "../../../../../store/slices/UI/setTasksViewTypeSlice/setTasksViewTypeSlice";

const options = [
    'List',
    'Board',
];

const ViewMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [view, setView] = useLocalStorage('view', '0')
    const open = Boolean(anchorEl);

    const dispatch = useAppDispatch()
    const { viewType } = useAppSelector(state => state.tasksViewType)

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setView(index);
        setAnchorEl(null);
        dispatch(setType(index))
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: 'background.paper' }}
        >
            <ListItem
                button
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickListItem}
                sx={{
                  paddingLeft: '1rem'
                }}
            >
                <ListItemText
                    primary="View"
                />
                <ListItemText
                    secondary={options[view]}
                    sx={{
                        textAlign: 'right'
                    }}
                />
            </ListItem>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === Number(viewType)}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </List>
    );
};

export default ViewMenu;
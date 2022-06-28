import { IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuComp from '../../../../../MenuComp/MenuComp';
import { useState } from 'react';

const ListItemSettingsButton = () => {
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
            MenuItemTitle: "Edit List", MenuItemOnClick: handleClose
        },
        {
            MenuItemTitle: "Delete List", MenuItemOnClick: handleClose
        }
    ]

    return (
        <>
            <IconButton
                onClick={handleOpen}
            >
                <MoreHorizIcon />
            </IconButton>
            <MenuComp
                menuElement={menuElement}
                open={open}
                close={handleClose}
                menuItems={menuElements}
            />
        </>
    )
}

export default ListItemSettingsButton
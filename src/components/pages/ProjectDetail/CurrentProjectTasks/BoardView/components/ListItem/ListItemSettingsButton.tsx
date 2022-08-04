import { IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuComp from '../../../../../../MenuComp/MenuComp';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../../store/store';
import { removeListAction } from '../../../../../../../store/slices/list/removeListSlice/removeListSlice';

type ListItemSettingsButtonTypes = {
    listId: string
}

const ListItemSettingsButton = ({ listId } : ListItemSettingsButtonTypes) => {
    const [menuElement, setMenuElement] = useState<null | HTMLElement>(null);
    const open = Boolean(menuElement);

    const dispatch = useAppDispatch()

    const { project } = useAppSelector(state => state.projectDetail)
    const data = project as any

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuElement(event.currentTarget);
    };

    const handleClose = () => {
        setMenuElement(null);
    };

    const removeListHandler = () => {
        dispatch(removeListAction(data._id, listId))
        handleClose()
    }

    const menuElements = [
        {
            MenuItemTitle: "Edit List", MenuItemOnClick: handleClose
        },
        {
            MenuItemTitle: "Delete List", MenuItemOnClick: removeListHandler
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
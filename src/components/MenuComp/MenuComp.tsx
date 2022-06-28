import { Menu, MenuItem } from '@mui/material'

type MenuItemType = {
    MenuItemTitle: string,
    MenuItemOnClick: () => void
}

type MenuProps = {
    menuElement: null | HTMLElement,
    open: boolean,
    close: () => void,
    menuItems: MenuItemType[]   
}

const MenuComp = ({ menuElement, open, close, menuItems }: MenuProps) => {
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
            {
                menuItems.map(el => (
                    <MenuItem
                        key={el.MenuItemTitle}
                        onClick={el.MenuItemOnClick}
                    >
                        {el.MenuItemTitle}
                    </MenuItem>
                ))
            }
        </Menu>
    )
}

export default MenuComp
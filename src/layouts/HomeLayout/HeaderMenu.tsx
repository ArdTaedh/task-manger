import { Menu, MenuItem } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { logoutAction } from '../../store/slices/auth/loginSlice/loginSlice'
import { useAppDispatch } from '../../store/store'

type HeaderMenuProps = {
    openMenu: boolean
    onClose: () => void
    menuItem: HTMLElement | null
}

export const HeaderMenu = ({ openMenu, onClose, menuItem }: HeaderMenuProps) => {
    const dispatch = useAppDispatch()

    return (
        <Menu
            id="basic-menu"
            anchorEl={menuItem}
            open={openMenu}
            onClose={onClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => dispatch(logoutAction())}>Logout</MenuItem>
        </Menu>
    )
}

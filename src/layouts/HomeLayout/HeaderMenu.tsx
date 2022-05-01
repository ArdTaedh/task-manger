import { Menu, MenuItem } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

type HeaderMenuProps = {
    openMenu: boolean
    onClose: () => void
    menuItem: HTMLElement | null
}

export const HeaderMenu = ({ openMenu, onClose, menuItem }: HeaderMenuProps) => {
    const router = useRouter()

    const logoutHandler = async () => {
        const request = await axios.post('/api/logout')
        
        const response = await request.data

        // console.log(response)

        if (response.message === 'Successfuly logged out!') {
            return router.push('/')
        }
    }

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
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </Menu>
    )
}

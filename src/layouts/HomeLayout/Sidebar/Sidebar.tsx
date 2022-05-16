import { CSSObject, Divider, IconButton, List, styled, Theme, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Link from '../../../../utils/mui/Link';
import FolderIcon from '@mui/icons-material/Folder';
import { DrawerHeader } from '../HomeLayout';
import { Drawer } from './sidebarMixins';
import { SidebarLink } from './SidebarLink';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type SidebarProps = {
    open: boolean
    close: () => void
}


export const Sidebar = ({ open, close, }: SidebarProps) => {
    
    const sidebarElements = [
        { id: 1, label: 'Home',      icon: <HomeIcon />,      url: '/home' },
        { id: 2, label: 'Projects',  icon: <FolderIcon />,    url: '/home/projects' },
        { id: 3, label: 'Settings',  icon: <SettingsIcon />,  url: '/home/settings' }
    ]

    return (
        <Drawer
            variant='permanent'
            open={open}
            color='default'
        >
            <DrawerHeader>
                <IconButton
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}
                    aria-label="open drawer"
                    onClick={close}
                >
                    <MenuIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {
                    sidebarElements.map(el => (
                        <SidebarLink
                            key={el.id}
                            open={open}
                            buttonLabel={el.label}
                            url={el.url}
                            icon={el.icon}
                        />
                    ))
                }
            </List>
        </Drawer>
    )
}

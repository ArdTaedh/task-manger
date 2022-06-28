import {
    Divider,
    IconButton,
    List,
    Typography
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import { DrawerHeader } from '../HomeLayout';
import { Drawer } from './sidebarMixins';
import { SidebarLink } from './SidebarLink';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';
import {useAppSelector} from "../../../store/store";

type SidebarProps = {
    open: boolean
    close: () => void
}

export const Sidebar = ({ open, close, }: SidebarProps) => {
    const { query, pathname, isReady } = useRouter()

    // const { userInfo } = useAppSelector(state => state.userFetch)
    // const userData = userInfo as any

    const sidebarElements = [
        { id: 1, label: 'Home',      icon: <HomeIcon />,      url: '/home' },
        { id: 2, label: 'Projects',  icon: <FolderIcon />,    url:  !pathname.includes('[...id]')
                                                                        ? '/home/projects'
                                                                        : `/home/projects/${query.id}` },
        { id: 3, label: 'Settings',  icon: <SettingsIcon />,  url: '/home/settings' }
    ]

    return (
        <Drawer
            variant='permanent'
            open={open}
            color='default'
        >
            <DrawerHeader
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    display="flex"
                    alignItems="center"
                    pl='20px'
                    fontWeight={500}
                >
                    Task Manager
                </Typography>

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

import { Avatar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from './headerMixins';
import { useEffect, useState } from 'react';
import { HeaderMenu } from '../HeaderMenu';
import { useFetchUser } from '../../../store/User/useFetchUser';
import { useRouter } from 'next/router';
import { Box, width } from '@mui/system';

type HeaderProps = {
    open: boolean,
    toggle: () => void
    userData: {}
}

export const Header = ({ open, toggle, userData }: HeaderProps) => {
    const [menu, setMenuOpen] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(menu);



    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuOpen(event.currentTarget);
    };

    const handleClose = () => {
        setMenuOpen(null);
    };

    const data = userData as any


    return (
        <AppBar
            position='fixed'
            color='default'
            open={open}
            sx={{
                width: `{calc(100%-230px)}`
            }}
            enableColorOnDark={true}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggle}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    component="div" 
                    className="header-section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <Typography
                        display="flex"
                        alignItems="center"
                    >
                        Task Manager
                    </Typography>
                   
                    <div className="user-info-section">
                        <IconButton
                            onClick={handleClick}
                            sx={{
                            }}
                        >
                            <Avatar />
                        </IconButton>
                        <HeaderMenu openMenu={openMenu} onClose={handleClose} menuItem={menu} />
                        {userData ? data.username : ''}
                    </div>
                </Box>


            </Toolbar>
        </AppBar>
    )
}

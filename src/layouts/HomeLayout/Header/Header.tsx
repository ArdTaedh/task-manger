import {Avatar, Button, Container, IconButton, Skeleton, styled, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar} from './headerMixins';
import { useState, MouseEvent } from 'react';
import {HeaderMenu} from '../HeaderMenu';
import {useRouter} from 'next/router';
import {Box, width} from '@mui/system';
import {useAppSelector} from "../../../store/store";

type HeaderProps = {
    open: boolean,
    toggle: () => void,
}

export const Header = ({open, toggle }: HeaderProps) => {
    const [menu, setMenuOpen] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(menu);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setMenuOpen(event.currentTarget);
    };

    const handleClose = () => {
        setMenuOpen(null);
    };

    const { pathname, query } = useRouter()

    const { loading, userInfo } = useAppSelector(state => state.userFetch)
    const { project } = useAppSelector(state => state.projectDetail)

    const data = JSON.parse(userInfo)

    const activeProjectName = pathname.includes('[...id]')
        ? <Typography>{project?.name}</Typography>
        : null

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
                        ...(open && {display: 'none'}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Container
                    maxWidth={open ? 'xl' : 'xl'}
                >
                <Box
                    component="div"
                    className="header-section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: activeProjectName ? 'space-between' : 'flex-end',
                        width: '100%'
                    }}
                >
                    {activeProjectName}
                    <Box
                        className="user-info-section"
                        component='div'
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            onClick={handleClick}
                            sx={{}}
                        >
                            <Avatar/>
                        </IconButton>
                        <HeaderMenu openMenu={openMenu} onClose={handleClose} menuItem={menu}/>
                        {
                            data !== null
                                ? (
                                    <Typography
                                        variant='body2'
                                    >
                                        {data.username}
                                    </Typography>
                                )
                                : (
                                    <Skeleton
                                        variant='text'
                                        width='28px'
                                    />
                                )
                        }
                    </Box>
                </Box>
                </Container>


            </Toolbar>
        </AppBar>
    )
}

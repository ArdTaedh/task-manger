import { CssBaseline, styled} from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {fetchUserAction} from "../../store/slices/user/userFetchSlice/userFetchSilce";


type HomeLayoutProps = {
    children: ReactNode
}

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    const [open, setOpen] = useState(true);

    const router = useRouter()
    const { status } = useSession()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    
    // const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if (status === 'unauthenticated') {
    //         router.push('/')
    //     } else {
    //         if (!userInfo) {
    //             dispatch(fetchUserAction())
    //         }
    //     }
    // }, [status, router, userInfo])

    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <CssBaseline />
            <Header
                open={open}
                toggle={handleDrawerOpen} 
            />
            <Sidebar
                open={open}
                close={handleDrawerClose}
            />
            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 2,
                    height: '100vh',
                    overflow: 'auto'
                }}
            >
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    )
}


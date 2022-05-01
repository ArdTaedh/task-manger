import { CssBaseline, styled} from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { useFetchUser } from '../../store/User/useFetchUser';
import { useRouter } from 'next/router';


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
    const router = useRouter()
    const {id} = router.query

    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("")

    useEffect(()=>{
        router.isReady ? setUrl(id as string) : ''
    
    }, [router.isReady, id, setUrl]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    
    const { data } = useFetchUser(String(url))

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
                userData={data}
            />
            <Sidebar
                open={open}
                close={handleDrawerClose}
                url={String(url)}
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


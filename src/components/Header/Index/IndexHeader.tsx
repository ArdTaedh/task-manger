import React from 'react'
import { AppBar, Toolbar, Container, Button } from '@mui/material';
import Link from '../../../../utils/mui/Link';
 
export const Header = () => {
    return (
        <AppBar
            color='default'
            position='static'
        >
            <Toolbar>
                <Container
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Link
                        href='/'
                        sx={{
                            textDecoration: 'none',
                            fontSize: '1.3rem',
                            textTransform: 'uppercase',
                            fontWeight: '800',
                            fontStyle: 'italic',
                            color: '#000'
                        }}
                    >
                        Task Manager
                    </Link>
                    <Button
                        LinkComponent={Link}
                        href='/login'
                    >
                        Login
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

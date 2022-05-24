import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Link from '../../../../utils/mui/Link'

type SidebarLinkProps = {
    url: string,
    buttonLabel: string,
    open: boolean,
    icon: ReactNode
}

export const SidebarLink = ({ buttonLabel, url, icon, open }: SidebarLinkProps) => {
    const router = useRouter();

    const isActiveLink = (pathName: string) => {
        return router.asPath === pathName
    }

    return (
        <Link
            href={url}
            sx={{
                textDecoration: 'none',
                color: isActiveLink(url)  ? 'rgb(0, 114, 229)' : '#000'
            }}
        >
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
                selected={isActiveLink(url!)}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: isActiveLink(url) ? 'rgb(0, 114, 229)' : '#000'
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText primary={buttonLabel} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </Link>
    )
}

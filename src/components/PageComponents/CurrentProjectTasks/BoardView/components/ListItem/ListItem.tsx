import { Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import { useState } from 'react';
import ListItemSettingsButton from './ListItemSettingsButton';

type ListItemProps = {
    item: {
        _id: string,
        title: string,
        cards: any[],
        owner: string
    }
}

const ListItem = ({ item }: ListItemProps) => {

    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: "260px",
                border: "none",
                height: "fit-content",

                '&: hover': {
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    cursor: "pointer"
                }
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Typography
                        fontWeight="bold"
                    >
                        {item.title}
                    </Typography>
                    <ListItemSettingsButton />
                </Box>
                <Box>
                    Tasks
                </Box>
            </CardContent>
        </Card>
    )
}

export default ListItem
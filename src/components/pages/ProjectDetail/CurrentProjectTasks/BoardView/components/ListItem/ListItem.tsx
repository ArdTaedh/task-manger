import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import { useState } from 'react';
import AddCard from '../../../../../../AddCard/AddCard';
import TaskItem from '../TaskItem/TaskItem';
import Cards from './components/Cards/Cards';
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
    const [addCard, setAddCard] = useState(false)

    const setAddCardHandler = () => {
        setAddCard(!addCard)
    }

    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: "327px",
                height: "fit-content",
                borderColor: "transparent",

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
                    <ListItemSettingsButton listId={item!._id} />
                </Box>
                <Cards item={item} />
                <Box>
                    {
                        addCard
                            ? <AddCard listId={item!._id} setCard={setAddCardHandler} />
                            : (
                                <Button
                                    onClick={setAddCardHandler}
                                >
                                    Add Task
                                </Button>
                            )
                    }
                </Box>
            </CardContent>
        </Card>
    )
}

export default ListItem
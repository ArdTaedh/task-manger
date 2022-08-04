import { Box } from '@mui/material'
import TaskItem from '../../../TaskItem/TaskItem'

type cardsTypes = {
    item: any | null
}

const Cards = ({ item }: cardsTypes) => {
    return (
        <>
            {
                item.cards !== null 
                    ? (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                margin: "1rem 0"
                            }}
                        >
                            {
                                item.cards.map(i => (
                                    <TaskItem
                                        key={i._id}
                                        taskName={i.title}
                                        cardId={i._id}
                                        listId={item._id}
                                    />
                                ))
                            }
                        </Box>
                    )
                    : null
            }
        </>
    )
}

export default Cards
import { Box } from '@mui/material'
import { useState } from 'react'
import TaskItem from '../../../TaskItem/TaskItem'

type cardsTypes = {
    item: any | null
}

const Cards = ({ item }: cardsTypes) => {
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false)

    const setCardModalHandler = () => {
        setCardModalIsOpen(!cardModalIsOpen)
    }
 
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
                                //@ts-ignore
                                item.cards.map(i => (
                                    <TaskItem
                                        key={i._id}
                                        card={i}
                                        modalIsActive={cardModalIsOpen}
                                        setModalHandler={setCardModalHandler}
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
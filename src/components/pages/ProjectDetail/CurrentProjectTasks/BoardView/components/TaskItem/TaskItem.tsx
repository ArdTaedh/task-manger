import { Card, CardContent } from "@mui/material"
import { useState } from "react"
import { removeCardAction } from "../../../../../../../store/slices/card/removeCardSlice/removeCardSlice"
import { useAppDispatch } from "../../../../../../../store/store"
import TaskItemModal from "./TaskItemModal"

type CardTypes = {
    id: string,
    date: {
        startDate: string,
        completed: boolean
    },
    description: string,
    owner: string,
    title: string
}

type taskItemTypes = {
    card: CardTypes,
}

const TaskItem = ({ card }: taskItemTypes) => {
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false)

    const setCardModalHandler = () => {
        setCardModalIsOpen(!cardModalIsOpen)
    }

    return (
        <>
            <Card
                onClick={() => setCardModalHandler()}
            >
                <CardContent>
                    {card.title}
                </CardContent>
            </Card>
            <TaskItemModal 
                modalIsActive={cardModalIsOpen}
                setModalHandler={setCardModalHandler}
                card={card}
            />
        </>
    )
}

export default TaskItem
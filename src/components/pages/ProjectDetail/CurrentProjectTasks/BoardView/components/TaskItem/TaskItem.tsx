import { Card, CardContent } from "@mui/material"
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
    modalIsActive: boolean,
    setModalHandler: () => void
}

const TaskItem = ({ card, modalIsActive, setModalHandler }: taskItemTypes) => {
    const dispatch = useAppDispatch()

    console.log(card);


    return (
        <>
            <Card
                onClick={() => setModalHandler()}
            >
                <CardContent>
                    {card.title}
                </CardContent>
            </Card>
            <TaskItemModal 
                modalIsActive={modalIsActive}
                setModalHandler={setModalHandler}
                card={card}
            />
        </>
    )
}

export default TaskItem
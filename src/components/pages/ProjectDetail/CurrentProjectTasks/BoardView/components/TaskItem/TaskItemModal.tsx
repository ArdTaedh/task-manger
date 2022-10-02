import { Dialog, DialogTitle } from "@mui/material"
import Cards from "../ListItem/components/Cards/Cards"

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

type TaskItemModalTypes = {
    modalIsActive: boolean,
    setModalHandler: () => void
    card: CardTypes,
}

const TaskItemModal = ({ modalIsActive, setModalHandler, card }: TaskItemModalTypes) => {
    return (
        <Dialog
            open={modalIsActive}
            onClose={setModalHandler}
        >
            <DialogTitle>
                {card.title}
            </DialogTitle>
            {
                card.description
            }
        </Dialog>
    )
}

export default TaskItemModal
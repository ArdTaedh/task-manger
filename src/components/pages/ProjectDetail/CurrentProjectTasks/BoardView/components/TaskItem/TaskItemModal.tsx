import { Dialog, DialogTitle } from "@mui/material"

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
                Some Title
            </DialogTitle>
            {JSON.stringify(card)}
        </Dialog>
    )
}

export default TaskItemModal
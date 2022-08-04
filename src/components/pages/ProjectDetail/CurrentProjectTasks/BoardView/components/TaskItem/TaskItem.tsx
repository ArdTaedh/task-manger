import { Card, CardContent } from "@mui/material"
import { removeCardAction } from "../../../../../../../store/slices/card/removeCardSlice/removeCardSlice"
import { useAppDispatch } from "../../../../../../../store/store"

type taskItemTypes = {
    taskName: string,
    cardId: string,
    listId: string
}

const TaskItem = ({ taskName, cardId, listId }: taskItemTypes) => {
    const dispatch = useAppDispatch()

    const removeHandler = () => {
        dispatch(removeCardAction(cardId, listId))
    }

    return (
        <Card
            onClick={() => removeHandler()}
        >
            <CardContent>
                {taskName}
            </CardContent>
        </Card>
    )
}

export default TaskItem
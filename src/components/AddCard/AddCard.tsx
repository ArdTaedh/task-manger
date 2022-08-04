import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { Box, Button, Card, CardContent, IconButton, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { createCardAction } from '../../store/slices/card/createCardSlice/createCardSlice';

type AddCardTypes = {
    setCard: () => void,
    listId: string
}

const AddCard = ({ setCard, listId }: AddCardTypes) => {
    const [date, setDate] = useState<Date | null>(new Date());
    const [cardName, setCardName] = useState('')
    const [cardDescription, setCardDescription] = useState('')

    const dispatch = useAppDispatch()

    const setCardNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCardName(e.target.value)
    }

    const setCardDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCardDescription(e.target.value)
    }

    

    const submitHandler = () => {
        //@ts-ignore
        dispatch(createCardAction(cardName!, cardDescription!, date, listId))
        setCard()
    }

    return (
        <Card>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}
                >
                    <TextField
                        label="Task Name"
                        autoFocus
                        variant="standard"
                        value={cardName}
                        onChange={setCardNameHandler}
                    />
                    <TextField
                        label="Description"
                        variant="standard"
                        value={cardDescription}
                        onChange={setCardDescriptionHandler}
                    />
                    <Box
                        sx={{
                            marginTop: "16px"
                        }}
                    >
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            locale="ru"
                        >
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="Date and Time"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                            />
                        </LocalizationProvider>
                    </Box>
                </Box>
                <Box
                    sx={{
                        marginTop: "20px"
                    }}
                >
                    <IconButton
                        onClick={() => setCard()}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Button
                        onClick={() => submitHandler()}
                    >
                        Add
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AddCard
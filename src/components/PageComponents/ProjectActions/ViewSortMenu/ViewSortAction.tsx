import React, {useState} from 'react';
import {Button, Divider} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import ViewSortMenu from "./ViewSortMenu";

const ViewSortAction = () => {
    const [menuElement, setMenuElement] = useState<null | HTMLElement>(null);
    const open = Boolean(menuElement);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuElement(event.currentTarget);
    };

    const handleClose = () => {
        setMenuElement(null);
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                endIcon={<TuneIcon/>}
                sx={{
                    color: "#707070",
                    marginRight: "0.5rem"
                }}
            >
                View
            </Button>
            <ViewSortMenu
                menuElement={menuElement}
                open={open}
                close={handleClose}
            />
        </>
    );
};

export default ViewSortAction;
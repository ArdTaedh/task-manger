import {Box, Tab, Tabs, Typography} from "@mui/material";
import {ReactNode, SyntheticEvent, useState} from "react";
import ViewSortAction from "./ViewSortMenu/ViewSortAction";
import ProjectSettingsAction from "./ProjectSettingsMenu/ProjectSettingsAction";

const ProjectActions = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
        }}
        >
            <ViewSortAction />
            <ProjectSettingsAction />
        </Box>
    );
}

export default ProjectActions
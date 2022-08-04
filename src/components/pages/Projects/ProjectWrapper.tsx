import React, {FC, useEffect} from 'react'
import {ProjectsExists} from './ProjectsExists/ProjectsExists'
import {ProjectsNotExists} from './ProjectsNotExists/ProjectsNotExists'
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fetchUserAction} from "../../../store/slices/user/userFetchSlice/userFetchSilce";
import {fetchProjectAction} from "../../../store/slices/projects/fetchProjectSlice/fetchProjectSlice";

type ProjectWrapperTypes = {}

export const ProjectWrapper: FC<ProjectWrapperTypes> = ({}) => {
    const {projects, error, isError} = useAppSelector(state => state.projectsFetch)
    
    console.log(error)

    const dispatch = useAppDispatch()

    const {isSuccess} = useAppSelector(state => state.projectCreate)

    useEffect(() => {
        if (isSuccess || !projects) {
            dispatch((fetchProjectAction()))
        }

    }, [isSuccess, isError, dispatch])

    return (
        <>
            {
                projects?.length === 0
                    ? <ProjectsNotExists />
                    : <ProjectsExists />
            }
        </>
    )
}

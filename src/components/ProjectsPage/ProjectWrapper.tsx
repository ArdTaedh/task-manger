import React, {FC, useEffect} from 'react'
import {ProjectsExists} from './ProjectsExists/ProjectsExists'
import {ProjectsNotExists} from './ProjectsNotExists/ProjectsNotExists'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {fetchUserAction} from "../../store/slices/user/userFetchSlice/userFetchSilce";

type ProjectWrapperTypes = {}

export const ProjectWrapper: FC<ProjectWrapperTypes> = ({}) => {
    const {userInfo} = useAppSelector(state => state.userFetch)
    const data = userInfo as any

    const dispatch = useAppDispatch()

    const {isSuccess} = useAppSelector(state => state.projectCreate)

    useEffect(() => {
        if (isSuccess) {
            dispatch(fetchUserAction())
        }
    })

    return (
        <>
            {
                data?.projects.length === 0
                    ? <ProjectsNotExists />
                    : <ProjectsExists />
            }
        </>
    )
}

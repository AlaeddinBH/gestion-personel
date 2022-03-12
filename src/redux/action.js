import { FILTER, ADD_EPMLOYEE, DELETE_EPMLOYEE, EDIT_EPMLOYEE } from "./actionTypes"

export const del = (id) => {
    return {
        type:DELETE_EPMLOYEE,
        payload:id
    }
    }

export const edit = (editedEmplyee) => {
    return {
        type: EDIT_EPMLOYEE,
        payload:editedEmplyee
    }
    }
    
export const add = (addEmplyee) => {
    return {
        type: ADD_EPMLOYEE,
        payload: addEmplyee
    }
    }
    
export const setFilter = (filter) => {
    return {
       type: FILTER,
       payload:  filter 
    }
};
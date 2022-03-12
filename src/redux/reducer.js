import {ADD_EPMLOYEE, DELETE_EPMLOYEE, EDIT_EPMLOYEE } from "./actionTypes"
import { Employee } from "../data";

const initialState = {
    Employee : Employee 
};

function Reducer(state = initialState,action){
    
    switch(action.type){
        
       
        case DELETE_EPMLOYEE:
            return {
                ...state,Employee:state.Employee.filter(el=>el.id!==action.payload )
            }
        case EDIT_EPMLOYEE: 
            return {
                ...state,Employee:state.Employee.map(el=>el.id===action.payload.id ? action.payload: el)
            }    
        case ADD_EPMLOYEE:
            return {
                ...state,Employee:[...state.Employee,action.payload]
            }
        
        

        default: return state;
        }
};

export default Reducer; 
const titlleFilterReducer=(state='',action)=>{
    if (action.type==='SET_TITLLE_FILTER'){
        return action.titlleFilter
    }
    return state

}
export default titlleFilterReducer;

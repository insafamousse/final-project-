import React from 'react' ;
import {connect} from  'react-redux'; 
const BookName =({value='', onChange=()=>{}})=> {
    return ( 
        <div>
            <div className="header">
                
                <input 
                   type="text"   
                   onChange={(event)=>onChange(event.target.value)}
                   id="header-text" 
                   value={value}/>
                <button type="button" id="header-search" value="search">search</button>
                    

            </div>
        </div>
            
            
    
     )
}
const mapStateToProps=state=>{
   return{
       value:state.titleFilterReducer
   }
}
const mapDispatchToProps=dispatch=>{
   return{
       onChange:(newTitleFilter)=>{
       dispatch({
           type:'SET_TITLE_FILTER',
           titleFilter:newTitleFilter
       })
    }
   }
}
const BookNameFilter = connect (mapStateToProps,mapDispatchToProps)(BookName)
export default BookNameFilter;


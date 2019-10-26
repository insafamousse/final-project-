import React from 'react' ;
import BooksCard from './booksCard' ; 
import ImagePlus from './imagePlus.gif'; 
import {connect} from 'react-redux';


const BooksCardList =  ({books,onAddBook,rating, value})=>{
    return ( 
        <div className='card-list'>
        <div className="row">
   
    {books.filter( el=> el.rating >= rating && el.title.toLowerCase().includes(value.toLowerCase().trim()))
    
        .map((el,index)=><BooksCard key={index} Y={el} id={index}/>)}
    <div>
    
    

    </div >
    <img src= {ImagePlus} className= 'prompt-button' onClick={onAddBook}
    type="button" alt="image-prompt"/>
      </div>
      </div> 
    ) 
    }
    const mapStateToProps= state =>{
        return {
            books:state.bookListReducer,
            rating: state.ratingFilterReducer.minRating,
            value:state.titleFilterReducer
        }
    }
     const mapDispatchToProps=dispatch=>{
        return{
            onAddMovie:()=>{
                dispatch({
                type:'ADDBOOKS',
                movie:{
                    id:Math.random(),
                    title: prompt('book title: '),
                    image: prompt('book image: '),
                    rating: Number(prompt('book rating: '))
                }})
            }
        }
    }
    const BooksCardListReducer=connect (mapStateToProps,mapDispatchToProps)(BooksCardList)
    export default BooksCardListReducer;
    
    

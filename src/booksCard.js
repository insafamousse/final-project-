import React from 'react';
import {connect} from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';





const BooksCard = ({Y,id,onDelete=()=>{},onEdit=()=>{},book={}}) =>{
    return(
        
            <Card className='col-lg-4 card1'>
                
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={Y.rating}
            />
            <button className='book-delete' onClick={()=>onDelete(id)}>DELETE</button>
            <button className='book-edit' onClick={()=>onEdit(book)}>Edit</button>

                <CardImg top height="152px" src={Y.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{Y.title}</CardTitle>
                </CardBody>
            </Card>
        
    )
}
    const mapDispatchToProps=dispatch=>{
        return {
            onDelete:(id)=>{
                dispatch({
                    type:'DELETEBOOKS',
                    id

                })
            },

            onEdit:(book)=>{
                dispatch({
                    type:'EDITBOOKS',
                    id:book.id,
                    book:{
                        id:book.id,
                title: prompt('book title: ',book.title),
                image: prompt('book image: ',book.image),
                rating: Number(prompt('book rating: ',book.rating))
                    }
                })
            }
        }
    }
               


    const BooksCardContainer = connect(null,mapDispatchToProps)(BooksCard)


export default BooksCardContainer;

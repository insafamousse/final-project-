import React,{Component} from 'react';
import './App.css';
import BookName from './BookName';
import BooksCardList from './booksCardList';
import BookRating from './bookRating';




               class App extends Component {
              
              
                
              
                render() {
                  return (
                  <div className="App">
                    <div className="container">
                      <div className='row name-rating'>
                       <BookName/> 
                       
                       <BookRating/>
                       </div>
                      
                       <BooksCardList 
                        />
                      
              
              
              
                    </div>
                    
                    
                  </div>)}
              }
              
              
              export default App;

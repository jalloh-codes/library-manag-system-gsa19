import React from 'react';
import { connect } from 'react-redux';
import Cards from './cards'



const BookList = ({books, rents, stuID}) =>(


         <div>

          {
              
             rents.map((rent)=>
                (parseInt(rent.studentID) === parseInt(stuID)) ? books.map((book) =>
                    (rent.booknum == book.booknum) ? <Cards id={book.id}
                                                        title={book.title}
                                                        image={book.image}
                                                        authorFirst={book.authorFirst}
                                                        authorLast={book.authorLast}
                                                        authorID={book.authorID}
                                                        key={book.id}
                                                    />: false
                    
                ): false
                
                  
              )
          }
                   
                </div>
                
            
);

export default connect()(BookList);
import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

/*const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContext )
    return (  
        <li onClick={ () => removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}
 
export default BookDetails;*/


// Working with useReducer

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return (  
        <li onClick={ () => dispatch({type: 'ROMOVE_BOOK', id: book.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}
 
export default BookDetails;

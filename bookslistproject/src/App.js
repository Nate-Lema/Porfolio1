import React from 'react';
import NewBookForm from './component/BookForm';
import BookList from './component/BookList';
import Navbar from './component/Navbar';
import BookContextProvider, { BookContext } from './contexts/BookContext';
import bookReducer from './reducers/bookReducer';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
        <bookReducer />
     </BookContextProvider>
    </div>
  );
}

export default App;

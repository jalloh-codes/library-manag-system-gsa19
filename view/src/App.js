import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import AuthorList from './components/author/authorList';
import Books from './components/book/books';
import Student from './components/student/student'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import EditBook from './components/book/EditBook';
import store  from './components/store/store';

import BookList from './components/book/BookList';
class App extends Component{

  render(){
    return (
      
      <Provider store ={store}>
      <Router>
      <div className="App">
          <Header />
        <Container>

          <Route exact path="/book/:title/:id" component={Books} />
          <Route exact path="/author" component={AuthorList} />
          <Route exact path="/student" component={Student} />
         <Route exact path="/update/:title/:id" component={EditBook} />
         <Route exact path="/" component={BookList} />
        </Container>
        <Footer/>
      </div>

      </Router>
      </Provider>
      
    );
  }
}

export default App;

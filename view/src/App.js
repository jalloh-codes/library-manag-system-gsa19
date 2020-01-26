import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import AuthorList from './components/author/authorList';
import Books from './components/book/books';
import Student from './components/student/student'
import { Router, Route, Switch} from "react-router-dom";
import {Container} from 'reactstrap';
import AuthorBooks from './components/author/authorBooks'
import {Provider} from 'react-redux';
import EditBook from './components/book/EditBook';
import store  from './components/store/store';
import Test from './components/book/test';
import BookList from './components/book/BookList';
import StudentBooks from './components/student/studentBook';
import AddStudent from  './components/student/addStudent';
import history from './history';
class App extends Component{

  
  
  render(){
    return (
      <Provider store ={store}>
      <Router history={history}>
      <div className="App">
          <Header />
        <Container >
         <Switch>
          <Route exact path="/book/:title/:id" render={() => <Books />} />
          <Route exact path="/author" render={() => <AuthorList/>} />
          <Route exact path="/student" render={() => <Student/>} />  
         <Route exact path="/update/:title/:id"  render={() => <EditBook/>} />
         <Route exact path="/author/:authorFirst/:authorLast/:authorID" render={() => <AuthorBooks/>} />
         <Route exact path="/books"  render ={() => <BookList/>} />
         <Route exact path="/students"  render ={() => <Student/>} />
         <Route exact path="/students/:fname/:lname/:StudentID" component={StudentBooks} />
         <Route exact path="/sign" render={() => <AddStudent />} />
         <Route exact path="/"  render ={() => <Test/>} />
         </Switch>
        </Container>
        <Footer/>
      </div>

      </Router>
      </Provider>
      
    );
  }
}

export default App;
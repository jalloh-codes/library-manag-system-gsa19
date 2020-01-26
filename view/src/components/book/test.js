import React , {Component} from 'react';
import {getBooks} from '../actions/bookActions';
import {connect} from 'react-redux';


class  Test extends Component{
    componentDidMount(){
        this.props.getBooks()
    }
    render(){  
        return(
        <div>
            <h1>PAGE NOT AVAILABLE</h1>
            {console.log(this.props)
            }
        </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,

    }
}


export default connect(mapStateToProps, {getBooks})(Test)
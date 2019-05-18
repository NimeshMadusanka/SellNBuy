import React from 'react';
import './App.css';
import NavBar from "./component/NavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EditDeleteBookDetailsContainer from "./component/EditDeleteBookDetailsContainer";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddBooksContainer from "./component/AddBooksContainer";
import AddDeliverDetails from "./component/AddDeliverDetails";
import EditDeliverDtails from "./component/EditDeliverDtails";
import DeliverDetailList from "./component/DeliverDetailList";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Router>
                {/*<Route path="/" exact component={AddBooksContainer}/>*/}
                <Route path="/books/add" exact component={AddBooksContainer}/>
                <Route path="/books/edit" exact component={EditDeleteBookDetailsContainer}/>
                <Route path="/deliver_details/add" exact component={AddDeliverDetails}/>
                <Route path="/deliver_details/edit/:id" exact component={EditDeliverDtails}/>
                <Route path="/deliver_details/list" exact component={DeliverDetailList}/>

            </Router>
        </div>
    );
}

export default App;

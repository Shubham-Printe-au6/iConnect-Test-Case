import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// importing components
import Navbar from "./components/navbar.component";
import CompaniesFunc from "./components/companies.functional";
// import CompaniesList from "./components/companies-list.component";
import EditCompany from "./components/edit-company.component";
import CreateCompany from "./components/create-company.component";


function App() {
  return (
    <Router>
    <div className='container'>
    <Navbar />
    <br/>
    <Route path="/" exact component={CompaniesFunc} />
    <Route path="/edit/:id" exact component={EditCompany} />
    <Route path="/create" exact component={CreateCompany} />

    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// importing components
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component"
import CompaniesFunc from "./components/companies.functional";
import EditCompany from "./components/edit-company.component";
import CreateCompany from "./components/create-company.component";


function App() {
  return (
    <Router>
    <Navbar />
    <div className='container mt-2'>
    <br/>
    <Route path="/" exact component={CompaniesFunc} />
    <Route path="/edit/:id" exact component={EditCompany} />
    <Route path="/create" exact component={CreateCompany} />
    <br></br>
    </div>
    <Footer className="text-center"/>

    </Router>
  );
}

export default App;

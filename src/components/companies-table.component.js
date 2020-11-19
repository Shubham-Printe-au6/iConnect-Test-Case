import React from 'react';
import CompanyRow from "./companies-row.component";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CompaniesTable = ({companies, loading}) => {

    if(loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Company Description</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Company Email</th>
                <th scope="col">Company Logo</th>
                <th scope="col">States List</th>
                <th scope="col">Cities List</th>
                <th scope="col">Edit Company</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="col">
                        <button><ExpandLessIcon/></button>
                    </th>
                    <th scope="col">
                    <button><ExpandLessIcon/></button>
                    </th>
                    <th scope="col">
                    <button><ExpandLessIcon/></button>
                    </th>
                    <th scope="col">
                    <button><ExpandLessIcon/></button>
                    </th>
                </tr>
                <tr>
                <th scope="col">
                        <button><ExpandMoreIcon/></button>
                    </th>
                    <th scope="col">
                    <button><ExpandMoreIcon/></button>
                    </th>
                    <th scope="col">
                    <button><ExpandMoreIcon/></button>
                    </th>
                    <th scope="col">
                    <button><ExpandMoreIcon/></button>
                    </th>
                </tr>
            
            {companies.map((company, index) => {
                return (
                    <CompanyRow
                    key = {company._id}
                    id = {company._id}
                    name = {company.name}
                    description = {company.description}
                    number = {company.number}
                    email = {company.email}
                    logo = {company.logo}
                    states = {company.states}
                    cities = {company.cities}
                    />
                    );
            })}

            </tbody>
            </table>
        </div>
    )
}

export default CompaniesTable;
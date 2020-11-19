import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CompaniesTable from "./companies-table.component";
import Pagination from "./pagination.component";

const Companies = () => {

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [companiesPerPage] = useState(3);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:5000/api/companies');
            console.log(res.data);
            setCompanies(res.data);
            setLoading(false);
        }

        fetchCompanies();
        
    }, [])

    // change page
    const paginate = (pageNumber) => {
        console.log(pageNumber);
        setCurrentPage(pageNumber);
    }

    // get current companies
    const indexOfLastCompany = currentPage *  companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany)

    return (
        <div>
            <h1><strong><u>List of Registered Companies</u></strong></h1>
            <br></br>
            <CompaniesTable 
                loading = {loading}
                companies = {currentCompanies}
            />

            <Pagination 
            companiesPerPage = {companiesPerPage}
            totalCompanies = {companies.length}
            paginate = {paginate}
             />
        </div>
    )
}

export default Companies;
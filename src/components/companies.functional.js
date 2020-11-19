import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CompaniesTable from "./companies-table.component";
import Pagination from "./pagination.component";
import Search from "./search-bar.component";

const Companies = () => {

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [companiesPerPage] = useState(3);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:5000/api/companies');
            setCompanies(res.data);
            setLoading(false);
        }

        fetchCompanies();
        
    }, [])

    // change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // get current companies
    const indexOfLastCompany = currentPage *  companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany)

    function makeRequest(name) {
        const fetchSCompanies = async () => {
            setLoading(true);
            const res = await axios.get(`http://localhost:5000/api/companies/search/${name}`);
            setCompanies(res.data);
            setLoading(false);
        }
        fetchSCompanies();
    }

    return (
        <div>
            <h1><strong><u>List of Registered Companies</u></strong></h1>
            <br></br>
            <Search 
                makeRequest={makeRequest}
            />
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
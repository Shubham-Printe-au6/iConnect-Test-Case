import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.editCompany = this.editCompany.bind(this);

        this.state = {companies: []}
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                You are on the Company List Component.
            </div>
        )
    }
}

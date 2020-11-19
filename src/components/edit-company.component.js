import React, { Component } from 'react';
import  Select from "react-select";
import {states} from "../data/states";
import {cities} from "../data/cities";

export default class EditCompany extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLogo = this.onChangeLogo.bind(this);
        this.onChangeStates = this.onChangeStates.bind(this);
        this.onChangeCities = this.onChangeCities.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: "",
            description: "",
            number: "",
            email: "",
            logo: "",
            states: [],
            cities: [],
            totalCities: []
        }
    }

    componentDidMount() {
        this.setState({
            totalCities: cities
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeLogo(e) {
        this.setState({
            logo: e.target.value
        });
    }
    onChangeStates(e) {
        // Getting state data 
        const states = [];
        const limit = e.length < 3 ? e.length : 3;
        for (let i = 0; i < limit; i++) {
        states.push(e[i].label);
        }
        this.setState({
            states: states
        });

        // Getting Sate-wise Cities
        let cities = this.state.totalCities;
        cities = cities.filter(function(city) {
            if(city.state === states[0])
            return city;
            else if (city.state === states[1])
            return city;
            else if(city.state === states[2])
            return city;
        });

        this.setState({
            totalCities: cities
        });
        console.log(this.state.totalCities)
    }


    onChangeCities(e) {
        const cities = [];
        const limit = e.length < 9 ? e.length : 9;
        for (let i = 0; i < limit ; i++) {
            cities.push(e[i].label);
        } 

        this.setState({
            cities: cities
        });
   
    }

    
    onSubmit(e) {
        e.preventDefault();

        const company = {
            name: this.state.name,
            description: this.state.description,
            number: this.state.number,
            email: this.state.email,
            logo: this.state.logo,
            states: this.state.states,
            cities: this.state.cities
        }

        // this is where the data is sent to the server and saved to the database


        console.log(company)

        window.location = '/';
    }


    render() {
        return (
            <div>
      <h3>Edit Company Details</h3>
      <form onSubmit={this.onSubmit}>

        {/* setting name */}
        <div className="form-group">
          <label>Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>



              {/* setting description */}
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        {/* setting number */}
        <div className="form-group">
          <label>Number: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.number}
              onChange={this.onChangeNumber}
              />
        </div>

        
        {/* setting email */}
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>

        {/* setting logo */}
        <div className="form-group">
          <label>Logo (URL): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.logo}
              onChange={this.onChangeLogo}
              />
        </div>

        {/* setting states */}
        <div className="form-group">
          <label>States: </label>
          <Select 
              options = {states}
              name = "states"
              isMulti = {true}
              className = "basic-multi-select"
              classNamePrefix = "select"
              onChange={this.onChangeStates}
          />
        </div>

        {/* setting cities */}
        <div className="form-group">
          <label>Cities: </label>
          <Select 
              options = {this.state.totalCities}
              name = "cities"
              isMulti = {true}
              className = "basic-multi-select"
              classNamePrefix = "select"
              onChange={this.onChangeCities}
          />
        </div>





            <br></br>
        <div className="form-group">
          <input type="submit" value="Edit Company Details" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

export class CreatePass extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeNic = this.onChangeNic.bind(this);
        this.onChangeValidMonths = this.onChangeValidMonths.bind(this);
        this.onChangeTrainClass = this.onChangeTrainClass.bind(this);
        this.onChangeFromStation = this.onChangeFromStation.bind(this);
        this.onChangeToStation = this.onChangeToStation.bind(this);
        this.onChangeCreatedDate = this.onChangeCreatedDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            nic: '',
            validMonths: '',
            trainClass: '',
            fromStation: '',
            toStation: '',
            createdDate: new Date(),
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeNic(e) {
        this.setState({
            nic: e.target.value
        });
    }
    onChangeValidMonths(e) {
        this.setState({
            validMonths: e.target.value
        });
    }
    onChangeTrainClass(e) {
        this.setState({
            trainClass: e.target.value
        });
    }
    onChangeFromStation(e) {
        this.setState({
            fromStation: e.target.value
        });
    }
    onChangeToStation(e) {
        this.setState({
            toStation: e.target.value
        });
    }
    onChangeCreatedDate(date) {
        this.setState({
            createdDate: date
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const pass = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nic: this.state.nic,
            validMonths: this.state.validMonths,
            trainClass: this.state.trainClass,
            fromStation: this.state.fromStation,
            toStation: this.state.toStation,
            createdDate: this.state.createdDate,

        }

        console.log(pass);
        //Validations
        if (this.state.firstName.length < 4) {
            this.setState({ firstNameError: "FirstName is too short" })
        }
        else if (this.state.lastName.length < 4) {
            this.setState({ lastNameError: "LastName is too short" })
        }
        else if (this.state.nic.length < 9) {
            this.setState({ nicError: "NIC is too short" })
        }
        else if (this.state.validMonths.length < 4) {
            this.setState({ validMonthsError: "Valid Months is too short" })
        }
        else if (this.state.trainClass.length < 4) {
            this.setState({ trainClassError: "Train Class name is too short" })
        }
        else if (this.state.fromStation.length < 4) {
            this.setState({ fromStationError: "fromStation is too short" })
        }
        else if (this.state.toStation.length < 4) {
            this.setState({ toStationError: "Station name is too short" })
        }
        else if (this.state.createdDate.length < 4) {
            this.setState({ createdDateError: "Station name is too short" })
        }else{
        
        axios.post('http://localhost:5000/pass/add', pass)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.clearData();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Season Pass has been created!!',
                        background: '#fff',
                        confirmButtonColor: '#133EFA',
                        iconColor: '#60e004'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error in creating!',
                        background: '#fff',
                        confirmButtonColor: '#133EFA',
                        iconColor: '#e00404'
                    })
                }
            })
        }
    }

    clearData = () => {
        this.setState({
            firstName: '',
            lastName: '',
            nic: '',
            validMonths: '',
            trainClass: '',
            fromStation: '',
            toStation: '',
            createdDate: '',
        })
    }

    render() {
        return (
            <div className="flex flex-col px-5">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>
                                        <div class="">
                                            <p className='text-4xl font-semibold text-black uppercase drop-shadow-lg'>
                                                Book A Season Pass Now
                                            </p>
                                            <div className="grid grid-cols-2 gap-4 form-group">

                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>First Name : </label>
                                                    <input type="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control "
                                                        value={this.state.firstName}
                                                        onChange={this.onChangeFirstName}
                                                    /><p className="font-bold text-red-600 validateMsg">{this.state.firstNameError}</p>
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Last Name : </label>
                                                    <input type="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control"
                                                        value={this.state.lastName}
                                                        onChange={this.onChangeLastName}
                                                    /><p className="font-bold text-red-600 validateMsg">{this.state.lastNameError}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >National ID Number : </label>
                                                    <div>
                                                        <input type="text"
                                                            required
                                                            placeholder=''
                                                            className="form-control"
                                                            value={this.state.nic}
                                                            onChange={this.onChangeNic}
                                                        /><p />
                                                    </div><p className="font-bold text-red-600 validateMsg">{this.state.nicError}</p>
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Created Date : </label>
                                                    <DatePicker
                                                        className='m-2'
                                                        selected={this.state.createdDate}
                                                        onChange={this.onChangeCreatedDate}
                                                    /><p className="font-bold text-red-600 validateMsg">{this.state.createdDateError}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Train Class : </label>
                                                    <div>
                                                        <input type="text"
                                                            required
                                                            placeholder=''
                                                            className="form-control"
                                                            value={this.state.trainClass}
                                                            onChange={this.onChangeTrainClass}
                                                        /><p />
                                                    </div><p className="font-bold text-red-600 validateMsg">{this.state.trainClassError}</p>
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Valid Months : </label>
                                                    <select
                                                        type="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control"
                                                        value={this.state.validMonths}
                                                        onChange={this.onChangeValidMonths}
                                                    >
                                                        <option value={null} >Select number of months</option>
                                                        <option>1 Month</option>
                                                        <option>3 Month</option>
                                                        <option>6 Month</option>
                                                        <option>1 Year</option>
                                                    </select><p className="font-bold text-red-600 validateMsg">{this.state.validMonthsError}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >From Station : </label>
                                                    <div>
                                                        <input type="text"
                                                            required
                                                            placeholder=''
                                                            className="form-control"
                                                            value={this.state.fromStation}
                                                            onChange={this.onChangeFromStation}
                                                        /><p />
                                                    </div><p className="font-bold text-red-600 validateMsg">{this.state.fromStationError}</p>
                                                </div>
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >To Station : </label>
                                                    <div>
                                                        <input type="text"
                                                            required
                                                            placeholder=''
                                                            className="form-control"
                                                            value={this.state.toStation}
                                                            onChange={this.onChangeToStation}
                                                        /><p />
                                                    </div><p className="font-bold text-red-600 validateMsg">{this.state.toStationError}</p>
                                                </div>
                                            </div>
                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Create Season Pass" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
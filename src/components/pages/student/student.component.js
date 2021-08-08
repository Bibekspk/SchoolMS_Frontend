import React, { Component } from 'react';
import './student.component.css'

const form = {
    date: "",
    class: ""
}

export class Studentcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                ...form
            },
            student: []
        }
    }

    componentDidMount(){

    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }), () => {
            console.log(this.state)
        })
    }

    render() {
        let { data } = this.state;
        return (
            <div className="ml-1 col-md-12 col-sm-12 col-xs-12 studentlist">
                <h2>Student List</h2>
                {/* <p><strong>Please select the date and class for student details</strong></p> */}
                <label htmlFor="date"><strong>&nbsp;&nbsp;Date : &nbsp;</strong></label>
                <input type="date" name="date" id="date" value={data.date} onChange={this.handleChange} placeholder="Select Date"></input>
                <label><strong>&nbsp;Class : &nbsp;</strong></label>
                <select name="class" id="class" value={data.class} onChange={this.handleChange}>
                    <option value=""> Select Class</option>
                    <option value="Nursey"> Nursey</option>
                    <option value="LKG"> LKG</option>
                    <option value="UKG"> UKG</option>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                    <option value="6"> 6</option>
                    <option value="7"> 7</option>
                    <option value="8"> 8</option>
                    <option value="9"> 9</option>
                    <option value="10"> 10</option>
                </select>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student ID</th>
                            <th>Student ID</th>
                            <th>Student ID</th>
                            <th>Student ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

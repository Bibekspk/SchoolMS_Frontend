import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux'
import { LoginAction } from '../../actions/auth.action'

const DefaultForm = {
    username: "",
    password: ""
}
class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                ...DefaultForm
            },
            error: {
                ...DefaultForm
            },
            isValid: false
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }), () => {
            this.validateForm('change', name)
            console.log(this.state)
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.validateForm("submit")) return
        this.props.login(this.state.data);
        this.setState({
            isValid: false
        })
    }

    validateForm = (type, name) => {
        const { error, data } = this.state;
        if (type === "submit") {
            error.username = data.username ? "" : "Please provide username*"
            error.password = data.password ? "" : "Please provide password*"
            this.setState({
                error
            })
        }
        if (type === "change") {
            switch (name) {
                case 'username':
                    error.username = data[name]
                        ? data[name].length >= 3
                            ? ""
                            : "Please provide valid username"
                        : "Please provide username*"
                    break;

                case 'password':
                    error.password = data[name]
                        ? data[name].length >= 3
                            ? ""
                            : "Please provide valid password"
                        : "Please provide password*"
                    break;
                default:
                    break;
            }
            this.setState((prevState) => ({
                ...prevState,
                error // error ma save vai sakeko huncha tei sidhai error lai save gareko 
            }
            ))
        }
        const errors = Object.values(error)
            .filter(err => err)
        this.setState({
            isValid: errors.length === 0
        })
        console.log("arrya", errors)
        console.log("length", errors.length)
        if (errors.length === 0) return true
        return false
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-3 bg-dark"></div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h2 className="mt-2 header">Login</h2>
                    <div className="card pl-4 pr-4 pt-2">
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <label className="form-label text-center" ><strong>Username</strong></label>
                            <input type="text" name="username" placeholder="Username/email" onChange={this.handleChange} className="align-center bg-light text-center form-control"></input>
                            <p>{this.state.error.username}</p>
                            <label className="form-label text-center" ><strong>Password</strong></label>
                            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="align-center bg-light text-center form-control"></input>
                            <p>{this.state.error.password}</p>
                            <input type="checkbox" className="" ></input>
                            <label className="form-label">&nbsp;Remember Me</label>
                            <p><a href="/">Forgot Password ? </a></p>
                            <button className="btn btn-primary">Login</button>

                        </form>

                    </div>
                </div>
                <div className="col-md-3 bg-dark"></div>
            </div>
        )
    }
}

const MapStateToProps = rootState => ({
    user: rootState.users.user,
    isLoading: rootState.users.isLoading
})

const MapDispatchToProps = dispatch => ({
    login: (data) => dispatch(LoginAction(data))
})

export const Login = connect(MapStateToProps, MapDispatchToProps)(login)
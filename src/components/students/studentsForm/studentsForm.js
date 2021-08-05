import { Component } from "react";

export class StudentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { mode } = this.props;
        return (
            <div className="">
                <h1>{mode} student</h1>
                <form>
                    <label htmlFor="fullname">Full name</label>
                    <input type="text" name="fullname" placeholder="fullname" required></input>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" required></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email" required></input>
                    <label htmlFor="fathersName">Father's Name</label>
                    <input type="text" name="fathersName" placeholder="fathersName" required></input>
                    <label htmlFor="mothersName">Mother's Name</label>
                    <input type="text" name="mothersName" placeholder="mothersName" required></input>
                    <label htmlFor="contact">Contact</label>
                    <input type="text" name="contact" placeholder="contact" required></input>
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" name="dob" placeholder="dob" required></input>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
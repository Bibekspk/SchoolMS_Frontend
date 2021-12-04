import React, { Component } from 'react'
import {connect} from 'react-redux';
import { GetOneStudent } from '../../actions/student.action';

 class studentDetail extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount=()=>{
        let id = this.props.match.params.id;
        this.props.getStudent(id);
        
    }

    render() {
        console.log(this.props);

        return (
            <div className="row details">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <p>{this.props.student.fullname}</p>
                    <p>{this.props.student.class}</p>
                    <p>{this.props.student.fullname}</p>
                    <p>{this.props.student.fullname}</p>
                    </div>
                    <div className="col-md-2"></div>

            </div>
        )
    }
}

const MapDispatchToProps = dispatch =>({
    getStudent : (id)=> (dispatch(GetOneStudent(id)))
})

const MapStateToProps=rootStore=>({
    student: rootStore.students.student
})

export const studentDetails = connect(MapStateToProps,MapDispatchToProps)(studentDetail)

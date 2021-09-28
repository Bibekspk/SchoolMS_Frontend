import { NavLink } from 'react-router-dom'
import './sidebar.css'

export const SideBar = (props) => {
    // const id = JSON.parse(localStorage.getItem('user'))._id
    return (
            <div>
            <div className="wrapper">
                {/* <!--Top menu --> */}
                <div className="sidebar">
                    <div className="profile">
                        {/* {JSON.parse(localStorage.getItem('user')).gender === 'male' && <img src={maleimg} height="25vh" alt="cannot display " width="100%"></img>}
                        {JSON.parse(localStorage.getItem('user')).gender !== 'male' && <img src={femaleimg} height="30vh" alt="cannot display " width="100%"></img>} */}
                        <h4 className="">{JSON.parse(localStorage.getItem('user')).fullname}</h4> 
                    </div>
                    <ul>
                        <li>

                            <NavLink to="/" exact activeClassName="sidebarActive">
                                <span className="icon"><i className="fas fa-home"></i></span>
                                <span className="item">Home</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/addStudent" activeClassName="sidebarActive">
                                <span className="icon"><i className="fas fa-plus"></i></span>
                                <span className="item">Add Student</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/studentList" activeClassName="sidebarActive">
                                <span className="icon"><i className="fas fa-eye"></i></span>
                                <span className="item">View Students</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/attendance" activeClassName="sidebarActive">
                                <span className="icon"><i className="fas fa-search"></i></span>
                                <span className="item">Class Attendance</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/notifications" activeClassName="sidebarActive">
                                <span className="icon"><i className="fas fa-bell"></i></span>
                                <span className="item">Notifications</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" activeClassName="sidebarActive">
                                <span className="icon"><i className="fas fa-cog"></i></span>
                                <span className="item">Settings</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
                        <div className="content">{props.children}</div>
            </div>
    )
}
import React from "react";
import Card from "../UserCard"
import Spiner from "../Spiner";
import { getUsers } from "../../api";


class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isSort: true,
            error: null,
            isFetching: true
        }
    }

    componentDidMount (){
        this.getData();
    }

    getData = () => {
        getUsers()
        .then(data=>{
            this.setState({
                users: data.results
            })
        })
        .catch((error)=>{
            this.setState({
                error
            })
        })
        .finally(()=>{
            this.setState({
                isFetching: false
            })
        })
    }

    userMap = () => this.state.users.map((userObj) => <Card user={userObj} key={userObj.login.uuid} />)

    sortUsers = () => {
        const { users, isSort } = this.state;
        const newUsers = [...users];
        newUsers.sort((a, b) => (a.name > b.name && isSort) ? 1 : -1);
        this.setState({
            users: newUsers,
            isSort: !isSort
        })
    }

    render() {
        const {users, error, isFetching} =this.state;
        return (
            <section>
                <button onClick={this.sortUsers}>Sorted</button>
                {error && <div>Oops! Sorry</div>}
                {users && (<div className="class-container">
                {this.userMap()}
                </div>)}
                {isFetching && <Spiner />}
            </section>
        )
    }
}

export default UserDashboard;
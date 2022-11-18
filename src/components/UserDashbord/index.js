import React from "react";
import Spiner from "../Spiner";
import { getUsers } from "../../api";
import UsersList from "../UsersList";


class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
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

    

    render() {
        const {users, error, isFetching} =this.state;
        return (
            <section>
                {error && <div>Oops! Sorry</div>}
                {users && <UsersList users={users}/>}
                {isFetching && <Spiner />}
            </section>
        );
    }
}

export default UserDashboard;
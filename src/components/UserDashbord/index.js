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
            isFetching: true,
            page: 1
        }
    }

    componentDidMount (){
        this.getData();
    }

    componentDidUpdate (prevProps, prevState){
        if(prevState.page !== this.state.page){
            this.getData();
        }
    }

    getData = () => {
        const {page} = this.state;
        getUsers({page})
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

    next = () => {
        const {page} = this.state;
            this.setState({
                page: page+1
        })
    }

    prev = () => {
        const {page} = this.state;
        if (page > 1) {
            this.setState({
                page: page-1
        })
        }
    }

    render() {
        const {users, error, isFetching, page} = this.state;
        return (
            <section>
                <button onClick={this.prev}>{'<'}</button>
                    <span>{page}</span>
                <button onClick={this.next}>{'>'}</button>
                {error && <div>Oops! Sorry</div>}
                {users && <UsersList users={users}/>}
                {isFetching && <Spiner />}
            </section>
        );
    }
}

export default UserDashboard;
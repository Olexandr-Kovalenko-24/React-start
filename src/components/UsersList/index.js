import React, { Component } from 'react';
import Card from "../UserCard"

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSort: true,
            filterValue: '',
        }
    }

    filterList = () => {
        const {filterValue} = this.state;
        return this.props.users.filter(({name: {first, last}})=>{
            return first.toLowerCase().includes(filterValue) ||
            last.toLowerCase().includes(filterValue)
        })
    }

    userMap = (usersArray) => usersArray.map((userObj) =>
        <Card user={userObj} key={userObj.login.uuid} />)
        

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
        this.filterList();
    }


    render() {
        const {filterValue} = this.state;
        return (
            <>
                <input 
                type='text'
                value={filterValue}
                name='filterValue'
                onChange={this.changeHandler} 
                />
                <div className="class-container">
                    {this.userMap(this.filterList())}
                </div>
            </>
        );
    }
}

export default UsersList;

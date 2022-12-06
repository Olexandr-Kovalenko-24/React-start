import React, { useState } from 'react';
import Card from "../UserCard"

const UsersList = (props) => {
    const [filterValue, setfilterValue] = useState('');
    const [isSort, setSort] = useState(true);

    const filterList = () => {
        return props.users.filter(({ name: { first, last } }) => {
            return first.toLowerCase().includes(filterValue) ||
                last.toLowerCase().includes(filterValue)
        })
    }

    const userMap = (usersArray) => usersArray.map((userObj) =>
        <Card user={userObj} key={userObj.login.uuid} />)


    const changeHandler = ({ target: { value } }) => {
        setfilterValue(value)
        filterList();
    }

    return (
        <>
            <input
                type='text'
                value={filterValue}
                name='filterValue'
                onChange={changeHandler}
            />
            <div className="class-container">
                {userMap(filterList())}
            </div>
        </>
    )
}


// class UsersList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isSort: true,
//             filterValue: '',
//         }
//     }

// filterList = () => {
//     const {filterValue} = this.state;
//     return this.props.users.filter(({name: {first, last}})=>{
//         return first.toLowerCase().includes(filterValue) ||
//         last.toLowerCase().includes(filterValue)
//     })
// }

// userMap = (usersArray) => usersArray.map((userObj) =>
//     <Card user={userObj} key={userObj.login.uuid} />)


// changeHandler = ({target: {name, value}}) => {
//     this.setState({
//         [name]: value
//     })
//     this.filterList();
// }


//     render() {
//         const {filterValue} = this.state;
//         return (
// <>
//     <input 
//     type='text'
//     value={filterValue}
//     name='filterValue'
//     onChange={this.changeHandler} 
//     />
//     <div className="class-container">
//         {this.userMap(this.filterList())}
//     </div>
// </>
//         );
//     }
// }

export default UsersList;

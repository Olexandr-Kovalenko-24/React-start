import React, { Component } from 'react';

class PhoneLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
            error: null
        }
    }
    
    componentDidMount() {
        this.props.loadData()
        .then(data => {
            this.setState({
                data
            })
        })
        .catch(error => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState( {
                isFetching: false
            })
        })
    }
   
   
    render() {
        const {data, isFetching, error} = this.state;
        return (
            <>
              {isFetching && <div>Loading...</div>}  
              {error && <div> error </div>}
              <ol>
              {data.map((phone) => <li key={phone.id}>{phone.brand} --- {phone.model} --- {phone.price} </li>)}
              </ol>
            </>
        );
    }
}

export default PhoneLoader;
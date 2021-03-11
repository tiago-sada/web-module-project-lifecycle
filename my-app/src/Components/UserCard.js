import React, {Component} from "react";

class UserCard extends Component {
    constructor(props) {
        super(props)
    }

    userCard = () => {
        return (
            <div>
                <p>Name: {this.props.user.name}</p>
                <p>Username: {this.props.user.login}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
            </div>
        )
    }

    render() {
        console.log(this.props.user)
        return (
            <div>
                {this.props.user ? this.userCard() : <p>Loading</p>}
            </div>
        )
    }

}


export default UserCard
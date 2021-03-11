import React, {Component} from "react";
import UserCard from "./UserCard"

class FollowersList extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            <div>
                {this.props.followers.map(follower => (
                    <UserCard user={follower}/>
                ))}
            </div>
        )
    }

}


export default FollowersList
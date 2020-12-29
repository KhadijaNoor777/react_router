import React from 'react';
import {useParams} from 'react-router';

//function User({match}) {
function User() {

    const {name} = useParams();
    return (
        <div>
            User {name}
            {/* User {match.params.name} */}
        </div>
    )
}

export default User;
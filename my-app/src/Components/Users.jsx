import "./Users.css"

const Users = (props) => {
    const users = props.users;

    return (
        <div className='uCard'>
            {users.map((user) => (
                <div key={user.id} className='users'>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>
            ))}
        </div>
    )
}

export default Users
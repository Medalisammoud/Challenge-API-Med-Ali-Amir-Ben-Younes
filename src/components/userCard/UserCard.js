import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../assets/avatar.jpg'

const UserCard = ({user}) => {
    return (
        <div className='Card'>
             <Card style={{ width: '18rem',height:'380px'}}>
            <Card.Img variant="top" src={img} style={{ height:'200px' }} />
            <Card.Body>
                <Card.Title>{user.id} </Card.Title>
                <Card.Title>{user.name} </Card.Title>

                <Card.Text>{user.address.street} </Card.Text>
                    <Link to={`/posts/userid/${user.id}`}>
                    <Button variant="outline-danger" >Posts</Button>
                    </Link>
            </Card.Body>
            
        </Card>
        </div>
    )
}

export default UserCard

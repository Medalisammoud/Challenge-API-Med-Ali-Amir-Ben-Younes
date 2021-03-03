import React from 'react'
import {Card,Button,ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {
    return (
        <div className='Card'>
             <Card style={{ width: '18rem',height:'400px'}}>
            <Card.Body>
                <Card.Title>{post.id} </Card.Title>
                <Card.Title>{post.title} </Card.Title>
                <Card.Text>{post.body} </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Link to={`/comments/postid/${post.id}`}>
                <Button variant="outline-danger">Comments</Button>
                </Link></Card.Footer>
        </Card>
        </div>
    )
}

export default PostCard

import React,{useEffect} from 'react'
import {Card} from 'react-bootstrap'
const CommentCard = ({comment}) => {

    
    
    return (
        <div className='Card'>
             <Card style={{ width: '18rem',height:'380px'}}>
            <Card.Body>
                <Card.Title>{comment.id} </Card.Title>
                <Card.Title>{comment.name} </Card.Title>
                <Card.Title>{comment.email} </Card.Title>
                <Card.Text>{comment.body} </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default CommentCard

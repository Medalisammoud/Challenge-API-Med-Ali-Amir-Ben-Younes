import React,{useState , useEffect} from 'react'
import axios from 'axios'

import CommentCard from '../commentCard/CommentCard'
import {Button,Spinner} from 'react-bootstrap'


const CommentsList = ({match,history}) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getComment =()=>{
        setIsLoading(true)
        const url=`https://jsonplaceholder.typicode.com/comments/?postId=${match.params.id}`
        axios.get(url).then(res=>res.data).then(res=>setComments(res))
        
    }
     useEffect(() => {
         getComment()
         
     }, [])
     
    return (
        <div className='text'>
        <Button variant="outline-warning" onClick={()=> history.goBack()} >{'<<'} Go Back</Button>
        <h1>Comments : {comments.length}</h1>
        {<div className='List'>
            {isLoading ?
                comments.map( (comment) =>
                <CommentCard comment={comment} key={comment.id}  /> 
                )
            :<Spinner animation="border" variant="primary" style={{ marginTop:'10%', width: "200px", height: '200px' }} />
            }
        </div>}
        </div>
    )
}

export default CommentsList

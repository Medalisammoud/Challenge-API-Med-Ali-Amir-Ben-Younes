import React ,{useState , useEffect} from 'react'
import axios from 'axios'


import PostCard from '../postCard/PostCard'
import {Button,Spinner} from 'react-bootstrap'


const PostsList = ({match,history}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts =()=>{
        setIsLoading(true)
        const url=`https://jsonplaceholder.typicode.com/posts/?userId=${match.params.id}`
        axios.get(url).then(res=>res.data).then(res=>setPosts(res))
    }
     useEffect(() => {
         getPosts()
         
     }, [])
    return (
        <div>
            <Button variant="outline-warning" onClick={()=> history.goBack()} >{'<<'} Go Back</Button>
       
        <div className='List'>

            {isLoading ?
                posts.map(post =>
                    <PostCard post={post} key={post.id}/>
                    )
                    :<Spinner animation="border" variant="primary" style={{ marginTop:'10%', width: "200px", height: '200px' }} />
            }
        </div>
         </div>
    )
}

export default PostsList

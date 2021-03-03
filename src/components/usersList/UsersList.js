import React,{useState , useEffect} from 'react'
import axios from 'axios'
import UserCard from '../userCard/UserCard'
import {Form,Col,Spinner} from 'react-bootstrap'




const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const getUser =()=>{
        setIsLoading(true)
        const url='https://jsonplaceholder.typicode.com/users'
        axios.get(url).then(res=>res.data).then(res=>setUsers(res))
    }
     useEffect(() => {
         getUser()
         
     }, [])
     
    return (
        <div>

    <Col sm="10" className='input'>
      <Form.Control type="text" placeholder="search..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
    </Col>
        <div className='List'>
        {isLoading ?
            search !=='' ?
            users.filter(user=>user.name.toUpperCase().includes(search.toUpperCase()))
            .map( user => 
                
                <UserCard user={user} key={user.id}/> 
            )
            : users.map( user => 
                
                    <UserCard user={user} key={user.id}/> 
                )
        :<Spinner animation="border" variant="primary" style={{ marginTop:'10%', width: "200px", height: '200px' }} />
        }
        </div>
        
        </div>
    )
}

export default UsersList

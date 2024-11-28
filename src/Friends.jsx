import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function Friends(){
    
    const [friends, setFriend]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
        .catch(err => console.log(err))
    },[])
    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/**
 * 1. State declare
 * 2. Use effect with dependency array.
 * 3. Use fetch to load data.
 * 4. set loaded data to the state.
 */
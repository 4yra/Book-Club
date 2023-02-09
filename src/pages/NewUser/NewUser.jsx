import { db } from '../../FirebaseConf'
import { addDoc, collection } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import { AuthContext } from "../../context/AuthContext";
import './NewUser.css'


export const NewUser = () => {
    const [data, setData] = useState({})
    const handleInput = (e) => {
        const id = e.target.id
        const value = e.target.value
        setData({...data, [id]:value  })
    }
    console.log(data);
    const {currentUser} = useContext(AuthContext);
    const createUser = async (e) => {
        e.preventDefault()
        console.log(typeof(currentUser.email));
        await addDoc(collection(db, 'users', 'name'), {
            username: 'username',
            oneWord: 'oneWord'
        })
    }
    return (
        <div className='NewUserDiv'>
            <Box className='NewUserBox'>
                <form onSubmit={createUser} className='NewUserForm'>
                    <Stack>
                        <input 
                            id="username"
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            onChange={handleInput} 
                        />
                        <input 
                            id="oneWord" 
                            type="text" 
                            name="oneWord" 
                            placeholder="Describe yourself with one word" 
                            onChange={handleInput} 
                        />
                        <button type="submit">Update</button>
                    </Stack>
                </form>
            </Box>
        </div>
    )
}
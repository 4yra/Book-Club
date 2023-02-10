import { Stack } from "@mui/system"
import TextField from '@mui/material/TextField';
import { useState, useContext, useEffect } from 'react';
import { collection,  addDoc, serverTimestamp, getDoc, doc, getDocs} from 'firebase/firestore';
import { db } from '../../FirebaseConf';
import { AuthContext } from "../../context/AuthContext";

import './Discourse.css'

export const ForumView = () => {

    const [posts, setPosts] = useState([]);
    const dbPostRef = collection(db, 'bookComments') 
    const getPosts = async () => {
        const data = await getDocs(dbPostRef);
        const filterData = data.docs.map((doc) => ({
            ...doc.data(), id: doc.id, date: doc.data().date.toDate()
        }))
        const sortedData = filterData.sort((a, b) => (b.date > a.date ? 1 : -1))
        setPosts(sortedData);
        // setTime(Date(filterData.date))
        console.log(sortedData);
        // console.log(time);
      }
    useEffect(() => {
        const dbPostRef = collection(db, 'bookComments') 
        const getPosts = async () => {
            const data = await getDocs(dbPostRef);
            const filterData = data.docs.map((doc) => ({
                ...doc.data(), id: doc.id, date: doc.data().date.toDate()
            }))
            const sortedData = filterData.sort((a, b) => (b.date > a.date ? 1 : -1))
            setPosts(sortedData);
            // setTime(Date(filterData.date))
            console.log(sortedData);
            // console.log(time);
          }
        getPosts();
    }, [])
    function timeFormat(ts) {
        return `${ts.toDateString().slice(4)} - ${ts.toTimeString().slice(0, 9)}`
    }


    const {currentUser} = useContext(AuthContext);
    const [text, setText] = useState('');
    const submitComment = async (comment) => {
        const dbPostRef = collection(db, 'bookComments') 
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        await addDoc(dbPostRef, {
            name: docSnap.data().username,
            date:serverTimestamp(), 
            text:text,
            userId: currentUser.uid,
        })
        getPosts()
    }
    return (
        <Stack style={{position: 'static', height:'100%'}}>
            <div className='discourseDiv'>
                
                {posts.map(c => (
                    <div key={c.id} style={{border:'solid black 1px', borderRadius:'5px', margin:'10px', padding:'20px'}}>
                        <Stack className='mesgMetaData' direction='row' spacing={2}>
                            <p>Name: {c.name}</p>
                            <p>Date: {timeFormat(c.date)}</p>
                        </Stack>

                        <p style={{textAlign:'left'}}>{c.text}</p>
                    </div>
                ))}

            </div>
            <div className="textFieldBox" >
                <Stack>
                    <TextField
                        style={{width: '100%', backgroundColor:'white'}}
                        id="filled-multiline-static"
                        label="Comment"
                        multiline
                        rows={4}
                        variant="filled"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div className="textFieldDiv">
                        <button  onClick={submitComment}>Submit</button>
                    </div>
                </Stack>
            </div>
        </Stack>
    )
}
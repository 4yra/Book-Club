import { Stack } from "@mui/system"
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import { collection,  addDoc, serverTimestamp, getDoc, doc} from 'firebase/firestore';
import { db } from '../../FirebaseConf';
import { AuthContext } from "../../context/AuthContext";

import './Discourse.css'

export const TextFieldBox = () => {
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

    }
    return (
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
    )
}
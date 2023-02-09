import { Box } from "@mui/system"
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import { collection,  addDoc, serverTimestamp, getDoc, doc} from 'firebase/firestore';
import { db } from '../../FirebaseConf';
import { AuthContext } from "../../context/AuthContext";


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
        <Box sx={{ width: "100%" }}>
            <TextField
                style={{width: '80%', maxWidth: '400px', border:'solid black 1px', backgroundColor:'white'}}
                id="filled-multiline-static"
                label="Comment"
                multiline
                rows={4}
                variant="filled"
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <button onClick={submitComment}>Submit</button>
        </Box>
    )
}
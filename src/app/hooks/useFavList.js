import { useState, useEffect } from 'react'
import firebase from '../../fbConfig'

const useFavList = (uid) => {
    const [favList, setFavList] = useState([]);
 
    useEffect(() => {
        const unsub = firebase.firestore().collection('users')
            .doc(uid)
            .onSnapshot((doc) => {
                let document = [];
                doc.data().favourite.forEach(item => document.push(item))
                setFavList(document)
            })

        return () => unsub();
    }, [])

    return { favList }
}

export default useFavList;


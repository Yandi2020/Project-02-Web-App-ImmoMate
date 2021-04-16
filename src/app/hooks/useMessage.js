import { useState, useEffect } from 'react'
import firebase from '../../fbConfig'

const useMessage = (collection, id) => {
    const [doc, setDoc] = useState()

    useEffect(() => {
        const unsub = firebase.firestore().collection(collection)
            .doc(id)
            .onSnapshot(doc => {
                let document = [];
                document.push(doc.data())
                setDoc(document)
            })

        return () => unsub();
    }, [])

    return doc;
}

export default useMessage;


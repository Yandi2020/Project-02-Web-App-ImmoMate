import { useState, useEffect } from 'react'
import firebase from '../../fbConfig'

const useSelectedFirestore = (collection, termOne, condition, termTwo) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = firebase.firestore().collection(collection)
            .where(termOne, condition, termTwo)
            .onSnapshot((docs) => {
                let documents = [];

                docs.forEach(doc => {
                    documents.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })

                setDocs(documents)
            })

        return () => unsub();

    }, [])

    return { docs }
}

export default useSelectedFirestore;


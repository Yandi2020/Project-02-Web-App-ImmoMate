import firebase from '../../fbConfig'

export const createListing = (listing) => {
    return (dispatch, getState) => {
        const docRef = firebase.firestore().collection('listings').doc();
        const storage = firebase.storage();
        const authorId = getState().firebase.auth.uid;

        docRef.set({
            ...listing,
            images: [],
            postedBy: authorId,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'CREATE_ERROR', error })
        });

        // images is object we cannot use map or forEach, using follow to overcome it 
        [].forEach.call(listing.images, (image) => {
            storage.ref(image.name).put(image).then(async () => {
                const url = await storage.ref(image.name).getDownloadURL();

                return docRef.get().then(doc => {
                    if(!doc.data().images.includes(url)){
                        return docRef.update({
                            images: [...doc.data().images, url]
                        })
                    }
                })
            })   
        })
        
    }
}

export const deleteListing = (id) => {
    return (dispatch) => {
        const firestore = firebase.firestore();

        firestore.collection('listings').doc(id).delete().then(() => {
            dispatch({ type: 'DELETE_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'DELETE_ERROR', error })
        })
    }
}

export const addFavourite = (id) => {
    return (dispatch, getState) => {
        const userId = getState().firebase.auth.uid;
        const docRef = firebase.firestore().collection('users').doc(userId);

        return docRef.get().then(doc => {
            if(!doc.data().favourite.includes(id)) {
                docRef.update({
                    favourite: [...doc.data().favourite, id]
                })
            }
        }) 
        .then(() => {
            dispatch({ type: 'ADDFAVOURITE_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'ADDFAVOURITE_ERROR', error })
        });
    }
}

export const removeFavourite = (id) => {
    return (dispatch, getState) => {
        const userId = getState().firebase.auth.uid;
        const docRef = firebase.firestore().collection('users').doc(userId);

        return docRef.get().then(doc => {
            if(doc.data().favourite.includes(id)) {
                const newFav = doc.data().favourite.filter(fav => fav !== id);

                docRef.update({
                    favourite: newFav
                })
            }
        }) 
        .then(() => {
            dispatch({ type: 'REMOVEFAVOURITE_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'REMOVEFAVOURITE_ERROR', error })
        });
    }
}

export const sendMessage = (value, chatId) => {
    return (dispatch, getState) => {
        const docRef = firebase.firestore().collection('chats').doc(chatId);
        const userId = getState().firebase.auth.uid;
        //const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        const mssg = {
            content: value,
            createdAt: new Date(),
            from: userId
        }
        //the problem was updating object in array 
        //and if using timestamp, update() method doesn't work, so using new Date() instead

        //step 01: update message in firestore database 
        docRef.update({
            messages: firebase.firestore.FieldValue.arrayUnion(mssg),
            updated: new Date()
        }).then(() => {
            dispatch({ type: 'SENDMESSAGE_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'SENDMESSAGE_ERROR', error })
        })
    }
} 

export const newMessage = (message, userId, id, owner) => {
    return (dispatch) => {
        const docRef = firebase.firestore().collection('chats').doc();
        
        const item = {
            client: userId,
            messages: [{
                content: message,
                createdAt: new Date(),
                from: userId
            }],
            postedBy: owner,
            property: id,
            updated: new Date()
        }

        docRef.set(item)
        .then(() => {
            dispatch({ type: 'NEWMESSAGE_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'NEWMESSAGE_ERROR', error })
        });
    }
}




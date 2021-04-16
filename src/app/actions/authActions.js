import firebase from '../../fbConfig'

export const login = (credentials) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error })
        })
    }
}

export const logout = () => {
    return (dispatch) => {

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}

export const register = (newUser) => {
    return (dispatch) => {
        const firestore = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                gender: newUser.gender,
                favourite: [],
                createdAt: new Date(),
            })
        })
        .then(() => {
            dispatch({ type: 'REGISTER_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'REGISTER_ERROR', error })
        })
    }
}

export const updatePassword = (values) => {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        const email = user.email;
        const password = values.oldPassword;
        const credentials = firebase.auth.EmailAuthProvider.credential(email, password);

        user.reauthenticateWithCredential(credentials)
            .then(() => {
                user.updatePassword(values.newPassword)
            })
            .then(() => {
                dispatch({ type: 'UPDATEPASSWORD_SUCCESS' })
            })
            .catch((error) => {
                dispatch({ type: 'UPDATEPASSWORD_ERROR', error })
            })
    }
}

//firebase.firestore.FieldValue.serverTimestamp
//response.user.metadata.creationTime


import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import app from '../../../firebase';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { setUsers } from '../../../store/user/user.slice';


const SignUp = ({ title }) => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const handleSignupAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // 리덕스 스토어에 담는 로직
      dispatch(setUsers({
        email: userCredential.user.email,
        token: userCredential.user.refreshToken,
        id: userCredential.user.uid
      }))
      navigate('/')
      console.log(userCredential.user.email)
    
    })
    .catch(error => {
      console.error(error);
      return error && setFirebaseError("회원가입에 실패했습니다")
    })
  }
  return (
   <Form 
    title={"가입하기"}
    getDataForm={handleSignupAndLogin}
    firebaseError={firebaseError}
     />
  )
}

export default SignUp
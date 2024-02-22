import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'

const Form = ({ title, getDataForm, firebaseError }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur'
  })
  
  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    getDataForm(email, password);
    reset();

  }

  const userEmail = {
    required: "필수 필드입니다",
    // pattern: {
    //   value: ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
    //   ,
    //   message: `최소 8자, 영문 1자, 숫자 1자.`,
    // }
   
  }
  const userPassword = {
    required: "필수 필드입니다",
    minLength: {
      value: 6,
      message: "최소 6자입니다",
    },
    maxLength: {
      value: 13,
      message: "최대 13자입니다",
    },
    // pattern: {
    //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z]{8,}$/gm,
    //   message: `최소 8자, 영문 1자, 숫자 1자.`,
    // }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input 
          type="email" 
          placeholder="E-mail" 
          {...register("email", userEmail)}
        />
         {errors?.email &&
        <div>
          <span className={styles.form_error}>
            {errors.email.message}
          </span>
        </div>
        }
      </div>

      <div>
        <input 
          type="password" 
          placeholder="Password" 
          {...register("password", userPassword)}
        />
        {errors?.password &&
        <div>
          <span className={styles.form_error}>
            {errors.password.message}
          </span>
        </div>
        }
        <button className={styles.button} type='submit'>{title}</button>
      </div>
      {firebaseError && (
        <span className={styles.form_error}></span>
      )}
         
    </form>
  )
}

export default Form
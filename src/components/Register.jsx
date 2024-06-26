import { useState, useEffect, useRef } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[0-9A-Za-z]{6,16}$/
const PWD_REGEX = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/

function Register() {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchedPwd, setMatchedPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    // useEffect(() => {
    //  userRef.current.focus()
    // }, [])

   useEffect(() => {
    const result = USER_REGEX.test(user) 
    console.log(result)
    console.log(user)
    setValidName(result)   
   }, [user])
    
  useEffect(() => {
   const result = PWD_REGEX.test(pwd) 
   setValidPwd(result)
   const match = pwd === matchedPwd
   setValidMatch(match)
  }, [pwd, matchedPwd])
       
    
   useEffect(() => {
      setErrorMessage('')
   }, [user, pwd, matchedPwd])  
    
  return (
    <section>
        <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"}>{errorMessage}</p>
        <form action="">
              <label htmlFor='username'>Username: </label>
              <input type='text' id='username' name='username' value={user} onChange={e => setUser(e.target.value)} ref={useRef} autoComplete='off' required aria-invalid={validName ? "false" : "true"} aria-describedby='uidnote' onFocus={() => setUserFocus(true)} onBlur={()=>setUserFocus(false) } />
        </form>
    </section>
  )
}

export default Register

import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
const SignIn  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
   return (
       <section id="signin">
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Desgem</h2>
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
              <h6 style={{fontSize:"14px",marginBottom:"20px"}}>
                <Link to="/reset" className="forgot-line">Forgot password ?</Link>
            </h6>
            <button className="btn waves-effect waves-light#ffca28 amber lighten-1" style={{color:"#33691e", fontWeight:"bold"}}
            onClick={()=>PostData()}
            >
                Login
            </button>
            <h5 style={{fontSize:"14px"}}>
            Don't have an account ?<Link to="/signup" className="signin-line"> Sign up</Link>
            </h5>
          
    
        </div>
      </div>
      </section>
   )
}


export default SignIn
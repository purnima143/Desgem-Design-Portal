import React,{useContext,useRef,useEffect,useState} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'
const NavBar = ()=>{
    const  searchModal = useRef(null)
    const [search,setSearch] = useState('')
    const [userDetails,setUserDetails] = useState([])
     const {state,dispatch} = useContext(UserContext)
     const history = useHistory()
     useEffect(()=>{
         M.Modal.init(searchModal.current)
     },[])
     const renderList = ()=>{
       if(state){
           return [
            <li key="1"><i  data-target="modal1" className="large material-icons modal-trigger" style={{color:"white"}}>search</i></li>,
            <li key="4"><Link to="/myfollowingpost" className="white-text">Following Shots</Link></li>,
            <li key="2"><Link to="/profile" className="white-text">
                     <img style={{width:"30px",height:"30px",borderRadius:"50px",marginTop:"15px"}}
                     src={state?state.pic:"loading"}            />
                     </Link>
            </li>,
            <li key="3"><Link to="/create" className="btn white" style={{color:"#ffca28", fontWeight:"bold"}}>Create Shots</Link></li>,
            <li  key="5">
             <button className="btn #ffca28 amber lighten-1" style={{color:"#33691e", fontWeight:"bold"}}
              onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/signin')
            }}
            >
                Logout
            </button>
            </li>
         
            
           ]
       }else{
         return [
          <li  key="6"><Link to="/signin" className="white-text">Sign in</Link></li>,
          <li  key="7"><Link to="/signup" className="white-text">Sign up</Link></li>
         
         ]
       }
     }


     const fetchUsers = (query)=>{
        setSearch(query)
        fetch('/search-users',{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            query
          })
        }).then(res=>res.json())
        .then(results=>{
          setUserDetails(results.user)
        })
     }
    return(
        <nav>
        <div className="nav-wrapper #8bc34a light-green"  style={{padding:" 0px 30px"}}>
          <Link to={state?"/":"/signin"} className="brand-logo left white-text">Desgem</Link>
          <ul id="nav-mobile" className="right">
             {renderList()}
  
          </ul>
        </div>
        <div id="modal1" class="modal" ref={searchModal} style={{color:"black"}}>
          <div className="modal-content">
          <input
            type="text"
            placeholder="search users"
            value={search}
            onChange={(e)=>fetchUsers(e.target.value)}
            />
             <ul className="collection">
               {userDetails.map(item=>{
                 return <Link to={item._id !== state._id ? "/profile/"+item._id:'/profile'} onClick={()=>{
                   M.Modal.getInstance(searchModal.current).close()
                   setSearch('')
                 }}><li className="collection-item">{item.email}</li></Link> 
               })}
               
              </ul>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>close</button>
          </div>
        </div>
      </nav>
    )
}


export default NavBar
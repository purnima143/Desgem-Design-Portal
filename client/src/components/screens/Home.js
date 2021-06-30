import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
const Home  = ()=>{
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
       fetch('/allpost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setData(result.posts)
       })
    },[])

    const likePost = (id)=>{
          fetch('/like',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId:id
              })
          }).then(res=>res.json())
          .then(result=>{
                   //   console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }
    const unlikePost = (id)=>{
          fetch('/unlike',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId:id
              })
          }).then(res=>res.json())
          .then(result=>{
            //   console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
          }).catch(err=>{
            console.log(err)
        })
    }

    const makeComment = (text,postId)=>{
          fetch('/comment',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId,
                  text
              })
          }).then(res=>res.json())
          .then(result=>{
              console.log(result)
              const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
             })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }

    const deletePost = (postid)=>{
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.filter(item=>{
                return item._id !== result._id
            })
            setData(newData)
        })
    }
   return (
       <div className="home">
           {
               data.map(item=>{
                   return(
                       <div className="container-fluid">

                       <div className="card home-card" key={item._id}>
                       <h5 className="title">{item.title} {item.postedBy._id == state._id 
                            && <i className="material-icons" style={{
                                float:"right",
                                color:"grey"
                            }} 
                            onClick={()=>deletePost(item._id)}
                            >delete</i>

                            }</h5>

                            <h5 style={{margin:"0px 10px 10px 0px"}}><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile" } className="profilename">{item.postedBy.name}</Link></h5>
                            <div className="card-image">
                                <img src={item.photo}/>
                            </div>
                            <div className="card-content">
                            <i className="material-icons" style={{color:"#e2184a"}}>favorite</i>
                            {item.likes.includes(state._id)
                            ? 
                             <i className="material-icons" style={{color:"grey"}}
                                    onClick={()=>{unlikePost(item._id)}}
                              >thumb_down</i>
                            : 
                            <i className="material-icons" style={{color:"grey"}}
                            onClick={()=>{likePost(item._id)}}
                            >thumb_up</i>
                            }
                            
                           
                                <span className="likes">{item.likes.length} </span>
                                <p style={{fontSize:"12px", marginTop:"10px"}}>{item.body}</p>
                                <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    makeComment(e.target[0].value,item._id)
                                }}>
                                  <input type="text" placeholder="Add feedback..." />  
                                </form>
                                {
                                    item.comments.map(record=>{
                                        return(
                                        <h5 key={record._id} style={{fontSize:"1rem"}}><span style={{fontWeight:"700" , color:"#33691e"}}>{record.postedBy.name}</span> {record.text}</h5>
                                        )
                                    })
                                }
                               
                                
                            </div>
                        </div> 
                        </div>
                   )
               })
           }
          
          
       </div>
   )
}


export default Home
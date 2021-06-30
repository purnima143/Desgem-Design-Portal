import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'

const Profile  = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setPics(result.mypost)
       })
    },[])
    useEffect(()=>{
       if(image){
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","desgem")
        data.append("cloud_name","purnimasharma")
        fetch("https://api.cloudinary.com/v1_1/purnimasharma/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
    
       
           fetch('/updatepic',{
               method:"put",
               headers:{
                   "Content-Type":"application/json",
                   "Authorization":"Bearer "+localStorage.getItem("jwt")
               },
               body:JSON.stringify({
                   pic:data.url
               })
           }).then(res=>res.json())
           .then(result=>{
               console.log(result)
               localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
               dispatch({type:"UPDATEPIC",payload:result.pic})
               //window.location.reload()
           })
       
        })
        .catch(err=>{
            console.log(err)
        })
       }
    },[image])
    const updatePhoto = (file)=>{
        setImage(file)
    }
   return (
       <div style={{maxWidth:"550px",margin:"0px auto"}}>
           <div style={{
              margin:"18px 0px",
              padding:"10px 20px",
               borderBottom:"1px solid #eeeeee  "
           }}>

         
           <div style={{
               display:"flex",
               justifyContent:"space-around",
              
           }}>
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src={state?state.pic:"loading"}
                   />
                 
               </div>
               <div>
                   <h4 style={{fontWeight:"900",textTransform:"capitalize"}}>{state?state.name:"loading"}</h4>
                   <h6>{state?state.email:"loading"}</h6>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6 style={{color:"#8bc34a", fontWeight:"700",marginRight:"18px"}}>{mypics.length} shots</h6>
                       <h6 style={{color:"#8bc34a", fontWeight:"700",marginRight:"18px"}}>{state?state.followers.length:"0"} followers</h6>
                       <h6 style={{color:"#8bc34a", fontWeight:"700",marginRight:"18px"}}>{state?state.following.length:"0"} following</h6>
                   </div>

               </div>
           </div>
        
            <div className="file-field input-field" style={{margin:"10px"}}>
            <div  className="btn #ffca28 amber lighten-1" style={{color:"#33691e", fontWeight:"bold"}}>
                <span>Update pic</span>
                <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            </div>      
           <div className="gallery">
               {
                   mypics.map(item=>{
                       return(
                        <img key={item._id} className="item" src={item.photo} alt={item.title} style={{margin:"10px"}}/>  
                       )
                   })
               }

           
           </div>
       </div>
   )
}


export default Profile
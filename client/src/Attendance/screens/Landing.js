import React from 'react';
import { Link } from "react-router-dom"
import StudentIMage from "../Images/student4.jpg"
import AdminIMage from "../Images/admin2.jpg"
import TeacherImage from "../Images/backgg.JPG"
import backgr from "../Images/backgr.jpg"

const Landing = () => {
    return (
        <div className="HomePage" style={{ backgroundImage:`url(${backgr})`, backgroundAttachment:"fixed",
        backgroundRepeat:"no", height:"600px",paddingTop:"100px" }} >
           <div style={{height:"400px",margin:"auto",backgroundColor:"transparent",width:"60%",opacity:"0.9",paddingTop:"50px"}}>

           
            <div className='d-flex' style={{display:"flex",width:"100%",height:"300px",justifyContent:"center" }}>
            <Link className="link_class" to="/adminlogin" >
                <div className="" >
                   <img src={AdminIMage} alt="StudentIMage" style={{height:"250px",width:"250px"}} />
                   
                   <h3 style={{textDecoration:"none",fontFamily:"Oswald",color:"white",textAlign:"center",fontWeight:"bold"}}>Signin as Admin</h3>
                </div>
                </Link>
         
                
                <Link className="link_class" to="/stulogin">
                <div className="" style={{marginLeft:"30px"}}>
                   <img src={StudentIMage} alt="StudentIMage" style={{height:"250px",width:"250px"}} />
               
                    <h3 style={{textDecoration:"none",fontFamily:"Oswald",color:"white",textAlign:"center",fontWeight:"bold"}}>Signin as  Student</h3> 
                </div>
                </Link> 
                
                <Link className="link_class" to="/teclogin" >
                <div className="" style={{marginLeft:"30px"}}>
                   <img src={TeacherImage} alt="StudentIMage" style={{height:"250px",width:"250px"}} />
                  
                   <h3 style={{textDecoration:"none",fontFamily:"Oswald",color:"white",textAlign:"center",fontWeight:'bold'}}>Signin as  Teacher</h3>
                </div>
                </Link>
            </div>
            </div>
            
        </div>
    );
};

export default Landing;
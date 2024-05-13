import React from 'react'
import "../css/services.css"
import intdesign from "../images/services/intdesign.jpg"
import projectmanagement from "../images/services/projectmanagement.jpg"
import arch from "../images/services/arch.jpeg"
import intstyling from "../images/services/interiorstyling.jpg"


export default function Services() {
  const intdesignimg = intdesign;
  const projectmanagementimg = projectmanagement;
  const archimg = arch;
  const intstylingimg = intstyling;


  return (
    <div style={{margin:"14px"}}>
    <div className="row">
  <div className="column containerr" >
    <div className="iconed-box-content">
<h5 className='uppercase'> INTERIOR DESIGN</h5>
<p></p>
<p style={{textAlign:"center"}}> <span style={{color:"#999999", lineHeight:"21px"}}>
Interior design for Offices, Retail, Education, Hospitality & Residential.
    </span></p>
    </div>
  </div>
  <div className="column containerr" >
   <img src={intdesignimg}
               style={{ maxWidth: '100%', height: 'auto', width: '100%' , marginTop:"0"}}

   />
  </div>
  <div className="column containerr">
  <div className="iconed-box-content">
<h5 className='uppercase'> PROJECT MANAGEMENT & ADVISORY</h5>
<p></p>
<p style={{textAlign:"center"}}> <span style={{color:"#999999", lineHeight:"21px"}}>
Project management services.
    </span></p>
    </div>
  </div>
<div className="column containerr" >
   <img src={projectmanagementimg}
               style={{ maxWidth: '100%', height: 'auto', width: '100%' , marginTop:"0"}}

   />
  </div>
  </div>
  <div className="row">

  <div style={{marginTop:"-3.1%"}}className="column containerr" >
   <img src={intstylingimg}
               style={{ maxWidth: '100%', height: 'auto', width: '100%' , marginTop:"0"}}

   />
   </div>
  <div className="column containerr" >
    <div className="iconed-box-content">
<h5 className='uppercase'> INTERIOR STYLING</h5>
<p></p>
<p style={{textAlign:"center"}}> <span style={{color:"#999999", lineHeight:"21px"}}>
Interior Styling services.
    </span></p>
    </div>
  </div>
 
  <div style={{marginTop:"-3.1%"}} className="column containerr" >
   <img src={archimg}
               style={{ maxWidth: '100%', height: 'auto', width: '100%' , marginTop:"0"}}

   />
   </div>
   
   
   <div className="column containerr" >
    <div className="iconed-box-content">
<h5 className='uppercase'> ARCHITECTURE</h5>
<p></p>
<p style={{textAlign:"center"}}> <span style={{color:"#999999", lineHeight:"21px"}}>
Architectural design services.
    </span></p>
    </div>
  </div>
   </div>
</div>
  )
}

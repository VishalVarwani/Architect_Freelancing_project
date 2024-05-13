import React from 'react'
import { Link } from 'react-router-dom'
import "../css/teams.css"
import ceo from "../images/teammembers/ceo.JPG"
import smita from "../images/teammembers/smita.jpeg"
import teammembers from "../images/teammembers/teammembers.jpeg"



export default function Teams() {
  const ceoImg = ceo;
  const smitaimg = smita;
  const teammembersimg = teammembers;

  return (
    <div>
      <h1 style={{
     textAlign: "center", /* Center align the text */
     fontSize: "3em", /* Increase font size */
    
     marginBottom: "100px", /* Decrease margin bottom for better spacing */
     textTransform: "uppercase", /* Convert text to uppercase */
     letterSpacing: "2px", /* Add letter spacing for a stylish look */
     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", /* Add a subtle text shadow for depth */
     fontFamily: "Arial, sans-serif", /* Use a sans-serif font for modern look */
     fontFamily: "'Roboto', sans-serif", /* Change the font family to Roboto */

     
      }}>Meet the Team</h1>
        <div className="teams-container">
      <div className="team-member">
        <div className="team-member-image">
        <img className="ceo" src={ceoImg} alt="CEO" />
        </div>
        <div className="team-member-details">
          <h2>C.E.O.</h2>
          <h3>Trupti Puranik</h3>
          <p>
          Trupti Puranik, born on January 21, 1971, in Thane, is a  renowned interior 
          designer known for her exceptional work in residential and commercial spaces.
            Specializing in modern and intuitive designs, she founded Studios Elements in 2014,
           quickly establishing it as a leading interior design firm. Trupti's passion for creating beautiful yet functional spaces led her to pioneer modular kitchens,
            making quality designs accessible to all. 
          </p>
          <p>With over 10,000 successful projects, her visionary leadership and commitment to excellence continue to inspire.</p>
        </div>
      </div>
      <div className="team-member-2">
        <div className="team-member-image">
        <img className="smita" src={smitaimg} alt="CEO" />
        </div>
        <div className="team-member-details">
          <h2>Chairman</h2>
          <h3>Smita Mam</h3>
          <p>
          Trupti Puranik, born on January 21, 1971, in Thane, is a  renowned interior 
          designer known for her exceptional work in residential and commercial spaces.
            Specializing in modern and intuitive designs, she founded Studios Elements in 2014,
           quickly establishing it as a leading interior design firm. Trupti's passion for creating beautiful yet functional spaces led her to pioneer modular kitchens,
            making quality designs accessible to all. 
          </p>
          <p>With over 10,000 successful projects, her visionary leadership and commitment to excellence continue to inspire.</p>
        </div>
      </div>
      {/* Add more team members here */}
      <h1 style={{
     textAlign: "center", /* Center align the text */
     fontSize: "3em", /* Increase font size */
    
     marginBottom: "100px", /* Decrease margin bottom for better spacing */
     textTransform: "uppercase", /* Convert text to uppercase */
     letterSpacing: "2px", /* Add letter spacing for a stylish look */
     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", /* Add a subtle text shadow for depth */
     fontFamily: "Arial, sans-serif", /* Use a sans-serif font for modern look */
     fontFamily: "'Roboto', sans-serif", /* Change the font family to Roboto */

     
      }}>OUR TALENTED TEAM</h1>
       <img className="teammembers" src={teammembersimg} alt="CEO" />
    </div>

     {/* <div style={{marginTop:"5%", marginLeft:"1%", marginRight:"1%"}} className="card-deck">
     <div  className="card 1">
      <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">       
 
      <div className='overlay'> 
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 

      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div>
  <div className="card 1">
  <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">          
 
      <div className='overlay'> 
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 

      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div>
  <div className="card 1">
  <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">       
 
      <div className='overlay'> 
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 

      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div>
  <div className="card 1">
  <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">           
 
      <div className='overlay'> 
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 

      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div>
  </div>      <div style={{marginTop:"5%", marginLeft:"1%", marginRight:"1%"}} className="card-deck">

  <div className="card 1">
  <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">        
      <div className='overlay'> 
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 

      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div>
  <div className="card 1">
  <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">          
      <div className='overlay'> 
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 

      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div>


  <div className="card 1">
  <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">           
 
      <div className='overlay'>
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 
 
      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div>
  <div className="card 1">
  <div className='containerr'> 
    <img className="card-img-top" src="https://beyonddesign.in/t43/wp-content/uploads/2019/02/alhadGore_sq-800x800.jpg" alt="Card image cap" />
    
    <div className="card-body">       
 
      <div className='overlay'> 
      <h5 style={{color:"white"}} className="card-title">Vishal Varwani</h5> 
      <p className="card-text">With an industry experience of over 29 years on various projects across India, he gives the rich knowledge base to the company. His role includes business development, strategy planning, process formation and handling day to day operations.</p>
    </div>
    </div>
    </div>
  </div> 
  </div> */}

  
 

  
      </div>
  )
}

import React, { Component } from 'react';
import Imagecomponent from './Imagecomponent'
import Navcomponent from './Navcomponent';

class Usercomponent extends Component {
    constructor(){
        super();
        this.state={
                name:"Quentin tarantino",
                description:"I am a software engineer with 3 years of experience....",
                image:"images.jpeg",
                location:"California",
                age:"28",
                skills:[
                   "Angular","reactjs","Javscript","Python","C++","Flask","Django",
                   "HTML","CSS","Dotnet",
                ]           
        }
    }

  render(){
      const lis=this.state.skills;
      const slis=lis.map((skill,index) => <p className="skill" key={index}>{skill}</p>)

  return (
    <div className="profile">
    <Navcomponent></Navcomponent>
    <Imagecomponent img={this.state.image} />
    <div className="content">
     <h2>{this.state.name}</h2>
     <p>{this.state.description}</p>
     <br></br>
     <p><u>Location</u></p>
     <h4>{this.state.location}</h4>
     <br></br>
     <p><u>Age</u></p>
     <h4>{this.state.age}</h4>
     <br></br>
     <p><u>Skills</u></p>
         {slis}
      </div>
    </div>
    
  );
 }
}

export default Usercomponent;

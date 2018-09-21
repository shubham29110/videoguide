import React from 'react';

class Courses extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          title: "",
          video_url: "",
          course:""
         
        };
        
      }

     
     


render(){
    return (
        <div className="container">
                <h2>
                    Course
                </h2>

                <h3>
                    Title
                </h3>
   
 
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/owsfdh4gxyc" 
                frameborder="0" allowfullscreen></iframe>

        </div>
    )
}
}


export default  Courses;
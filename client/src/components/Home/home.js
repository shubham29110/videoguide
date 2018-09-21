import React from 'react';
import { connect } from "react-redux";
import axios from "axios";


class Home extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          title: "",
          video_url: "",
          course:""
         
        };
        this.handleChangeField = this.handleChangeField.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
      }

     

      handleSubmit(e) {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { title, video_url } = this.state;
    
        
        return axios
        .post("/api/videoGuide", {
          title,
          video_url,
        })
        .then(res => onSubmit(res.data))
        .then(() => this.setState({ title: "", video_url: "",course:""}));
         
      }

      handleChangeField(key, event) {
        this.setState({
          [key]: event.target.value
        });
      }

render(){
    return (
        <div className="container">

           <div className="row">
               <form  className="col s12">
               <div className="input-field col s6">
                                     <input id="course" type="text"value={this.state.course} className="validate"
                                     onChange={event => this.handleChangeField("course", event)}/>
                                      <label htmlFor="course">Course</label>
                                     </div>
                   <div className="row">
                       <div className="input-field col s6">
                           <input  id="title" type="text" value={this.state.title} className="validate"
                           onChange={event => this.handleChangeField("title", event)}/>


                           <label htmlFor="title">Title</label>
                       </div>
                                    <div className="input-field col s6">
                                     <input id="video_url" type="text"value={this.state.video_url} className="validate"
                                     onChange={event => this.handleChangeField("video_url", event)}/>
                                      <label htmlFor="video_url">Video Url</label>
                                     </div>
                   </div>

                   <button className="btn waves-effect waves-light" type="submit" name="action" onClick={e=>this.handleSubmit(e)}>Submit
                    
                    <i className="material-icons right"></i>
                    </button>
               </form>
           </div>

        </div>
    )
}
}
const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch({ type: "SUBMIT_VIDEO", data })
  
  });

export default connect(null,mapDispatchToProps) (Home);
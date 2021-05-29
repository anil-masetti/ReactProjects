import { Component,setState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class PatientTest extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      file: null,
      
        model: "ResNet152",
        jwt_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImhzdWJyYW1hbmk0MiIsInBhc3N3b3JkIjoiaHN1YnJhbWFuaTQyIn0.btHVFSPvC8w_xfTgYU7qLHSECGxdZr_EEH7EYxaG2IA",
      
    };
    this.handleModelChange = this.handleModelChange.bind(this);  
    
  }
  handleXrayChange(e){
    let file=e.target.files[0];
    this.setState({ img_file: e.target.files[0] });
  }
  
  handleSymptomsChange(e){
    this.setState({ symptoms: e.target.value });
  }
  handleModelChange(e){
    this.setState({ model: e.target.value });
  }
  handleXraySubmit(){
    
    axios({
      url: "https://92e252ba1717.ngrok.io/disease/predictor",
      method: "post",
      
      data:this.state,

  })
  }
  
  
render(){
    return(
        <div style={{opacity:" 0.92",}}>
        <div className="jumbotron" id={"heading"} style={{filter: "blur(0px) hue-rotate(0deg) saturate(119%)",opacity:"1",margin: "0px",}}>
            <h1 className="text-white" style={{color: "#32373a",}}><strong>ML</strong> BASED COVID&nbsp; DETECTOR AND HELPER</h1>
        </div>
        <nav className="navbar navbar-light navbar-expand-md">
          <div className="container-fluid">
          <a className="navbar-brand" href={"#"}>
                <img src={"../assets/img/medical-report.png"} style={{width: "25px",margin: "5px",}}/>Test</a> 
            <a className="navbar-brand" href={"/patient/Applicationstatus"}>
                <img src={"../assets/img/Status_check.png"} style={{width: "25px",margin: "5px",}}/>Application Status</a>
            <a className="navbar-brand" href={"/patient/dashboard"}>
                <img src={"../assets/img/hospital-bed.png"} style={{width: "25px",margin:"5px",}}/>Beds Availability</a>
            <a className="navbar-brand" href={"/patient/login"}>
                <i className="fas fa-sign-out-alt"></i>Logout</a>
            <button className="navbar-toggler" data-toggle={"collapse"}><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            </div>
        </nav>
        <div className="container">
        <select name="DeepLmodel" id="DeepLmodel" onChange={this.handleModelChange}>
                                <option selected>Select Model</option>
                                <option value="ResNet152" >ResNet152</option>
                                <option value="DenseNet201">DenseNet201</option>
                                <option value="AlexNet">AlexNet</option>
                                <option value="VGG19">VGG19</option>
                            </select>
            <br /><br />
            <input
                          className="border rounded shadow-none"
                          type="text"
                          name="symptoms"
                          placeholder={"Enter Your Symptoms"}
                          defaultValue={() => this.state.symptoms}
                          onChange={(e) => this.handleSymptomsChange(e)}
                        />
                        <br /><br />
            <input type="file" name="xray"
             
            onChange={(e)=>this.handleXrayChange(e)
            }/>
            <br />
           {/* <img src={this.state.img_file} style={{width:"500px",height:"500px",}}/>*/}
            <br /><br />
           
           
            <br />
            <button className="btn text-center" type="button" style={{backgroundColor: "#f84242",width: "100px",margin: "15px",padding:"10px",marginLeft: "14em",marginBottom: "0px",marginRight:"0px",}} onclick={"move()"}
            onClick={(e)=>this.handleXraySubmit(e)}
            >Submit</button>
                
            <br /><br />
            <p hidden>Changes of covid : 80% </p>
            <Link to="/patient/dashboard" className="btn text-center" type="button" style={{backgroundColor: "#f84242",width:"250px",margin:"15px",padding: "10px",marginLeft: "10em",marginBottom: "20px",marginRight: "0px",}} >Search Available hospital-beds</Link>
            
    </div>

    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/bootstrap/js/bootstrap.min.js"></script>

</div>
        );
    }
    handleChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })
    }
  }
  export default PatientTest;
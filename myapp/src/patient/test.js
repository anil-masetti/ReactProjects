import { Component,setState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class PatientTest extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      file: null
    }    
    
  }
  handleXrayChange= event => {
    this.handleXrayChange = this.handleXrayChange.bind(this);
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ file: URL.createObjectURL(event.target.files[0])})
  
  };
  handleXraySubmit(){
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile);
    axios({
      url: "https://92e252ba1717.ngrok.io/disease/predictor",
      method: "post",
      
      data:this.state

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
        <select name="model" id="model">
                                <option selected>Select Model</option>
                                <option value="1" >ResNet152</option>
                                <option value="2">DenseNet201</option>
                                <option value="3">AlexNet</option>
                                <option value="4">VGG19</option>
                            </select>
            <br /><br />
            <input type="file" name="xray"
             
            onChange={this.handleXrayChange}/>
            <br />
            <img src={this.state.file} style={{width:"500px",height:"500px",}}/>
            <br /><br />
           
           
            <br />
            <button className="btn text-center" type="button" style={{backgroundColor: "#f84242",width: "100px",margin: "15px",padding:"10px",marginLeft: "14em",marginBottom: "0px",marginRight:"0px",}} onclick={"move()"}
            onClick={(e)=>this.handleXraySubmit(e)}
            >Submit</button>
                
            <br /><br />
            <p hidden>Changes of covid : 80% </p>
            <button className="btn text-center" type="button" style={{backgroundColor: "#f84242",width:"250px",margin:"15px",padding: "10px",marginLeft: "10em",marginBottom: "20px",marginRight: "0px",}} onclick={""}>Search Available hospital-beds</button>
            
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
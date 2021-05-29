import { Component } from "react";
import { Link } from "react-router-dom";
class PatientApplicationstatus extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
render(){
    return(
        <div style={{opacity:" 0.92",}}>
        <div className="jumbotron" id={"heading"} style={{filter: "blur(0px) hue-rotate(0deg) saturate(119%)",opacity:"1",margin: "0px",}}>
            <h1 className="text-white" style={{color: "#32373a",}}><strong>ML</strong> BASED COVID&nbsp; DETECTOR AND HELPER</h1>
        </div>
        <nav className="navbar navbar-light navbar-expand-md">
          <div className="container-fluid">
          <a className="navbar-brand" href={"/patient/test"}>
                <img src={"../assets/img/medical-report.png"} style={{width: "25px",margin: "5px",}}/>Test</a> 
            <a className="navbar-brand" href={"#"}>
                <img src={"../assets/img/Status_check.png"} style={{width: "25px",margin: "5px",}}/>Application Status</a>
            <a className="navbar-brand" href={"/patient/dashboard"}>
                <img src={"../assets/img/hospital-bed.png"} style={{width: "25px",margin:"5px",}}/>Beds Availability</a>
            <a className="navbar-brand" href={"/patient/login"}>
                <i className="fas fa-sign-out-alt"></i>Logout</a>
            <button className="navbar-toggler" data-toggle={"collapse"}><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            </div>
        </nav>




    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
</div>
        );
    }
  }
  export default PatientApplicationstatus;
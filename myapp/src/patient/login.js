import { Component,setState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import  { Redirect } from 'react-router-dom'
import PatientDashboard from "./dashboard";

const base_url = "http://localhost:3000";
class PatientLogin extends Component {
  constructor(props) {
    super();
    this.props = props;
   
  }
  handleusernameChange(e) {
    this.setState({username: e.target.value});
 }
 handlepasswordChange(e) {
    this.setState({password: e.target.value});
 }
 

  handleLogin() {
   // console.log("Username: " + this.state.username);
    //console.log("Password: " + this.state.password);
    
      
      axios({
          url: "https://92e252ba1717.ngrok.io/patient/login/",
          method: "post",
          
          data:this.state

      })
      .then((resp)=>{
        if(resp.data.jwt_token=="invalid"){
          
          alert("Invalid Username/password");
        }
        else{
        console.log(resp.data);
        //return <Redirect to='/patient/dasbhoard'  />
       // <Link to={`/patient/dashboard`}></Link>
       // window.location.href('http://localhost:3000/patient/dashboard');
       <PatientDashboard dashboard={base_url + "/patient/dashboard"} ></PatientDashboard>
        }
      })
  
      /*(error)=>{
        console.log(error);
        t his.setState({isAuthenticated:false,response:"No Data Found..!!"})
      }*/
}
  render() {
    
    return (
      <form>
      <div className="jumbotron">
        <div className="card text-center"  style={{width:"55%",marginLeft:"300px",}}>
          <div className="card-body" style={{marginLeft:"-70px"}}>
            <div
              className="text-justify d-md-flex justify-content-md-center align-items-md-center"
              style={{
                width: "800px",
                height: "400",
              }}
            ></div>
            <div className="container text-left" style={{marginLeft: "8em",}}>
              <div className="row">
                <div className="col-md-12" style={{marginBottom: "25px",}}>
                  <input
                    className="form-control-plaintext"
                    type="text"
                    
                    value={"ML Based Covid Detector and Helper"}
                    readOnly={""}
                    style={{fontSize: "39px",}}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col text-justify">
                  <div style={{width: "541px",paddingLeft:"7px",}}>
                    <p style={{fontSize: "25px",fontWeight: "bold",fontStyle: "normal",color: "#4f4847",paddingLeft: "10px"}}>
                      Login
                    </p>
                    <div
                      className="border rounded"
                      style={{backgroundColor: "#f5f5f5",padding: "10px",width: "629px",}}
                    >
                      <i
                        className="fa fa-user"
                        style={{color: "#989898",marginLeft: "15px",}}
                      ></i>
                      <input
                        className="border rounded"
                        type="text"
                        name="username"
                        placeholder={"Username"}
                        defaulValue={()=>this.state.username}
                        onChange={(e)=>this.handleusernameChange(e)}
                        style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "565px",}}
                      />
                    </div>
                    <div
                      className="border rounded"
                      style={{backgroundColor: "#f5f5f5",padding: "10px",marginTop: "15px",width: "629px",}}
                    >
                      <i
                        className="fa fa-lock"
                        style={{color: "#989898",marginLeft:"15px"}}
                      ></i>
                      <input
                        className="border rounded shadow-none"
                        type="password"
                        name="password"
                        placeholder={"password"}
                        defaultValue={()=>this.state.password}
                        onChange={(e)=>this.handlepasswordChange(e)}
                        style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "565px"}}
                      />
                    </div>
                  </div>
                  <button
                    className="btn text-center"
                    type="button"
                    style={{backgroundColor:"#f84242",width: "627px",margin: "15px",padding:"10px",marginLeft: "8px",marginBottom: "0px",marginRight: "0px",}}
                    onClick={(e)=>this.handleLogin(e)}
                    >
                    LOGIN
                  </button>
                  <div style={{width: "543px"}}>
                    <p
                      className="text-center"
                      style={{marginTop: "10px",backgroundColor: "#ffffff",width: "633px"}}
                    >
                      don't have account ?&nbsp;
                      <a className="text-center" href={"/patient/signup"}>
                        SignUp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="../assets/js/jquery.min.js"></script>
        <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
       
      </div>
      </form>
      );
            }
           
  }


export default PatientLogin;

import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
class PatientSignup extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  handleMailidChange(e){
      this.setState({email:e.target.value});
  }
  handleUsernameChange(e){
      this.setState({username:e.target.value});
  }
  handleNameChange(e){
      this.setState({name:e.target.value});
  }
  handlePhChange(e){
      this.setState({phone:e.target.value});
  }
  handlePincodeChange(e){
      this.setState({pincode: e.target.value});
  }
  handleAddressChange(e){
      this.setState({address: e.target.value});
}
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
 }
 handleLogin() {
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
    console.log("phone: ",this.state.phone);
    /*axios.post('https://e2b386866d7f.ngrok.io/patient/signup/',this.state)
    .then(response => 
      console.log(response)
      );*/
 }
render(){
    return(
        <div className="container" id={"signup"}>
        <div className="jumbotron">
           <div className="card text-center">
               <div className="card-body">
                <div className="d-xl-flex">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto col-md-12">
                                <div>
                                    <p style={{fontWeight: "normal",fontSize: "25px",}}><strong>SignUp</strong></p>
                                </div>
                                <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                    <i className="fa fa-envelope" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="text" name="email"  style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"MailID"}
                                        defaulValue={()=>this.state.email}
                                        onChange={(e)=>this.handleMailidChange(e)}
                                        /></div>
                              <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                    <i className="fa fa-user" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="text" name="username"  style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"Username"}
                                        defaulValue={()=>this.state.username}
                                        onChange={(e)=>this.handleUsernameChange(e)}
                                        /></div>          
                            <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                    <i className="fa fa-user" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="text" name="name"   style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"Name"}
                                        defaulValue={()=>this.state.name}
                                        onChange={(e)=>this.handleNameChange(e)}
                                        /></div>
                            <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                    <i className="fa fa-phone" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="text" name="phone" style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"Phone number"}
                                        defaulValue={()=>this.state.phone}
                                        onChange={(e)=>this.handlePhChange(e)}
                                        /></div>  
                            <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                    <i className="fa fa-home" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="text" name="address"  style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"Address"}
                                        defaulValue={()=>this.state.address}
                                        onChange={(e)=>this.handleAddressChange(e)}
                                        /></div> 
                            <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                    <i className="icon-location-pin" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="text" name="pincode"  style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"Pincode"}
                                        defaulValue={()=>this.state.pincode}
                                        onChange={(e)=>this.handlePincodeChange(e)}
                                        /></div>                          
                            <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                    <i className="fa fa-lock" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="password" name="password"  style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"password"}
                                        defaulValue={()=>this.state.password}
                                        onChange={(e)=>this.handlePasswordChange(e)}
                                        /></div> 

                
                            <div className="border rounded" style={{backgroundColor: "#f5f5f5",padding: "10px",width: "543px",marginBottom: "15px",}}>
                                     <i className="fa fa-lock" style={{color: "#989898",marginLeft: "15px",}}></i>
                                <input className="border rounded" type="password" name="cpassword" style={{color: "#989898",marginLeft: "10px",backgroundColor: "#f5f5f5",width: "480px",}}
                                        placeholder={"confirm password"}
                                        defaulValue={()=>this.state.cpassword}
                                        /></div> 

                        <button
                            className="btn text-center" type="button" style={{backgroundColor: "rgb(248,66,66)",width: "543px",margin: "15px",padding: "10px",marginLeft: "0px",marginBottom: "0px",marginRight: "0px",}}
                            onClick={(e)=>this.handleLogin(e)}>SIGNUP</button>
                            <div style={{width: "543px"}}>
                            <p className="text-center"  style={{marginTop: "10px",backgroundcolor: "#ffffff"}}>Already have a account? &nbsp;<a className="text-center" href={"/patient/login"}>Login here </a></p>
                            
                            </div>
                            </div>
                            </div>
                            </div>
               </div>
             </div>
        </div>
    </div>

    
    
                <script src="../assets/js/jquery.min.js"></script>
                <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
</div>
                );
  }
}
export default PatientSignup;
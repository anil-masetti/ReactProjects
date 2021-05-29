import { Component,setState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { withStyles} from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles/';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const PatientDashboard = () => {
  
  const classes = useStyles();
  const [beds, setbeds] = useState([]);
  const [no_of_beds, setno_of_beds] = useState("");
  const [count, setCount] = useState(1);

  const getBedsData = async () => {
    try {
      const data = await axios.get(
       "https://92e252ba1717.ngrok.io/patient/bed_availability/"
      );
      console.log(data.data);
      setbeds(data.data);
    } catch (e) {
      console.log(e);
    }
   
    this.increment = this.increment.bind(this)
  };
  useEffect(() => {
    getBedsData();
  }, [])
  
 

    return(

        <div style={{opacity:" 0.92",}}>
        <div className="jumbotron" id={"heading"} style={{filter: "blur(0px) hue-rotate(0deg) saturate(119%)",opacity:"1",margin: "0px",}}>
            <h1 className="text-white" style={{color: "#32373a",}}><strong>ML</strong> BASED COVID&nbsp; DETECTOR AND HELPER</h1>
        </div>
        <nav className="navbar navbar-light navbar-expand-md">
          <div className="container-fluid">
          <a className="navbar-brand" href={"/patient/test"}>
                <img src={"../assets/img/medical-report.png"} style={{width: "25px",margin: "5px",}}/>Test</a> 
            <a className="navbar-brand" href={"/patient/applicationstatus"}>
                <img src={"../assets/img/Status_check.png"} style={{width: "25px",margin: "5px",}}/>Application Status</a>
            <a className="navbar-brand" href={""}>
                <img src={"../assets/img/hospital-bed.png"} style={{width: "25px",margin:"5px",}}/>Beds Availability</a>
            <a className="navbar-brand" href={"/patient/login"}>
                <i className="fas fa-sign-out-alt"></i>Logout</a>
            <button className="navbar-toggler" data-toggle={"collapse"}><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            </div>
        </nav>
        <div className="container">
         <div className="jumbotron">
            <div className="card text-center">
                <div className="card-body">
                            
                <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell align="center">SNo</StyledTableCell>
            <StyledTableCell align="center">Available Bed Number</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {beds
              .filter((item) => {
                if (no_of_beds == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(no_of_beds.toLowerCase())
                ) {
                  return item;
                }
              })
           
              .map((item) => {
                return (
              /*Item=beds*/
                  <StyledTableRow key={item.id}>
                      <StyledTableCell component="th" scope="row">
                      {this.state.count}
                      { this.state.count++}
                   
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.number}
                    </StyledTableCell>
                  
                    <StyledTableCell align="right">
                    <button className="btn btn-success">Request</button>
                    </StyledTableCell>
                    
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
                </div>
              </div>
         </div>
     </div>
    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
</div>
        );
    
  }
  export default PatientDashboard;
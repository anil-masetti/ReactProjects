import axios from "axios";
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

//import { validateAll } from 'indicative'

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

const Retirvetable = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await axios.get(
       ""
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, [])
  return (
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
    

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Product Brand</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Product Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                      <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.brand}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.price}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Retirvetable;
import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <div>
        <div style={{ opacity: 0.92 }}>
          <div className="jumbotron" id="heading" style={{ margin: "0px" }}>
            <h1 className="text-white" style={{ color: "#32373a" }}>
              <strong>ML</strong> BASED COVID&nbsp; DETECTOR AND HELPER
            </h1>
          </div>
        </div>
        <div
          className="d-xl-flex justify-content-xl-center align-items-xl-center"
          id="alig-1"
          style={{
            padding: "100px 0px",
            margin: "15px 303px",
            width: "1041px",
            height: "377px",
          }}
        >
          <div className="col-md-6">
            <a
              className="btn btn-primary btn-lg border-danger"
              role="button"
              style={{
                backgroundColor: "#0b0b0b",
                width: "300px",
                color: "#ffffff",
                margin: "0px",
              }}
              href={this.props.patient}
            >
              <strong>USER</strong>
            </a>
          </div>
          <div
            className="container"
            style={{
              padding: "-110px",
              width: "817px",
              height: "54px",
            }}
          >
            <div className="row">
              <div className="col">
                <a
                  className="btn btn-primary btn-lg border-danger"
                  role="button"
                  style={{
                    backgroundColor: "#0b0b0b",
                    width: "300px",
                  }}
                  href={this.props.admin}
                >
                  <strong>ADMIN</strong>
                </a>
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
export default Home;

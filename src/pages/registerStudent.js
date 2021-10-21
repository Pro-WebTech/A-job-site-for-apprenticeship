import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Header from "../layout/header";

class RegisterStudent extends React.Component {
  state = {
    fname: {
      value: "Mark",
      valid: true
    },
    lname: {
      value: "Otto",
      valid: true
    },
    email: {
      value: "",
      valid: false
    },
    city: {
      value: "",
      valid: false
    },
    state: {
      value: "",
      valid: false
    },
    zip: {
      value: "",
      valid: false
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };

  render() {
    return (
      <div>
          <Header/>
        <form>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname.value}
                className={this.state.fname.valid ? "is-valid" : "is-invalid"}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid name!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname.value}
                className={this.state.lname.valid ? "is-valid" : "is-invalid"}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid last name!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.email.value}
                className={this.state.email.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.city.value}
                className={this.state.city.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.state.value}
                className={this.state.state.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="state"
                label="State"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.zip.value}
                className={this.state.zip.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="zip"
                label="Zip"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBInput
              type="checkbox"
              value="conditions"
              id="materialInvalidCheck"
              required
              label="Agree to terms and conditions"
            >
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </MDBInput>
          </MDBRow>
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default RegisterStudent;
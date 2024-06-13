import React, { useState } from "react";
import "../Styles/signup.css";
import { Link } from "react-router-dom";
import login from "../Assets/login.jpg";
import React, { useState } from "react";
import "../Styles/signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import login from "../Assets/login.jpg";

function SignupPage() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    otp: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formValues.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formValues.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formValues.contact) {
      errors.contact = "Contact info is required";
    }
    if (!formValues.otp) {
      errors.otp = "OTP is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  return (
    <div className="signup_home">
      <div className="signup_home1">
        <div style={{ width: "60%" }}>
          <form
            onSubmit={handleSubmit}
            style={{ width: "70%", paddingLeft: "20%", paddingTop: "10px" }}
          >
            <h1 className="signup">Create an account</h1>

            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && (
                <span className="error">{formErrors.firstName}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && (
                <span className="error">{formErrors.lastName}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <span className="error">{formErrors.email}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              {formErrors.password && (
                <span className="error">{formErrors.password}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {formErrors.confirmPassword && (
                <span className="error">{formErrors.confirmPassword}</span>
              )}
            </div>

            <div style={{ display: "flex" }}>
              <div className="form-group" style={{ marginRight: "10px" }}>
                <input
                  type="text"
                  name="contact"
                  className="form-control"
                  placeholder="Contact Info"
                  value={formValues.contact}
                  onChange={handleChange}
                />
                {formErrors.contact && (
                  <span className="error">{formErrors.contact}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="otp"
                  className="form-control"
                  placeholder="Enter OTP"
                  value={formValues.otp}
                  onChange={handleChange}
                />
                {formErrors.otp && (
                  <span className="error">{formErrors.otp}</span>
                )}
              </div>
            </div>

            <div
              className="form-group form-check"
              style={{ marginTop: "-10px" }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>

            <div style={{ marginTop: "-7px", marginBottom: "13px" }}>
              Don't have an account?{" "}
              <Link to="/login" style={{ color: "blue" }}>
                Sign in?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div style={{ marginTop: "30px" }}>
          <img className="img_signup" src={login} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

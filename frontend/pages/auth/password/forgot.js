import { useState } from "react";
import Layout from "../../../components/Layout";
import { forgotPassword } from "../../../actions/auth";
import ForgotPassword from '../../../components/auth/ForgotPassword/ForgotPassword';

const ForgotPasswordPage = () => {
  const [values, setValues] = useState({
    email: "",
    message: "",
    error: "",
    showForm: true,
  });

  const { email, message, error, showForm } = values;

  const handleInputChange = (name) => (e) => {
    setValues({ ...values, message: "", error: "", [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, message: "", error: "" });
    forgotPassword({ email }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          message: data.message,
          email: "",
          showForm: false,
        });
      }
    });
  };

  const showErrorMessage = () =>
    error ? <div className="forgot-password__error">{error}</div> : "";
  const showSuccessMessage = () =>
    message ? <div className="forgot-password__success">{message}</div> : "";

  // const passwordForgotForm = () => (
  //   <form onSubmit={handleSubmit}>
  //     <div className="form-group pt-5">
  //       <input
  //         type="email"
  //         onChange={handleChange("email")}
  //         className="form-control"
  //         value={email}
  //         placeholder="Type your email"
  //         required
  //       />
  //     </div>
  //     <div>
  //       <button className="btn btn-primary">Send password reset link</button>
  //     </div>
  //   </form>
  // );

  return (
    <Layout>
      {/* <div className="container">
        <h2>Forgot password</h2>
        <hr />
        {showErrorMessage()}
        {showSuccessMessage()}
        {showForm && passwordForgotForm()}
      </div> */}
      <ForgotPassword
        email={email}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        showSuccessMessage={showSuccessMessage}
        showErrorMessage={showErrorMessage}
      />
    </Layout>
  );
};

export default ForgotPasswordPage;

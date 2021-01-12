import { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../../../../components/Layout";
import PasswordReset from "../../../../components/auth/PasswordReset/PasswordReset";
import { resetPassword } from "../../../../actions/auth";

const ResetPassword = ({ router }) => {
  const [values, setValues] = useState({
    name: "",
    newPassword: "",
    error: "",
    message: "",
    showForm: true,
  });

  const { showForm, name, newPassword, error, message } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword({
      newPassword,
      resetPasswordLink: router.query.id,
    }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          showForm: false,
          newPassword: "",
        });
      } else {
        setValues({
          ...values,
          message: data.message,
          showForm: false,
          newPassword: "",
          error: false,
        });
      }
    });
  };

  const handleInputChange = (value) => (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  // const passwordResetForm = () => (
  //   <form onSubmit={handleSubmit}>
  //     <div className="form-group pt-5">
  //       <input
  //         type="password"
  //         onChange={(e) =>
  //           setValues({ ...values, newPassword: e.target.value })
  //         }
  //         className="form-control"
  //         value={newPassword}
  //         placeholder="Type new password"
  //         required
  //       />
  //     </div>
  //     <div>
  //       <button className="btn btn-primary">Change password</button>
  //     </div>
  //   </form>
  // );

  const showErrorMessage = () =>
    error ? <div className="password-reset__error">{error}</div> : "";
  const showSuccessMessage = () =>
    message ? <div className="password-reset__success">{message}</div> : "";

  return (
    <Layout>
      {/* <div className="container">
        <h2>Reset password</h2>
        <hr />
        {showErrorMessage()}
        {showSuccessMessage()}
        {passwordResetForm()}
      </div> */}
      <PasswordReset
        newPassword={newPassword}
        showSuccessMessage={showSuccessMessage}
        showErrorMessage={showErrorMessage}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default withRouter(ResetPassword);

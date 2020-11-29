import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

function SignIn() {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">SignIn</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;

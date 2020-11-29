import Private from "../../components/auth/Private";
import Layout from "../../components/Layout";

function UserIndex() {
  return (
    <Layout>
      <Private>
        <h2>User DashBoard</h2>
      </Private>
    </Layout>
  );
}

export default UserIndex;

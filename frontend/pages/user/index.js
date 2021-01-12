import Layout from "../../components/Layout";
import Private from "../../components/auth/Private/Private";
import UserDashboard from "../../components/UserDashboard/UserDashboard";

const UserPage = () => (
  <Layout>
    <Private>
      <UserDashboard />
    </Private>
  </Layout>
);

export default UserPage;

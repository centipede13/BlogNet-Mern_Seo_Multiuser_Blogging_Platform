import Admin from "../../components/auth/Admin";
import Layout from "../../components/Layout";
import Link from "next/link";

function AdminIndex() {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>Admin DashBoard</h2>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Category/Tag</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Tag</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">Right</div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}

export default AdminIndex;

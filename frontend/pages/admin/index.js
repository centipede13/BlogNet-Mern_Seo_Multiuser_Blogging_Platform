import Admin from "../../components/auth/Admin";
import Layout from "../../components/Layout";
// import Link from "next/link";
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard'

function AdminIndex() {
  return (
    <Layout>
      <Admin>
        {/* <div className="container">
          <div className="row">
            <div className="form_banner col-md-12 pt-5 pb-5">
              <h2 className="form_title">Admin DashBoard</h2>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Category</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Tag</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/admin/crud/blog">
                    <a>Create Blog</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/admin/crud/blogs">
                    <a>Update/Delete Blog</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/user/update">
                    <a>Update Profile</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-4">
                <section>
                  <img
                    className="img img-fluid icon"
                    src="/images/dashboard-icons/category.svg"
                    alt="Create Category"
                  />
                </section>
              </div>
              <div className="col-md-8">
                <section>
                  <Link href="/admin/crud/category-tag">
                    <a>Create Category</a>
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </div> */}
        <AdminDashboard />
      </Admin>
    </Layout>
  );
}

export default AdminIndex;

import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Layout from "../../../components/Layout";
import Link from "next/link";


function CategoryTag() {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>Manage Categories and Tags</h2>
            </div>
            <div className="col-md-6">
              <Category />
            </div>
            <div className="col-md-6">
              <p>Tags</p>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}

export default CategoryTag;

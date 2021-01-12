import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import ReadBlogs from '../../../components/crud/ReadBlogs/ReadBlogs';

const Blogs = () => {
  return (
    <Layout>
      <Admin>
        <ReadBlogs />
      </Admin>
    </Layout>
  );
};

export default Blogs;
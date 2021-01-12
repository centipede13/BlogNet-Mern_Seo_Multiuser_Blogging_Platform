import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import CategoriesAndTags from '../../../components/crud/CategoriesAndTags/CategoriesAndTags';

const CategoryTag = () => (
  <Layout>
    <Admin>
      <CategoriesAndTags />
    </Admin>
  </Layout>
);

export default CategoryTag;
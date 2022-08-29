import Login from 'components/forms/Login/Login';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '../_page';

const LoginPage: NextPageWithLayout = () => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};

import Register from 'components/forms/Register/Register';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '../_page';

const RegisterPage: NextPageWithLayout = () => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;

RegisterPage.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};

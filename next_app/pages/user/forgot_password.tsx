import ForgotPassword from 'components/forms/ForgotPassword/ForgotPassword';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '../_page';

const ForgotPasswordPage: NextPageWithLayout = () => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <ForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

ForgotPasswordPage.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};

import Success from 'components/info/Success/Success';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '../_page';

const SuccessPage: NextPageWithLayout = () => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <Success message={'Registration was successful! Welcome to the site'} />
      </div>
    </div>
  );
};

export default SuccessPage;

const link = (
  // eslint-disable-next-line @next/next/no-page-custom-font
  <link
    href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap"
    rel="stylesheet"
  ></link>
);

SuccessPage.getLayout = (page) => {
  return (
    <PrimaryLayout link={link}>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};

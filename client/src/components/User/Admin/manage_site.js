import React from 'react';
import UserLayout from '../../../hoc/user';
import UpdateSiteNfo from './update_site_nfo';

const ManageSite = (props) => {
  return (
    <UserLayout>
      <UpdateSiteNfo/>
    </UserLayout>
  );
};

export default ManageSite;

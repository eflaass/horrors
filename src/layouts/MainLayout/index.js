import React from 'react';
import Header from '../../../components/Header';
import Dashboard from '../../../components/Dashboard';
import Sidebar from '../../../components/Sidebar';
import * as UI from './styles';

const DashboardLayout = () => {
  return (
    <UI.Wrapper>
      <Header />
      <Sidebar />
      <Dashboard />
    </UI.Wrapper>
  )
}

export default DashboardLayout;
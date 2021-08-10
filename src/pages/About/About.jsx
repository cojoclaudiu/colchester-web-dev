import React from 'react';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import AboutSidebar from '../../components/AboutSidebar/AboutSidebar';
import AboutContent from '../../components/AboutContent/AboutContent';

export default function About() {
  return (
    <Layout>
      <Header title="I am applying for the role of Web Developer at Colchester Borough Council." />
      <Main>
        <AboutContent />
      </Main>
      <Sidebar>
        <AboutSidebar />
      </Sidebar>
    </Layout>
  );
}

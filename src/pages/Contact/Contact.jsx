import React from 'react';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import ContactForm from 'components/ContactForm/ContactForm';
import Sidebar from 'components/Sidebar/Sidebar';
import FindMeBox from 'components/FindMeBox/FindMeBox';
import SocialMediaBox from 'components/SocialMediaBox/SocialMediaBox';
import MapBox from 'components/MapBox/MapBox';

export default function Contact() {
  return (
    <Layout>
      <Header title="Send me a message" />
      <Main>
        <ContactForm />
      </Main>
      <Sidebar>
        <MapBox />
        <FindMeBox />
        <SocialMediaBox />
      </Sidebar>
    </Layout>
  );
}

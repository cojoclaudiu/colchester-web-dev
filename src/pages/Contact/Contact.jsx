import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';
import MapImg from '../../components/Icons/MapImg';
import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Contact() {
  return (
    <Layout>
      <Header title="Send me a message" />
      <Main>
        <ContactForm />
      </Main>
      <Sidebar>
        <MapImg />
      </Sidebar>
    </Layout>
  );
}

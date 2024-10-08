import Head from 'next/head';
import { GetStaticProps } from 'next';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import TopLinks from '@/components/topLinks';
import LinkDirectory from '@/components/linkDirectory';

export default function Home() {
  return (
    <>
      <Head>
        <title>HasanAbi Community Hub</title>
        <meta name="description" content="Navigate HasanAbi community resources" />
      </Head>
      <div className="bg-scanlines bg-custom-purple min-h-screen">
        <PageHeader>HasanAbi Community Hub</PageHeader>
        <TopLinks />

        <LinkDirectory />

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

import Head from 'next/head';
import React from 'react';
import { GetStaticProps } from 'next';

import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import TopLinks from "@/components/topLinks";
import Link from 'next/link';

const domainData = [
  ['has.tax', '$9', '(for first year)'],
  ['has.ceo', '$10', '($100 after 1 year I think)'],
  ['has.vote', '$12', ''],
  ['has.bz', '$22', ''],
  ['has.news', '$30', ''],
  ['has.vc', '$33', ''],
  ['has.pet', '$35', ''],
  ['has.cash', '$43', ''],
  ['has.pub', '$56', ''],
  ['has.fm', '$70', '(then $100)'],
  ['has.fan', '$76', ''],
  ['has.bio', '$105', ''],
  ['has.deal', '$130', ''],
  ['has.video', '$130', ''],
  ['has.cm', '$140', ''],
  ['has.guru', '$250', ''],
  ['has.film', '$250', ''],
  ['has.land', '$260', ''],
  ['has.media', '$300', ''],
  ['has.rich', '$3500', '']
];

const DomainExamples: React.FC<{ baseDomain: string, showHttps?: boolean }> = ({ baseDomain, showHttps = false }) => (
  <div>
    <Link href="#" className="text-blue-400 hover:underline mr-2">
      {showHttps ? 'https://' : ''}tt.{baseDomain}
    </Link>
    <Link href="#" className="text-blue-400 hover:underline mr-2">
      {showHttps ? 'https://' : ''}tiktok.{baseDomain}
    </Link>
    <Link href="#" className="text-blue-400 hover:underline mr-2">
      {showHttps ? 'https://' : ''}{baseDomain}/tt
    </Link>
    <Link href="#" className="text-blue-400 hover:underline">
      {showHttps ? 'https://' : ''}{baseDomain}/tiktok
    </Link>
  </div>
);

const ShortDomain: React.FC = () => {
  return (
    <>
      <Head>
        <title>HasanAbi Community Hub</title>
        <meta name="description" content="Navigate HasanAbi community resources" />
      </Head>
      <div className="bg-scanlines bg-custom-purple">
        <PageHeader>HasTok Domains</PageHeader>
        <TopLinks />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="text-left">Domain</th>
                <th className="text-left">Price</th>
                <th className="text-left">Additional Info</th>
                <th className="text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              {domainData.map(([domain, price, info], index) => {
                return (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2">{domain}</td>
                    <td className="py-2">{price}</td>
                    <td className="py-2">{info}</td>
                    <td className="py-2">
                      <DomainExamples baseDomain={domain} />
                      <br />
                      <DomainExamples baseDomain={domain} showHttps={true} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default ShortDomain;

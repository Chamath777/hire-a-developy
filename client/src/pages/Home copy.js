import React from 'react';
import { useQuery } from '@apollo/client';

import InquiryList from '../components/InquiryList';
import InquiryForm from '../components/InquiryForm';

import { QUERY_INQUIRIES, QUERY_USER, } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_INQUIRIES);
  const inquiry = data?.inquiry || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <InquiryForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <InquiryList
              inquiry={inquiry}
              title="Some Feed for Inquiry(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;


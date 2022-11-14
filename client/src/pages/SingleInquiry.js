import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_INQUIRY } from '../utils/queries';

const SingleInquiry = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { inquiryId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_INQUIRY, {
    // pass URL parameter
    variables: { inquiryId: inquiryId },
  });

  const inquiry = data?.inquiry || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {inquiry.inquiryAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          made this profile on {inquiry.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {inquiry.inquiryText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={inquiry.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm inquiryId={inquiry._id} />
      </div>
    </div>
  );
};

export default SingleInquiry;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_INQUIRY } from '../../utils/mutations';
import { QUERY_INQUIRIES, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const InquiryForm = () => {
  const [inquiryText, setInquiryText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addInquiry, { error }] = useMutation(ADD_INQUIRY, {
    update(cache, { data: { addInquiry } }) {
      try {
        const { inquiry } = cache.readQuery({ query: QUERY_INQUIRIES });

        cache.writeQuery({
          query: QUERY_INQUIRIES,
          data: { inquiry: [addInquiry, ...inquiry] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, inquiry: [...me.inquiry, addInquiry] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addInquiry({
        variables: {
          inquiryText,
          inquiryAuthor: Auth.getProfile().data.username,
        },
      });

      setInquiryText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'inquiryText' && value.length <= 280) {
      setInquiryText(value);
      setCharacterCount(value.length);
    }
  };
// Inquiry form
  return (
    <div>
      <h3>Want to go a head with a Developer?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="inquiryText"
                placeholder="Your inquiry appear here..."
                value={inquiryText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add 
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to hire a developer. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default InquiryForm;

import React from 'react';
import { Link } from 'react-router-dom';

const InquiryList = ({
  inquiry,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!inquiry.length) {
    return <h3>Your inquiries appear here!</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {inquiry &&
        inquiry.map((inquiry) => (
          <div key={inquiry._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${inquiry.inquiryAuthor}`}
                >
                  {inquiry.inquiryAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    made this profile on {inquiry.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You have inquired {inquiry.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{inquiry.inquiryText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/inquiry/${inquiry._id}`}
            >
                Inquire here!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default InquiryList;

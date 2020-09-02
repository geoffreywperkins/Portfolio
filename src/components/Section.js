import React from 'react';
import classnames from 'classnames';

const Section = ({sectionId, children}) => {
  const isHeader = sectionId === 'header';
  const isAbout = sectionId === 'about';
  const isContact = sectionId === 'contact';

  return (
    <div
      className={classnames('content-section', {
        'header-section': isHeader,
        'about-section': isAbout,
        'contact-section': isContact
      })}
      id={sectionId}
    >
      {children}
    </div>
  )
}

export default Section;
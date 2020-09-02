import React from 'react';
import classnames from 'classnames';

const Section = ({sectionId, children}) => {
  const isHeader = sectionId === 'header';
  const isAbout = sectionId === 'about';

  return (
    <div
      className={classnames('content-section', {'header-section': isHeader, 'about-section': isAbout})}
      id={sectionId}
    >
      {children}
    </div>
  )
}

export default Section;
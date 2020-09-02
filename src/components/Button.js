import React from 'react';
import classnames from 'classnames';

const Button = ({type, text, link}) => {
  const onButtonClick = (event) => {
    if (link.startsWith('#')) {
      // Smooth scrolling
      event.preventDefault();
      const anchorTarget = document.getElementById(link.substring(1));
      if (anchorTarget) {
        const y = anchorTarget.getBoundingClientRect().top + window.pageYOffset - 70;
        console.log(y);
        window.scrollTo({ top: y, behavior: 'smooth'});
      }
    } // Else use default
  }

  const isNavbarButton = type === 'navbar';

  return (
    <div className={classnames({'btn-wrapper': !isNavbarButton})}>
      <a
        className={classnames('btn', isNavbarButton ? 'btn-navbar' : 'btn-primary')}
        href={link}
        onClick={onButtonClick}
      >
        {text}
      </a>
    </div>
  )
}

export default Button;
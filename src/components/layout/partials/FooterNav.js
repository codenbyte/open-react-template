import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    
    <nav
      {...props}
      className={classes}

    >    
      <ul className="list-reset">
        <li>
          <b to="#0">Contact Us</b>
        </li>
        <li>
          <Link to="#0">Phone: 773-699-1516</Link>
        </li>
        <li>
          <Link to="#0">Email: vieng.vongsakoun@goluminate.com</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
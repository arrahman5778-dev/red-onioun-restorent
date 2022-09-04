import React from 'react';

const Footer = () => {
  return (
    <div className=' container '>
      <p className=' text-center'>
      Copyright &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
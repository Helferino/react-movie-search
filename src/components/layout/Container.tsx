import React from 'react';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode
}

const Container = (props: Props) => {
  return (
    <div className='container'>
      <Navbar />

      {props.children}
    </div>
  );
}

export default Container;

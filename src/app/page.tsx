"use client";
import React from 'react';
import Image from "next/image";
import './globals.css';
import StackLogo from './assets/stackline_logo.svg?url';
import { Provider } from 'react-redux';
import  Graph from './graph';
import { store } from './store';
import Product from './product-info';

export default function Home() {
  return (
    <Provider store={store}>
      <header className="header">
          <Image className='header-logo' src={StackLogo} alt="alt" />
      </header>
      <div className='bodyWindow'>
        <div className='sidebar'>
          <div className='sidebar-content'>
            <Product />
          </div>
        </div>
        <Graph />
      </div>
    </Provider>
  );
}

import { AppProps } from 'next/app';
import React, { FC } from 'react';

import '../css/tailwind.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

'use client'

import ColorTheme from './ColorTheme';
import MainNav from './MainNav';

function ClientOnly({ children }) {
  return (
    <>
      <ColorTheme />
      <MainNav />
      {children}
    </>
  );
}

export default ClientOnly;
import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_self"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </div>
  );
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

interface HeaderProps {
  children: React.ReactNode;
  logo?: string;
}

const Link: FC<LinkProps> = ({ children, ...restProps }) => {
  return (
    <a className="App-link" {...restProps}>
      {children}
    </a>
  );
};

const Header: FC<HeaderProps> = ({ children, logo }) => {
  return (
    <header className="App-header">
      {logo ? (
        <img src={logo} className="App-logo" alt="logo" />
      ) : (
        'There is no logo available'
      )}

      {children}
    </header>
  );
};

export default App;

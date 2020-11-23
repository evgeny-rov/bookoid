import React from 'react';
import MainSection from '../components/containers/MainSection';
import Header from '../components/containers/Header';
import Navbar from '../components/Navbar';
import Toolbar from '../components/ToolBar';
import BookList from '../components/BookList';
import Appbar from '../components/Appbar';

const HomePage: React.FC = () => {
  return (
    <div className="bg-primary relative font-mono">
      <Header>
        <Navbar />
        <Toolbar />
      </Header>
      <MainSection>
        <BookList />
      </MainSection>
      <Appbar />
    </div>
  );
};

export default HomePage;

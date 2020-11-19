import React from 'react';
import Appbar from '../components/Appbar';
import BookList from '../components/BookList';
import MainSection from '../components/containers/MainSection';
import Navbar from '../components/Navbar';
import Toolbar from '../components/ToolBar';

const HomePage: React.FC = () => {
  return (
    <div className="absolute w-full h-full flex flex-col bg-primary font-mono overflow-hidden">
      <Navbar />
      <Toolbar />
      <MainSection>
        <BookList />
      </MainSection>
      <Appbar />
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import MainSection from '../components/containers/MainSection';
import Header from '../components/containers/Header';
import Navbar from '../components/Navbar';
import Toolbar from '../components/ToolBar';
import Library from '../components/Library';
import Appbar from '../components/Appbar';

const HomePage: React.FC = () => {
  const [renderGridView, setRenderGridView] = useState(true);

  return (
    <div className="bg-primary font-mono">
      <Header>
        <Navbar />
        <Toolbar
          renderGridView={renderGridView}
          setRenderGridView={setRenderGridView}
        />
      </Header>
      <MainSection>
        <Library renderGridView={renderGridView} />
      </MainSection>
      <Appbar />
    </div>
  );
};

export default HomePage;

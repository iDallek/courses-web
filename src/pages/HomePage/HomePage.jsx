import React from 'react';
import Header from '../../components/Header';

const HomePage = () => {
  const headerProps = {
    title: 'Cursos',
    buttons: [
      { label: '+ Adicionar', onClick: () => { console.log('Cursos'); } },
    ],
  };

  return (
    <main className="w-full" data-testid="HomePage">
      <Header props={headerProps} />
    </main>
  );
};

export default HomePage;

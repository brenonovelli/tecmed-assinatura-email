import React, { useState } from 'react';

import { Container } from './styles';
import GlobalStyles from './styles/global';

import Form from './components/Form';
import Preview from './components/Preview';

function App() {
  const [data, setData] = useState({
    name: 'Diogo Fialho',
    position: 'Locação - Manutenção',
    phone1: '21 994267306',
    phone2: '21 24251231',
    email: 'diogo@tecmed.com.br',
  });

  function handleBlur(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setData({ ...data, name: value });
        break;
      case 'position':
        setData({ ...data, position: value });
        break;
      case 'phone1':
        setData({ ...data, phone1: value });
        break;
      case 'phone2':
        setData({ ...data, phone2: value });
        break;
      case 'email':
        setData({ ...data, email: value });
        break;
      default:
        setData(data);
    }
  }

  return (
    <Container>
      <GlobalStyles />
      <Preview data={data} />
      <Form onChange={handleBlur} data={data} />
    </Container>
  );
}

export default App;

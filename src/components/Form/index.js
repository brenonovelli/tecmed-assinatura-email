import React from 'react';

import { Container } from './styles';
import Signature from '../Signature';

export default function Form({ onChange, data }) {
  return (
    <Container>
      <label htmlFor="name">
        <span>Nome:</span>
        <input
          type="text"
          name="name"
          onChange={onChange}
          defaultValue={data.name}
        />
      </label>
      <label htmlFor="position">
        <span>Posição:</span>
        <input
          type="text"
          name="position"
          onChange={onChange}
          defaultValue={data.position}
        />
      </label>
      <label htmlFor="email">
        <span>E-mail:</span>
        <input
          type="text"
          name="email"
          onChange={onChange}
          defaultValue={data.email}
        />
      </label>
      <label htmlFor="phone1">
        <span>Telefone 1:</span>
        <input
          type="text"
          name="phone1"
          onChange={onChange}
          defaultValue={data.phone1}
        />
      </label>
      <label htmlFor="phone2">
        <span>Telefone 2:</span>
        <input
          type="text"
          name="phone2"
          onChange={onChange}
          defaultValue={data.phone2}
        />
      </label>

      <Signature data={data} button />
    </Container>
  );
}

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;

  padding: 2rem;

  margin: 2rem auto;

  label {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 1rem;
    width: 100%;
    font-size: 0.875rem;
    align-items: center;
    margin-bottom: 0.5rem;

    span {
    }
    input {
      border-radius: 0.25rem;
      appearance: none;
      border: none;
      height: 3rem;
      padding: 0.5rem;
      border: 1px solid rgba(100, 100, 100, 0.2);
    }
  }

  button {
    background-color: #f60032;
    color: #ffffff;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    align-self: flex-end;
  }
`;

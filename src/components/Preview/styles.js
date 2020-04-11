import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  .browser-frame {
    width: 100%;

    .fakeHeader {
      max-width: 100%;
    }

    .content {
      padding: 1rem 2rem 1rem 5.5rem;

      p {
        line-height: 1.25;
        margin-bottom: 1rem;
        font-size: 14px;
      }
    }
  }
`;

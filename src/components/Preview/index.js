import React from 'react';
import BrowserFrame from 'react-browser-frame';

import Signature from '../Signature';
import fakeHeader from '../../assets/fakeHeader.jpg';

import { Container } from './styles';

export default function Preview({ data }) {
  return (
    <Container>
      <BrowserFrame url="https://webmail.tecmed.com.br/some-email">
        <img src={fakeHeader} alt="Fake Header" className="fakeHeader" />

        <div className="content">
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris
            qui num significa nadis i pareci latim. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio.
            Atirei o pau no gatis, per gatis num morreus.
          </p>
          <p>
            Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
            Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais
            interessantis. Não sou faixa preta cumpadi, sou preto inteiris,
            inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est.
          </p>
          <p>
            Mé faiz elementum girarzis, nisi eros vermeio. Si num tem leite
            então bota uma pinga aí cumpadi! Aenean aliquam molestie leo, vitae
            iaculis nisl. Cevadis im ampola pa arma uma pindureta.
          </p>
          <Signature data={data} />
        </div>
      </BrowserFrame>
    </Container>
  );
}

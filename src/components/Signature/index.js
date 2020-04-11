import React, { useRef } from 'react';
import copy from 'copy-to-clipboard';

import * as S from './styles';

export default function Signature({ data, button }) {
  const thisItem = useRef(null);

  function handleClick(e) {
    copy(thisItem.current.outerHTML);
    alert('Copiado!');
  }

  return (
    <>
      <div style={S.parent} ref={thisItem}>
        <div style={S.logoWrap}>
          <a
            href="http://www.tecmed.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.tecmed.com.br/email/assinatura/images/logo.png"
              alt="Tecmed"
              width="180"
              height="170"
            />
          </a>
        </div>
        <div style={S.content}>
          {data.name && <strong style={S.name}>{data.name}</strong>}

          {data.position && <span style={S.position}>{data.position}</span>}

          {data.email && <span style={S.email}>{data.email}</span>}

          <div style={S.tels}>
            {data.phone1 && <span style={S.tel}>{data.phone1}</span>}
            {data.phone2 && <span style={S.tel}>{data.phone2}</span>}
          </div>

          <a
            href="http://www.tecmed.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={S.site}
          >
            www.tecmed.com.br
          </a>
        </div>
        <div style={S.badgesWrap}>
          <img
            src="https://www.tecmed.com.br/email/assinatura/images/badges.png"
            alt="Selos"
            width="242"
            height="170"
          />
        </div>
      </div>
      {button && (
        <button type="button" onClick={handleClick} style={S.copyButton}>
          Copiar
        </button>
      )}
    </>
  );
}

import styled from 'styled-components';

type Props = {
     side: 'left' | 'right';
};

export const Container = styled.div<Props>`
     display: flex;
     height: 35px;
     justify-content: flex-start;
     align-items: center;
     width: 100%;
     font-family: ${({ side }) => (side === 'left' ? 'TahomaCustom' : 'SegoeUI')};
     transition: background-color 0.1s;

     h1 {
          font-size: 12px;
          font-weight: ${({ side }) => (side === 'left' ? 500 : 600)};
          color: ${({ side }) => (side === 'left' ? '#000' : '#304773')};
          line-height: 1.2;
     }

     img {
          width: 35px;
          height: 35px;
          max-height: 100%;
          max-width: 100%;
     }

     span {
          font-size: 10px;
          display: block;
          color: #c3c3c3;
     }

     &:hover {
          background-color: ${({ side }) => (side === 'left' ? '#d3e5fd' : '#f5f5f5')};
     }
`;

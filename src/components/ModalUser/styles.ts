import styled from 'styled-components';

type Props = {
     isOpen: boolean;
};

export const Container = styled.div<Props>`
     display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
     position: absolute;
     top: 47%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: #ffffff;
     border: 8px solid #1347ba;
     border-radius: 8px;
     width: 700px;
     height: 500px;
     color: #000;
     font-family: 'TahomaCustom';
`;

export const Header = styled.header`
     background-color: #1347ba;
     padding: 4px;
     display: flex;
     justify-content: space-between;

     h1 {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          color: #ffffff;
          line-height: 1.2;

          img {
               width: 20px;
               height: 20px;
               vertical-align: text-bottom;
          }
     }

     button {
          background-color: transparent;
          border: none;
          cursor: pointer;

          img {
               width: 23px;
               height: 23px;
               border-radius: 4px;
          }

          &:active {
               transform: scale(0.9);
          }
     }
`;

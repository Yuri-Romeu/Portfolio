import styled from 'styled-components';

type Props = {
     isVisible: boolean;
};

export const Container = styled.div<Props>`
     display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
     flex-direction: column;
     position: absolute;
     left: 0;
     bottom: 30px;
     height: 410px;
     width: 350px;
     padding: 2px 2px 2px 0;
     border-radius: 0 6px 6px 0;
     border-color: #1347ba;
     border: 1px solid rgba(39, 138, 250, 0.45);
     background: linear-gradient(180deg, #2b63d6), linear-gradient(180deg, #1347ba);
     box-shadow: var(0 6px 18px rgba(3, 15, 40, 0.45));
     font-family: 'TahomaCustom';
`;

export const Header = styled.div`
     display: flex;
     align-items: center;
     padding: 5px;
     gap: 10px;

     h1 {
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          line-height: 1.2;
     }

     img {
          width: 50px;
          height: 50px;
          border: 1px solid #fff;
          border-radius: 3px;
     }
`;

export const Main = styled.div`
     background-color: #ffffff;
     height: 78%;
     width: 100%;
     display: grid;
     grid-template-columns: repeat(2, 1fr);

     .white {
          background-color: #ffffff;
          color: #2c2c2cff;

          p {
               font-weight: 600;
               font-size: 12px;
               text-align: center;
               margin: 10px 0;
               cursor: pointer;

               &:hover {
                    text-decoration: underline;
               }
          }
     }

     .blue {
          background-color: #d3e5fd;
          color: #060a30ff;
     }
`;

export const Footer = styled.div`
     display: flex;
     justify-content: flex-end;
     align-items: center;

     button {
          border: none;
          background-color: transparent;
          cursor: pointer;
          color: #ffffff;
          text-align: center;
          margin: 0 10px;

          p {
               font-size: 12px;
               font-weight: 400;
               float: right;
               line-height: 1.2;
               margin: 10px 0;
          }

          img {
               width: 35px;
               height: 35px;
          }

          &:hover {
               color: #c3c3c3;
          }
     }
`;

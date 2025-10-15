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
     border: 1px solid rgba(0, 0, 0, 0.45);
     background: linear-gradient(180deg, #2b63d6), linear-gradient(180deg, #1347ba);
     box-shadow: var(0 6px 18px rgba(3, 15, 40, 0.45));
     font-family: 'TahomaCustom';
`;

export const Header = styled.div`
     display: flex;
     padding: 5px;
     gap: 10px;

     img {
          width: 50px;
          height: 50px;
          border: 2px solid #fff;
          border-radius: 4px;
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
     }

     .blue {
          background-color: #d3e5fd;
          color: #060a30ff;
     }
`;

export const Footer = styled.div`
     display: flex;
     justify-content: flex-end;
     padding: 5px;
`;

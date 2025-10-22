import styled from 'styled-components';
import note from '../../assets/images/windows-note.png';
import folder from '../../assets/images/folder.png';

type Props = {
     isOpen: boolean;
};

type PropsContent = {
     size?: number;
};

type PropsSelect = {
     size: number;
};

type PropsFile = {
     type: string;
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

     .content {
          display: flex;
     }
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

export const Menu = styled.div`
     background-color: #f2ead0;
     color: #242322;
     display: flex;
     font-size: 14px;
     flex-direction: column;

     div {
          display: flex;
          border-bottom: 1px solid #c3c3c3;
          border-right: 1px solid #c3c3c3;

          ul {
               display: flex;

               li {
                    list-style: none;
                    padding: 4px 8px;
                    cursor: pointer;
               }
          }

          &.thirdPart {
               display: flex;
               align-items: center;
               height: 32px;

               p {
                    margin: 0 16px;
                    display: flex;

                    img {
                         margin: 0 8px;
                         width: 20px;
                         height: 20px;
                         transform: rotate(180deg);
                         cursor: pointer;
                    }
               }
          }
     }
`;

export const Content = styled.div<PropsContent>`
     padding: 8px 20px;
     gap: 10px;
     color: #000000cc;
     width: ${({ size }) => `${size}px`};
`;

export const Select = styled.div<PropsSelect>`
     background-color: #fff;
     width: ${({ size }) => `${size}px`};
     height: 25px;
     border: 1px solid #1347ba;
     display: flex;
     align-items: center;
     justify-content: space-between;

     img {
          width: 18px;
          height: 18px;
          margin: 0 5px;
     }

     div:first-child {
          border: none;
          font-weight: 500;
     }

     div:last-child {
          background-color: #adc7f8;
          height: 100%;
          display: flex;
          align-items: center;
     }
`;

export const Aside = styled.aside`
     background-color: #f2ead0;
     width: 150px;
     height: 348px;
     overflow: hidden;
     border-right: 1px solid #c3c3c3;

     h1 {
          font-size: 15px;
          font-weight: 600;
          text-align: center;
          padding: 6px 0;
          color: #000000;
          line-height: 1.2;
     }

     hr {
          width: 70%;
          height: 1px;
          border: none;
          background-color: #c3c3c3;
          margin: 0 auto;
     }
`;

export const Files = styled.div<PropsFile>`
     display: flex;
     align-items: center;
     gap: 2px;
     margin: 0 4px;

     &::before {
          content: '';
          display: inline-block;
          width: ${({ type }) => (type === 'file' ? '30px' : '20px')};
          height: ${({ type }) => (type === 'file' ? '30px' : '20px')};
          background-image: url(${({ type }) => (type === 'file' ? note : folder)});
          background-size: contain;
          background-repeat: no-repeat;
     }

     p {
          margin: 0;
          color: #000;
          text-overflow: ellipsis;
     }
`;

export const Main = styled.main`
     background-color: #fff;
     color: #000000;
     width: 100%;
     padding: 16px;

     h1 {
          margin: 4px 0;
          font-size: 30px;
     }

     p {
          margin: 4px 0;
     }

     .infosMain {
          display: flex;
          font-size: 14px;
          gap: 12px;
          margin: 10px 0;
          color: #494949ff;
     }
`;

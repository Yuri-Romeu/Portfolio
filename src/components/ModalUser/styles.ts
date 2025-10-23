import styled from 'styled-components';

type Props = {
     isOpen: boolean;
};

export const Container = styled.div<Props>`
     position: relative;
     display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
     position: absolute;
     top: 47%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: #f0e9da;
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
               vertical-align: middle;
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

export const Main = styled.main`
     color: #000000;
     width: 100%;
     padding: 16px;

     img {
          height: 120px;
          object-fit: contain;
          float: left;
          margin-right: 16px;
     }

     h1 {
          font-size: 16px;
          margin-bottom: 12px;

          span {
               font-weight: 400;

               a {
                    color: #1347ba;
                    margin-right: 12px;
                    text-decoration: none;

                    &:hover {
                         text-decoration: underline;
                    }
               }
          }
     }
`;

export const ButtonXp = styled.button`
     background: linear-gradient(180deg, #ffffff 0%, #dfe8ff 40%, #e8ebf7ff 100%);
     border: 2px solid #3151b5;
     border-top-color: #6c8dfc;
     border-left-color: #6c8dfc;
     color: #000;
     font-family: Tahoma, Verdana, sans-serif;
     font-size: 13px;
     font-weight: 500;
     padding: 4px 22px;
     border-radius: 3px;
     box-shadow: inset 0 1px 0 #ffffff80, 1px 1px 2px rgba(0, 0, 0, 0.3);
     cursor: pointer;
     transition: all 0.15s ease;
     position: absolute;
     bottom: 22px;
     left: 88%;

     &:hover {
          background: linear-gradient(180deg, #e9f1ff 0%, #cddcff 50%, #a9bfff 100%);
          box-shadow: inset 0 1px 0 #ffffff90, 0 0 4px rgba(84, 130, 255, 0.6);
     }

     &:active {
          background: linear-gradient(180deg, #a9bfff 0%, #b8c9ff 50%, #dfe8ff 100%);
          box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.25);
          transform: translateY(1px);
     }
`;

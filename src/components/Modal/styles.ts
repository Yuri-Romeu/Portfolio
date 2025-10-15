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
     background-color: red;
     width: 700px;
     height: 500px;
`;

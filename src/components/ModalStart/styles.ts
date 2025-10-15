import styled from 'styled-components';

type Props = {
     isVisible: boolean;
};

export const Container = styled.div<Props>`
     display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
     position: absolute;
     left: 0;
     bottom: 22px;
`;

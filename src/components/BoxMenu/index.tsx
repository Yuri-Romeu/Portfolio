import { Container } from './styles';

type Props = {
     img: string;
     title: string;
     subTitle?: string;
     side: 'left' | 'right';
     weight?: number;
     size?: number;
};

const BoxMenu = ({ img, title, subTitle, side, weight, size }: Props) => {
     return (
          <Container side={side}>
               <img
                    src={img}
                    alt="internet explorer"
                    style={{
                         width: `${size}px`,
                         height: `${size}px`,
                         ...(size && { margin: `0 ${size / 3.5}px` }),
                    }}
               />

               <div>
                    <h1 style={{ fontWeight: weight }}>{title}</h1>
                    {subTitle && <span>{subTitle}</span>}
               </div>
          </Container>
     );
};

export default BoxMenu;

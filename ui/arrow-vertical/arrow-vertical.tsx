import { ArrowContainer } from './arrow-vertical.styles';

const ArrowVertical = ({
  type = 'right',
  open = false,
}: {
  type?: string;
  open?: boolean;
}) => {
  return <ArrowContainer type={type} open={open}></ArrowContainer>;
};

export default ArrowVertical;

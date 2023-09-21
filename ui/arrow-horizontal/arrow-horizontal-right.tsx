import { ArrowContainerRight } from './arrow-horizontal-right.styles';

const ArrowHorizontalRight = (props) => {
  const { onClick } = props;
  return <ArrowContainerRight onClick={onClick}></ArrowContainerRight>;
};
export default ArrowHorizontalRight;

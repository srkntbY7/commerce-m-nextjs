import { ArrowContainerLeft } from './arrow-horizontal-left.styles';

const ArrowHorizontalLeft = (props) => {
  const { onClick } = props;
  return <ArrowContainerLeft onClick={onClick}></ArrowContainerLeft>;
};
export default ArrowHorizontalLeft;

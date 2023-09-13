import { ButtonContainer } from './button.styles';

const Button = ({
  type = 'addtobag',
  buttonLabel,
}: {
  type: string;
  buttonLabel?: string;
}) => {
  return <ButtonContainer type={type}>{buttonLabel}</ButtonContainer>;
};

export default Button;

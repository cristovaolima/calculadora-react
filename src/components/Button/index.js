import { ButtonContainer } from './styles';

export default function Button({label, onClick, width, color}) {
  return (
    <ButtonContainer onClick={onClick} width={width} color={color}>
      {label}
    </ButtonContainer>
  );
}
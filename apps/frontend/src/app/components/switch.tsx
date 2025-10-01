import * as RadixSwitch from '@radix-ui/react-switch';
import styled from 'styled-components';

export const Switch = () => {
  return (
    <SwitchRoot defaultChecked id="s1">
      <SwitchThumb />
    </SwitchRoot>
  );
};

const SwitchRoot = styled(RadixSwitch.Root)`
  width: 28px;
  height: 16px;
  background-color: #ccc;
  border-radius: 9999px;
  position: relative;
  border: none;

  &[data-state='checked'] {
    background-color: #0abb87;
  }
`;

const SwitchThumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  transition: transform 100ms;
  transform: translateX(2px);

  &[data-state='checked'] {
    transform: translateX(14px);
  }
`;

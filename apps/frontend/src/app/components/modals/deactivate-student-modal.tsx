import * as Dialog from '@radix-ui/react-dialog';
import { Overlay } from './overlay';
import styled from 'styled-components';
import i18n from '@tech-assessment/i18n';
import { CustomButton } from '../core/custom-button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  deactivateStudent: () => void;
}

export const DeactivateStudentModal = ({
  isOpen,
  onClose,
  deactivateStudent,
}: Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <div className="modal_header">
            <img src="/icons/info-icon.svg" alt="info icon" />
          </div>

          <span className="modal_description">
            {i18n.t('deactivate_student_confirmation')}
          </span>

          <div className="buttons">
            <CustomButton
              onClick={() => {}}
              backgroundColor="transparent"
              textColor="#262D34"
            >
              {i18n.t('cancel')}
            </CustomButton>

            <CustomButton onClick={deactivateStudent} backgroundColor="#E36057">
              {i18n.t('deactivate')}
            </CustomButton>
          </div>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  min-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  .modal_description {
    width: 100%;
    text-align: center;
    max-width: 452px;
  }

  .buttons {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`;

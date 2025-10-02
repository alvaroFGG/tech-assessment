import * as Dialog from '@radix-ui/react-dialog';
import i18n from '@tech-assessment/i18n';
import styled from 'styled-components';
import { Student } from '../../models';
import { CustomButton } from '../core/custom-button';
import { CustomInput } from '../core/custom-input';

interface Props {
  student: Student;
  setIsEditionMode: (isEditionMode: boolean) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const EditStudentContent = ({
  student,
  setIsEditionMode,
  setIsModalOpen,
}: Props) => {
  return (
    <Content>
      <div className="modal_header">
        <div className="profile">
          <span>{i18n.t('profile')}</span>
        </div>

        <div className="buttons_container">
          <CustomButton
            onClick={() => {
              setIsEditionMode(false);
            }}
            backgroundColor="transparent"
            textColor="#262D34"
          >
            {i18n.t('cancel_edition')}
          </CustomButton>

          <CustomButton onClick={() => {}} backgroundColor="#0ABB87">
            {i18n.t('save')}
          </CustomButton>
        </div>
      </div>

      <div className="form_container">
        <CustomInput label={i18n.t('name')} defaultValue={student.name} />

        <CustomInput
          label={i18n.t('lastname')}
          defaultValue={student.lastName}
        />

        <CustomInput label={i18n.t('mail')} defaultValue={student.email} />

        <CustomInput label={i18n.t('phone')} defaultValue={student.phone} />
      </div>

      <div className="flex_grow" />

      <div className="modal_footer">
        <CustomButton
          onClick={() => {
            setIsModalOpen(false);
          }}
          backgroundColor="transparent"
          textColor="#262D34"
        >
          {i18n.t('close')}
        </CustomButton>
      </div>
    </Content>
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
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;

  .modal_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profile {
      padding-bottom: 4px;
      padding-left: 8px;
      padding-right: 8px;
      border-bottom: 2px solid #0abb87;

      span {
        font-size: 14px;
        font-weight: 600;
      }
    }

    .buttons_container {
      display: flex;
      gap: 8px;
    }
  }

  .form_container {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }

  .flex_grow {
    flex-grow: 1;
  }

  .modal_footer {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

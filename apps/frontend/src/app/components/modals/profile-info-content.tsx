import * as Dialog from '@radix-ui/react-dialog';
import i18n from '@tech-assessment/i18n';
import styled from 'styled-components';
import { CustomButton } from '../core/custom-button';
import { Switch } from '../switch';
import { Student } from '../../models';
import { useState } from 'react';
import { DeactivateStudentModal } from './deactivate-student-modal';
import { useStudents } from '../../providers/students-provider';

interface Props {
  student: Student;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setIsEditionMode: (isEditionMode: boolean) => void;
}

export const ProfileInfoContent = ({
  student,
  setIsEditionMode,
  setIsModalOpen,
}: Props) => {
  const { updateStudentAndFetch } = useStudents();

  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);

  const deactivateStudent = async () => {
    await updateStudentAndFetch(student.id, { ...student, isActive: false });
    setIsDeactivateModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <DeactivateStudentModal
        isOpen={isDeactivateModalOpen}
        onClose={() => setIsDeactivateModalOpen(false)}
        deactivateStudent={deactivateStudent}
      />

      <Content>
        <div className="modal_header">
          <div className="profile">
            <span>{i18n.t('profile')}</span>
          </div>

          <CustomButton
            onClick={() => {
              setIsEditionMode(true);
            }}
            variant="primary"
          >
            {i18n.t('edit_student')}
          </CustomButton>
        </div>

        <div className="profile_image">
          <img src="/icons/profile-image.svg" alt="profile icon" />
        </div>

        <div className="profile_info">
          <div className="container_with_icon">
            <img src="/icons/user-icon.svg" alt="user icon" />

            <div className="info_container">
              <span className="label">{i18n.t('name_and_lastname')}</span>
              <span className="value">
                {student.name} {student.lastName}
              </span>
            </div>
          </div>

          <div className="container_with_icon">
            <img src="/icons/user-icon.svg" alt="user icon" />

            <div className="info_container">
              <span className="label">{i18n.t('username')}</span>
              <span className="value">{student.email.split('@')[0]}</span>
            </div>
          </div>

          <div className="container_with_icon">
            <img src="/icons/msg-icon.svg" alt="email icon" />

            <div className="info_container">
              <span className="label">{i18n.t('email')}</span>
              <span className="value">{student.email}</span>
            </div>
          </div>

          <div className="container_with_icon">
            <img src="/icons/mobile-icon.svg" alt="phone icon" />

            <div className="info_container">
              <span className="label">{i18n.t('phone')}</span>
              <span className="value">{student.phone}</span>
            </div>
          </div>
        </div>

        <div className="flex_grow" />

        <div className="modal_footer">
          <div>
            <Switch
              onChange={async (checked) => {
                if (!checked) {
                  setIsDeactivateModalOpen(true);
                  return;
                }

                await updateStudentAndFetch(student.id, {
                  ...student,
                  isActive: checked,
                });
                setIsModalOpen(false);
              }}
              defaultChecked={student.isActive}
            />

            {student.isActive && <span>{i18n.t('active_account')}</span>}
            {!student.isActive && <span>{i18n.t('inactive_account')}</span>}
          </div>

          <CustomButton
            onClick={() => {
              setIsModalOpen(false);
            }}
            variant="outline"
          >
            {i18n.t('close')}
          </CustomButton>
        </div>
      </Content>
    </>
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
  gap: 40px;
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
  }

  .profile_image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_with_icon {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .profile_info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    gap: 10px;

    .info_container {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .label {
        font-size: 12px;
        font-weight: 300;
      }

      .value {
        font-size: 14px;
      }
    }
  }

  .flex_grow {
    flex-grow: 1;
  }

  .modal_footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }
  }
`;

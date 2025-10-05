import * as Dialog from '@radix-ui/react-dialog';
import i18n from '@tech-assessment/i18n';
import styled from 'styled-components';
import { Student } from '../../models';
import { CustomButton } from '../core/custom-button';
import { CustomInput } from '../core/custom-input';
import { useForm } from 'react-hook-form';
import { emailRegex, phoneRegex } from '../../types';
import { useStudents } from '../../providers/students-provider';

interface Props {
  student?: Student;
  setIsEditionMode: (isEditionMode: boolean) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const EditStudentContent = ({
  student,
  setIsEditionMode,
  setIsModalOpen,
}: Props) => {
  const { createStudentAndFetch, updateStudentAndFetch } = useStudents();

  const {
    setValue,
    getValues,
    formState: { errors },
    setError,
  } = useForm<Student>({
    defaultValues: {
      name: student?.name || '',
      lastName: student?.lastName || '',
      email: student?.email || '',
      phone: student?.phone || '',
    },
  });

  const handleSubmit = async () => {
    const data = getValues();

    if (!data.name || !data.lastName || !data.email || !data.phone) {
      if (!data.name) {
        setError('name', {
          type: 'required',
          message: i18n.t('form_errors.name_required'),
        });
      }
      if (!data.lastName) {
        setError('lastName', {
          type: 'required',
          message: i18n.t('form_errors.lastName_required'),
        });
      }
      if (!data.email) {
        setError('email', {
          type: 'required',
          message: i18n.t('form_errors.email_required'),
        });
      }

      if (!data.phone) {
        setError('phone', {
          type: 'required',
          message: i18n.t('form_errors.phone_required'),
        });
      }

      return;
    }

    if (!emailRegex.test(data.email)) {
      setError('email', {
        type: 'pattern',
        message: i18n.t('form_errors.email_invalid'),
      });
      return;
    }

    if (!phoneRegex.test(data.phone)) {
      setError('phone', {
        type: 'pattern',
        message: i18n.t('form_errors.phone_invalid'),
      });
      return;
    }

    if (student) {
      await updateStudentAndFetch(student.id, data);
      setIsModalOpen(false);

      return;
    }

    await createStudentAndFetch(data);
    setIsModalOpen(false);
  };

  return (
    <Content>
      <div className="modal_header">
        <div className="profile">
          {student && <span>{i18n.t('profile')}</span>}

          {!student && <span>{i18n.t('new_student')}</span>}
        </div>

        <div className="buttons_container">
          {student && (
            <CustomButton
              onClick={() => {
                setIsEditionMode(false);
              }}
              backgroundColor="transparent"
              textColor="#262D34"
            >
              {i18n.t('cancel_edition')}
            </CustomButton>
          )}

          <CustomButton onClick={handleSubmit} backgroundColor="#0ABB87">
            {i18n.t('save')}
          </CustomButton>
        </div>
      </div>

      <div className="form_container">
        <CustomInput
          label={i18n.t('name')}
          defaultValue={student?.name}
          onChange={(e) => setValue('name', e.target.value)}
          error={errors.name?.message || null}
        />

        <CustomInput
          label={i18n.t('lastname')}
          defaultValue={student?.lastName}
          onChange={(e) => setValue('lastName', e.target.value)}
          error={errors.lastName?.message || null}
        />

        <CustomInput
          label={i18n.t('mail')}
          defaultValue={student?.email}
          onChange={(e) => setValue('email', e.target.value)}
          error={errors.email?.message || null}
        />

        <CustomInput
          label={i18n.t('phone')}
          defaultValue={student?.phone}
          onChange={(e) => setValue('phone', e.target.value)}
          error={errors.phone?.message || null}
        />
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

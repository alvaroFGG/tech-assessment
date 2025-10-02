import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { ProfileInfoContent } from './profile-info-content';
import { Student } from '../../models';
import { EditStudentContent } from './edit-student-content';
import { Overlay } from './overlay';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  student: Student;
}

export const ProfileModal = ({ isOpen, onClose, student }: Props) => {
  const [isEditionMode, setIsEditionMode] = useState(false);

  useEffect(() => {
    setIsEditionMode(false);
  }, [isOpen]);

  if (!student) return null;
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Overlay />
        {!isEditionMode && (
          <ProfileInfoContent
            student={student}
            setIsEditionMode={setIsEditionMode}
            setIsModalOpen={onClose}
          />
        )}

        {isEditionMode && (
          <EditStudentContent
            setIsEditionMode={setIsEditionMode}
            student={student}
            setIsModalOpen={onClose}
          />
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

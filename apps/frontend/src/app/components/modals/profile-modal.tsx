import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { ProfileInfoContent } from './profile-info-content';
import { Student } from '../../models';
import { EditStudentContent } from './edit-student-content';
import { Overlay } from './overlay';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  student?: Student;
}

export const ProfileModal = ({ isOpen, onClose, student }: Props) => {
  const [isEditionMode, setIsEditionMode] = useState(false);

  useEffect(() => {
    setIsEditionMode(false);
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Overlay />
        {isEditionMode ||
          (!student && (
            <EditStudentContent
              setIsEditionMode={setIsEditionMode}
              student={student}
              setIsModalOpen={onClose}
            />
          ))}

        {!isEditionMode && student && (
          <ProfileInfoContent
            student={student}
            setIsEditionMode={setIsEditionMode}
            setIsModalOpen={onClose}
          />
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

import { Button } from '@/components/primitives/Button';
import { Modal } from './Modal';

interface Props {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
export function ConfirmDialog({ open, onConfirm, onCancel, title = 'Xác nhận hành động', description = 'Bạn có chắc chắn?', confirmText = 'Đồng ý', cancelText = 'Hủy' }: Props) {
  return (
    <Modal open={open} onClose={onCancel} className='max-w-md'>
      <div className='p-6 space-y-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
        <div className='flex justify-end gap-2 pt-2'>
          <Button variant='ghost' onClick={onCancel}>
            {cancelText}
          </Button>
          <Button variant='danger' onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

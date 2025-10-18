'use client';

import { Modal } from '@/components/feedback/Modal';
import { Button } from '@/components/primitives/Button';
import { Select } from '@/components/primitives/Select';
import { TextField } from '@/components/primitives/TextField';
import { useBoolean } from '@/hooks/useBoolean';
import { useDisclosure } from '@/hooks/useDisclosure';
import { useState } from 'react';

export default function UseDisclosurePage() {
  const dialog = useDisclosure();
  const [dbName, setDbName] = useState('John Doe');
  const show = useBoolean(false);
  const isDeleting = useBoolean(false);

  return (
    <>
      <Button onClick={dialog.open}>Open</Button>
      <Modal open={dialog.isOpen} onClose={dialog.close}>
        <div className='flex flex-col gap-2'>
          <TextField value={dbName} onChange={e => setDbName(e.target.value)} />
          <Button onClick={() => setDbName('John Doe')}>Set Db Name</Button>
          <Button onClick={dialog.close}>Close Modal</Button>

          <TextField type={show.value ? 'text' : 'password'} />
          <Button onClick={show.toggle}>Show/Hide</Button>

          <Button variant='danger' disabled={isDeleting.value}>
            Delete
          </Button>
          <TextField label='Email' placeholder='you@domain.com' error='Email không hợp lệ' />
          <TextField label='Name' error='Tên tối thiểu 3 ký tự' />
          <Select
            label='Role'
            options={[
              { label: 'Admin', value: 'admin' },
              { label: 'User', value: 'user' },
            ]}
            defaultValue='user'
          />
        </div>
      </Modal>
    </>
  );
}

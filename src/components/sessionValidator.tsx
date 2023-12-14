'use client';

import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}
export default function ClientComponent({children}:Props) {
  const { data: session, status } = useSession();
  return (
    <div>
      ClientComponent {status}{' '}
      {status === 'authenticated' && session.user?.name}
      {status === 'authenticated' && children}
    </div>
  );
}

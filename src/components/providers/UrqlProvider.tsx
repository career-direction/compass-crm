'use client';

import { Provider } from 'urql';
import { urqlClient } from '../../lib/urql-client';

interface UrqlProviderProps {
  children: React.ReactNode;
}

export function UrqlProvider({ children }: UrqlProviderProps) {
  return (
    <Provider value={urqlClient}>
      {children}
    </Provider>
  );
}

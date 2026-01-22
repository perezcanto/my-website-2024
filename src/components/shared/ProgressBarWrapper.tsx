'use client';

import { AppProgressProvider as ProgressProvider } from '@bprogress/next';

const ProgressBarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <ProgressProvider
      height="4px"
      color="#e4e4e4"
      options={{ showSpinner: true }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
    </>
  );
};
export default ProgressBarWrapper;
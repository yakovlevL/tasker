import * as React from 'react'

export const icon32 = (fragment: any) => ({
  size,
  ...props
}: Omit<any, 'size'> & { size?: 'small' | 'large' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size === 'small' ? 24 : 32}
    height={size === 'small' ? 24 : 32}
    viewBox="0 0 32 32"
    {...(props as any)}
  >
    {fragment()}
  </svg>
)

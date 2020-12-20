import { useCallback, useState } from 'react'

export const useToggle = (initial: boolean) => {
  const [open, setOpen] = useState(initial)

  return [open, useCallback(() => setOpen(status => !status), [])] as const
}

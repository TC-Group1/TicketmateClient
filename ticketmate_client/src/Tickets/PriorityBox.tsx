import { Chip } from '@mui/material'
import { FC, useEffect, useState } from 'react'

type Props = {
  priorityId: number
}

type PriorityBoxColor = 'success' | 'warning' | 'error'

type PriorityBoxLabel = 'Low' | 'Medium' | 'High'

const PriorityBox: FC<Props> = ({ priorityId }) => {
  const [color, setColor] = useState<PriorityBoxColor>('success')
  const [label, setLabel] = useState<PriorityBoxLabel>('Low')

  useEffect(() => {
    switch (priorityId) {
      case 1:
        setColor('success')
        setLabel('Low')
        break
      case 2:
        setColor('warning')
        setLabel('Medium')
        break
      case 3:
        setColor('error')
        setLabel('High')
        break

      default:
        break
    }
  }, [])

  return <Chip {...{ label, color, size: 'medium' }} />
}
export default PriorityBox

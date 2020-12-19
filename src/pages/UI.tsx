import * as React from 'react'

import { Layout } from '../components/elements/Layout'
import { Button } from '../components/elements/Button'
import { Plus } from '../components/icons'

export const UI = () => {
  return (
    <Layout>
      <Button kind="primary" color="default" size="default">
        Добавить задачу
      </Button>
      <Button kind="secondary" color="default" size="default">
        Добавить задачу
      </Button>
      <Button kind="secondary" color="default" size="default" disabled>
        Добавить задачу
      </Button>
      <Button kind="ghost" color="warn">
        Отмена
      </Button>
      <Button kind="default" color="default" size="icon">
        <Plus />
      </Button>
    </Layout>
  )
}

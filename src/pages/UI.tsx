import * as React from 'react'

import { Layout } from '../components/elements/Layout'
import { Button } from '../components/elements/Button'
import { Plus } from '../components/icons'
import { LoadingOverlay } from '../components/elements/Loading'
import { Burger } from '../components/elements/Burger'
import { TextInput, DateInput } from '../components/elements/form'
import { useToggle } from '../util/hooks'

export const UI = () => {
  const [open, toggle] = useToggle(false)
  return (
    <Layout>
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
      <Layout>
        {/*<LoadingOverlay backdropColor="rgba(255, 255, 255, 0,5)" spinnerColor="black" />*/}
        <Burger color="#000" activeColor="#000" open={open} onClick={toggle} />
      </Layout>
      <Layout>
        <TextInput placeholder="hello" />
        <DateInput />
      </Layout>
    </Layout>
  )
}

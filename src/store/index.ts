import { createStoreon, StoreonStore } from 'storeon'
import { storeonDevtools, storeonLogger } from 'storeon/devtools'
import { StoreContext as StoreonContext } from 'storeon/react'

export type State = any
export type Events = any

export const store = createStoreon<State, Event>([storeonDevtools, storeonLogger])

export const StoreContext: React.Context<StoreonStore<State, Events>> = StoreonContext as any

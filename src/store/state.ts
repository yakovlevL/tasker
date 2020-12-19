import { StoreonModule } from 'storeon'
import { Events, State } from './index'

const initialState: State = {
  lang: 'ru',
}

export const appModule: StoreonModule<State, Events> = store => {
  store.on('@init', () => initialState)
}

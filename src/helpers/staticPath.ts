import { appConfig } from '../config'

export const getStaticUrl = (path: string) => `${appConfig.staticUrl}${path}`

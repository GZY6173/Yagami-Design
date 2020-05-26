import { Loading, StopLoading, Info } from './toast'

const Toast = {
    info: (title) => Info(title),
    loading: (title) => Loading(title),
    stop: () => StopLoading()
}

export default Toast
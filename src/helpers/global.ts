import { createSignal } from 'solid-js'

export const useStringBooleanMap = () => {
  const [map, setMap] = createSignal<Record<string, boolean>>({})
  const set = (name: string, value: boolean) => {
    setMap({
      ...map(),
      [name]: value,
    })
  }

  const setWithCallback = async (
    name: string,
    callback: () => Promise<void>,
  ) => {
    set(name, true)
    try {
      await callback()
    } catch {}
    set(name, false)
  }

  return {
    map,
    set,
    setWithCallback,
  }
}

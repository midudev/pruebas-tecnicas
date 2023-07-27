import { $, noSerialize } from "@builder.io/qwik"

export function useBroadcastChannel<T>(
  bcName: string,
  onMessage: (data: T) => void
) {
  const bc = noSerialize(new BroadcastChannel(bcName))

  bc?.addEventListener("message", ({ data }) => onMessage(JSON.parse(data)))

  const sendMessage = $((data: T) => {
    bc?.postMessage(JSON.stringify(data))
  })

  return { sendMessage }
}

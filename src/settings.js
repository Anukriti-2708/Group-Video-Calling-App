import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "b7ce893f9d1d4246bb033bdc39fefc5a"
const token ="006b7ce893f9d1d4246bb033bdc39fefc5aIABnIg8g9nOLQYiGAtMEXDm8ugjPhJGqZMoWZ7va4uhvyGTNKL8AAAAAEABzYWfne17+YgEAAQB8Xv5i"

export const config ={mode: "rtc",codec: "vp8", appId:appId, token:token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
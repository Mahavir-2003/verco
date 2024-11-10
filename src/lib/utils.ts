import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import PusherClient from 'pusher-js'
import PusherServer from 'pusher'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractUUIDFromString = (url: string) => {
  return url.match(
    /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/i
  )
}

export const pusherServer = new PusherServer({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID as string,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
  secret: process.env.NEXT_PUBLIC_PUSHER_APP_SECRET as string,
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTOR as string,
  useTLS: true,
})

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
  {
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTOR as string,
  }
)

export const postToParent = (message: string) => {
  window.parent.postMessage(message, '*')
}

export const extractURLfromString = (url: string) => {
  return url.match(/https?:\/\/[^\s"<>\n]+/g)
}

export const extractEmailsFromString = (text: string) => {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
}

export const getMonthName = (month: number) => {
  return month == 1
    ? 'Jan'
    : month == 2
    ? 'Feb'
    : month == 3
    ? 'Mar'
    : month == 4
    ? 'Apr'
    : month == 5
    ? 'May'
    : month == 6
    ? 'Jun'
    : month == 7
    ? 'Jul'
    : month == 8
    ? 'Aug'
    : month == 9
    ? 'Sep'
    : month == 10
    ? 'Oct'
    : month == 11
    ? 'Nov'
    : month == 12 && 'Dec'
}

export function isValidUUID(uuid: string) {
  if (!uuid) {
    console.error('UUID is empty or undefined')
    return false
  }

  // Check length first (should be 36 characters including hyphens)
  if (uuid.length !== 36) {
    console.error(`Invalid UUID length: ${uuid.length}, expected 36`)
    return false
  }

  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  const isValid = uuidRegex.test(uuid)
  
  if (!isValid) {
    console.error(`Invalid UUID format: ${uuid}`)
  }
  
  return isValid
}

// Add this function to handle potentially truncated UUIDs
export function fixTruncatedUUID(uuid: string): string | null {
  // If it's already a valid UUID, return it
  if (isValidUUID(uuid)) {
    return uuid
  }

  // If it's truncated (35 characters with hyphens in correct places)
  if (uuid.length === 35 && 
      uuid.charAt(8) === '-' && 
      uuid.charAt(13) === '-' && 
      uuid.charAt(18) === '-' && 
      uuid.charAt(23) === '-') {
    // Try each possible hex digit
    const possibleDigits = '0123456789abcdef'
    for (const digit of possibleDigits) {
      const potentialUUID = uuid + digit
      if (isValidUUID(potentialUUID)) {
        return potentialUUID
      }
    }
  }
  
  return null
}

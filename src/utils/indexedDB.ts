import type { User } from '../@types'
import { openDB } from 'idb'

export async function addUsersToStore(users: User[]): Promise<void> {
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported')
    return
  }
  const db = await openDB('LendsqrDatabase', 1)
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', { keyPath: 'id' })
  }

  const transaction = db.transaction('users', 'readwrite')

  const userStore = transaction.objectStore('users')
  users.forEach(async (user: User) => {
    await userStore.put(user)
  })
}

export async function getUserFromStore(id: string): Promise<User | undefined> {
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported')
    return undefined
  }
  const db = await openDB('LendsqrDatabase', 1)
  if (!db.objectStoreNames.contains('users')) {
    return undefined
  }
  const transaction = db.transaction('users', 'readonly')

  const userStore = transaction.objectStore('users')
  const res = await userStore.get(id)

  return res
}

import { keyRoles } from '@/data/keyRoleData'

export async function getKeyRoles() {
  try {
    return keyRoles
  } catch (error) {
    console.error('Error fetching key roles:', error)
    return null
  }
}

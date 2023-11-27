import { PrismaClient } from '@prisma/client'
import UserServices from './services/UserServices'
import LanceServices from './services/LanceServices'

const prisma = new PrismaClient()

async function main() {
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
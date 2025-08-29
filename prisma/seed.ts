import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create demo investor user
  const hashedPassword = await bcrypt.hash('SecurePass2025', 12)
  
  const investor = await prisma.user.upsert({
    where: { email: 'investor@globalmarket.com' },
    update: {},
    create: {
      email: 'investor@globalmarket.com',
      name: 'Limited Partner Demo',
      password: hashedPassword,
      role: 'investor',
    },
  })

  // Create demo admin user
  const adminPassword = await bcrypt.hash('AdminPass2025', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@globalmarket.com' },
    update: {},
    create: {
      email: 'admin@globalmarket.com',
      name: 'Fund Administrator',
      password: adminPassword,
      role: 'admin',
    },
  })

  // Create sample investments for the demo investor
  await prisma.investment.createMany({
    data: [
      {
        userId: investor.id,
        amount: 2112500,
        type: 'Long/Short Equity Strategy',
        status: 'active',
        performance: 13.7,
      },
      {
        userId: investor.id,
        amount: 812500,
        type: 'Global Macro Strategy',
        status: 'active',
        performance: 9.2,
      },
      {
        userId: investor.id,
        amount: 325000,
        type: 'Event Driven Strategy',
        status: 'active',
        performance: 15.8,
      },
    ],
  })

  console.log('Database seeded successfully!')
  console.log('Demo credentials:')
  console.log('Investor: investor@globalmarket.com / SecurePass2025')
  console.log('Admin: admin@globalmarket.com / AdminPass2025')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'bdb3b746-5349-4b51-9816-5b249259d1fe',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para desenvolvedores apaixonados por código.',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
import { prisma } from '../src/lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
  console.log('🌱 Seeding portal database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@pratejra.build' },
    update: {},
    create: {
      email: 'admin@pratejra.build',
      name: 'Pratejra Admin',
      role: 'ADMIN',
      hashedPassword: adminPassword,
    },
  })

  // Create agent user
  const agentPassword = await bcrypt.hash('agent123', 12)
  const agent = await prisma.user.upsert({
    where: { email: 'agent@pratejra.build' },
    update: {},
    create: {
      email: 'agent@pratejra.build',
      name: 'Project Agent',
      role: 'AGENT',
      hashedPassword: agentPassword,
    },
  })

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 12)
  const user = await prisma.user.upsert({
    where: { email: 'user@pratejra.build' },
    update: {},
    create: {
      email: 'user@pratejra.build',
      name: 'Project User',
      role: 'USER',
      hashedPassword: userPassword,
    },
  })

  // Create sample projects
  const project1 = await prisma.project.upsert({
    where: { id: 'timeless-love' },
    update: {},
    create: {
      id: 'timeless-love',
      name: 'Timeless Love Platform',
      description: 'Stories, software, and playlists that celebrate long-term care and connection.',
      status: 'ACTIVE',
      ownerId: admin.id,
    },
  })

  const project2 = await prisma.project.upsert({
    where: { id: 'rise-strong' },
    update: {},
    create: {
      id: 'rise-strong',
      name: 'Rise Strong Network',
      description: 'Supportive resources for people rebuilding after hard seasons.',
      status: 'ACTIVE',
      ownerId: agent.id,
    },
  })

  // Create project permissions
  await prisma.projectPermission.upsert({
    where: {
      userId_projectId: {
        userId: agent.id,
        projectId: project1.id,
      },
    },
    update: {},
    create: {
      userId: agent.id,
      projectId: project1.id,
      level: 'WRITE',
    },
  })

  await prisma.projectPermission.upsert({
    where: {
      userId_projectId: {
        userId: user.id,
        projectId: project1.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      projectId: project1.id,
      level: 'READ',
    },
  })

  // Create sample process logs
  await prisma.processLog.upsert({
    where: { id: 'log-1' },
    update: {},
    create: {
      id: 'log-1',
      projectId: project1.id,
      userId: admin.id,
      action: 'project_created',
      details: JSON.stringify({ projectName: project1.name }),
    },
  })

  await prisma.processLog.upsert({
    where: { id: 'log-2' },
    update: {},
    create: {
      id: 'log-2',
      projectId: project1.id,
      userId: agent.id,
      action: 'user_assigned',
      details: JSON.stringify({ assignedUser: user.name }),
    },
  })

  await prisma.processLog.upsert({
    where: { id: 'log-3' },
    update: {},
    create: {
      id: 'log-3',
      projectId: project2.id,
      userId: agent.id,
      action: 'milestone_completed',
      details: JSON.stringify({ milestone: 'Initial setup' }),
    },
  })

  console.log('✅ Portal database seeded successfully!')
  console.log('\n📋 Test Accounts:')
  console.log('Admin: admin@pratejra.build / admin123')
  console.log('Agent: agent@pratejra.build / agent123')
  console.log('User: user@pratejra.build / user123')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
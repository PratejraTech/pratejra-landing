'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Users,
  FolderOpen,
  MessageSquare,
  Activity,
  LogOut,
  Shield,
  TrendingUp
} from 'lucide-react'

interface User {
  id: string
  email: string
  name: string
  role: string
}

interface Project {
  id: string
  name: string
  status: string
  description?: string
}

interface DashboardStats {
  totalProjects: number
  activeProjects: number
  totalUsers: number
  unreadMessages: number
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    activeProjects: 0,
    totalUsers: 0,
    unreadMessages: 0,
  })
  const [recentProjects, setRecentProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      // Check authentication
      const sessionResponse = await fetch('/api/auth/session')
      if (!sessionResponse.ok) {
        router.push('/portal/login')
        return
      }

      const sessionData = await sessionResponse.json()
      setUser(sessionData.user)

      // Load dashboard stats (mock data for now)
      setStats({
        totalProjects: 12,
        activeProjects: 8,
        totalUsers: 24,
        unreadMessages: 3,
      })

      // Load recent projects (mock data for now)
      setRecentProjects([
        { id: '1', name: 'Timeless Love Platform', status: 'active', description: 'Care coordination platform' },
        { id: '2', name: 'Rise Strong Network', status: 'active', description: 'Support community platform' },
        { id: '3', name: 'Pratejra Core', status: 'active', description: 'Main platform infrastructure' },
      ])
    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/portal/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 shadow-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Pratejra Portal</h1>
                <p className="text-sm text-slate-400">Project Intelligence & Communication</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>
                  {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user?.name}</p>
                <p className="text-xs text-slate-400">{user?.role}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout} className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Projects</CardTitle>
              <FolderOpen className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalProjects}</div>
              <p className="text-xs text-slate-400">
                {stats.activeProjects} active
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Team Members</CardTitle>
              <Users className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers}</div>
              <p className="text-xs text-slate-400">
                Across all projects
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.unreadMessages}</div>
              <p className="text-xs text-slate-400">
                Unread messages
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Activity</CardTitle>
              <TrendingUp className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+12%</div>
              <p className="text-xs text-slate-400">
                This week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Projects</CardTitle>
              <CardDescription className="text-slate-400">
                Projects you've been working on recently
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 border border-slate-600 rounded-lg bg-slate-700/50">
                    <div>
                      <h3 className="font-medium text-white">{project.name}</h3>
                      <p className="text-sm text-slate-400">{project.description}</p>
                    </div>
                    <Badge variant={project.status === 'active' ? 'default' : 'secondary'} className="bg-blue-600 text-white">
                      {project.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-700" variant="outline">
                View All Projects
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-slate-400">
                Common tasks and navigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex-col bg-blue-600 hover:bg-blue-700 text-white" onClick={() => router.push('/portal/projects')}>
                  <FolderOpen className="h-6 w-6 mb-2" />
                  Projects
                </Button>
                <Button className="h-20 flex-col border-slate-600 text-slate-300 hover:bg-slate-700" variant="outline">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  Messages
                </Button>
                <Button className="h-20 flex-col border-slate-600 text-slate-300 hover:bg-slate-700" variant="outline">
                  <Users className="h-6 w-6 mb-2" />
                  Team
                </Button>
                <Button className="h-20 flex-col border-slate-600 text-slate-300 hover:bg-slate-700" variant="outline">
                  <Activity className="h-6 w-6 mb-2" />
                  Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
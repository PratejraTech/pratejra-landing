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
        totalProjects: 47,
        activeProjects: 32,
        totalUsers: 156,
        unreadMessages: 3,
      })

      // Load recent projects (mock data for now)
      setRecentProjects([
        { id: '1', name: 'Indigenous Rights Network', status: 'active', description: 'Digital security for indigenous activists' },
        { id: '2', name: 'Climate Justice Alliance', status: 'active', description: 'Environmental protection coordination' },
        { id: '3', name: 'Workers Rights Collective', status: 'active', description: 'Labor organizing support platform' },
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
              <Shield className="h-8 w-8 text-community-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Community Protection Portal</h1>
                <p className="text-sm text-community-400">Free Security for Worthy Causes</p>
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
          <Card className="glass-card border-2 border-community-500/30 hover:border-community-400/50 hover:shadow-glow-community transition-all duration-300 transform-gpu hover:translate-y-[-4px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Protected Communities</CardTitle>
              <FolderOpen className="h-5 w-5 text-community-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalProjects}</div>
              <p className="text-xs text-community-400">
                {stats.activeProjects} actively protected
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-2 border-hope-500/30 hover:border-hope-400/50 hover:shadow-glow-hope transition-all duration-300 transform-gpu hover:translate-y-[-4px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Community Members</CardTitle>
              <Users className="h-5 w-5 text-hope-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers}</div>
              <p className="text-xs text-hope-400">
                Activists & organizers protected
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-2 border-wisdom-500/30 hover:border-wisdom-400/50 hover:shadow-glow-wisdom transition-all duration-300 transform-gpu hover:translate-y-[-4px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Security Alerts</CardTitle>
              <MessageSquare className="h-5 w-5 text-wisdom-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.unreadMessages}</div>
              <p className="text-xs text-wisdom-400">
                Active threats monitored
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-2 border-community-500/30 hover:border-community-400/50 hover:shadow-glow-community transition-all duration-300 transform-gpu hover:translate-y-[-4px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Protection Status</CardTitle>
              <TrendingUp className="h-5 w-5 text-community-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-community-400">SECURE</div>
              <p className="text-xs text-community-400">
                All systems operational
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card border-2 border-white/10 hover:shadow-glow-community transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Recent Projects</CardTitle>
              <CardDescription className="text-slate-300">
                Projects you've been working on recently
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 glass-card border-2 border-white/10 rounded-2xl hover:border-community-400/50 hover:shadow-glow-community transition-all duration-300 transform-gpu hover:translate-y-[-2px]">
                    <div>
                      <h3 className="font-medium text-white">{project.name}</h3>
                      <p className="text-sm text-slate-300">{project.description}</p>
                    </div>
                    <Badge variant={project.status === 'active' ? 'default' : 'secondary'} className="glass-card border-2 border-community-500/50 text-community-300 rounded-full">
                      {project.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 glass-card border-2 border-community-500/30 text-community-300 hover:border-community-400/50 hover:shadow-glow-community" variant="outline">
                View All Projects
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card border-2 border-white/10 hover:shadow-glow-community transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Community Protection Tools</CardTitle>
              <CardDescription className="text-slate-300">
                Access your security resources and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex-col glass-card border-2 border-community-500/50 text-community-300 hover:border-community-400/70 hover:shadow-glow-community rounded-2xl" onClick={() => router.push('/portal/projects')}>
                  <Shield className="h-6 w-6 mb-2" />
                  Security Status
                </Button>
                <Button className="h-20 flex-col glass-card border-2 border-white/10 text-slate-300 hover:border-community-400/50 hover:shadow-glow-community rounded-2xl" variant="outline">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  Emergency Contact
                </Button>
                <Button className="h-20 flex-col glass-card border-2 border-white/10 text-slate-300 hover:border-community-400/50 hover:shadow-glow-community rounded-2xl" variant="outline">
                  <Users className="h-6 w-6 mb-2" />
                  Community Network
                </Button>
                <Button className="h-20 flex-col glass-card border-2 border-white/10 text-slate-300 hover:border-community-400/50 hover:shadow-glow-community rounded-2xl" variant="outline">
                  <Activity className="h-6 w-6 mb-2" />
                  Threat Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
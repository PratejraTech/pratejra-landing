'use client'

import { useState, useEffect } from 'react'
import { PortalLayout } from '../../../src/components/portal/PortalLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../src/components/ui/card'
import { Badge } from '../../../src/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../../../src/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../src/components/ui/tabs'
import {
  Activity,
  Users,
  MessageSquare,
  FolderOpen,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react'

interface ProcessLog {
  id: string
  action: string
  details: string
  timestamp: string
  user: {
    name: string
    email: string
  }
  project?: {
    name: string
  }
}

interface ActivityStats {
  totalActivities: number
  activeUsers: number
  completedTasks: number
  pendingTasks: number
}

export default function ActivityPage() {
  const [logs, setLogs] = useState<ProcessLog[]>([])
  const [stats, setStats] = useState<ActivityStats>({
    totalActivities: 0,
    activeUsers: 0,
    completedTasks: 0,
    pendingTasks: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadActivityData()
  }, [])

  const loadActivityData = async () => {
    try {
      // Mock data for demonstration - in real app, this would come from API
      const mockLogs: ProcessLog[] = [
        {
          id: '1',
          action: 'project_created',
          details: 'Created new project: Timeless Love Platform',
          timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
          user: { name: 'Alice Johnson', email: 'alice@pratejra.build' },
          project: { name: 'Timeless Love Platform' },
        },
        {
          id: '2',
          action: 'user_assigned',
          details: 'Assigned Bob Smith to project',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
          user: { name: 'Alice Johnson', email: 'alice@pratejra.build' },
          project: { name: 'Timeless Love Platform' },
        },
        {
          id: '3',
          action: 'milestone_completed',
          details: 'Completed milestone: Initial setup',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
          user: { name: 'Bob Smith', email: 'bob@pratejra.build' },
          project: { name: 'Rise Strong Network' },
        },
        {
          id: '4',
          action: 'message_sent',
          details: 'Sent secure message to team',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(), // 6 hours ago
          user: { name: 'Carol Davis', email: 'carol@pratejra.build' },
          project: { name: 'Pratejra Core' },
        },
        {
          id: '5',
          action: 'task_completed',
          details: 'Completed code review for authentication module',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
          user: { name: 'David Wilson', email: 'david@pratejra.build' },
          project: { name: 'Pratejra Core' },
        },
      ]

      setLogs(mockLogs)
      setStats({
        totalActivities: 47,
        activeUsers: 8,
        completedTasks: 23,
        pendingTasks: 12,
      })
    } catch (error) {
      console.error('Failed to load activity data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'project_created':
        return <FolderOpen className="h-4 w-4 text-blue-500" />
      case 'user_assigned':
        return <Users className="h-4 w-4 text-green-500" />
      case 'milestone_completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'message_sent':
        return <MessageSquare className="h-4 w-4 text-purple-500" />
      case 'task_completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Activity className="h-4 w-4 text-gray-500" />
    }
  }

  const getActionColor = (action: string) => {
    switch (action) {
      case 'project_created':
        return 'bg-blue-100 text-blue-800'
      case 'user_assigned':
        return 'bg-green-100 text-green-800'
      case 'milestone_completed':
        return 'bg-emerald-100 text-emerald-800'
      case 'message_sent':
        return 'bg-purple-100 text-purple-800'
      case 'task_completed':
        return 'bg-emerald-100 text-emerald-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date()
    const time = new Date(timestamp)
    const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Process Intelligence</h1>
          <p className="mt-2 text-gray-600">
            Real-time activity monitoring and project analytics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalActivities}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeUsers}</div>
              <p className="text-xs text-muted-foreground">
                Currently online
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedTasks}</div>
              <p className="text-xs text-muted-foreground">
                This week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingTasks}</div>
              <p className="text-xs text-muted-foreground">
                Need attention
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="feed" className="space-y-6">
          <TabsList>
            <TabsTrigger value="feed">Activity Feed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Real-time updates from all projects and team members
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-16 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {logs.map((log) => (
                      <div key={log.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0">
                          {getActionIcon(log.action)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-xs">
                                {log.user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-gray-900">
                              {log.user.name}
                            </span>
                            <Badge className={getActionColor(log.action)}>
                              {log.action.replace('_', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-1">
                            {log.details}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {formatTimeAgo(log.timestamp)}
                            </span>
                            {log.project && (
                              <span className="flex items-center">
                                <FolderOpen className="h-3 w-3 mr-1" />
                                {log.project.name}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Activity Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Activity chart visualization</p>
                      <p className="text-sm">Coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2" />
                    Project Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Project distribution chart</p>
                      <p className="text-sm">Coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Generated Reports
                </CardTitle>
                <CardDescription>
                  Download detailed reports and analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Weekly Activity Report</h3>
                      <p className="text-sm text-gray-600">Generated on Dec 16, 2025</p>
                    </div>
                    <Badge variant="outline">Ready</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Project Progress Summary</h3>
                      <p className="text-sm text-gray-600">Generated on Dec 15, 2025</p>
                    </div>
                    <Badge variant="outline">Ready</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Team Performance Metrics</h3>
                      <p className="text-sm text-gray-600">Generating...</p>
                    </div>
                    <Badge variant="secondary">Processing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  )
}
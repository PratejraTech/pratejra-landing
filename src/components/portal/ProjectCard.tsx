import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FolderOpen, Users, Calendar, ArrowRight } from 'lucide-react'

interface Project {
  id: string
  name: string
  description?: string
  status: 'planning' | 'active' | 'completed' | 'on_hold'
  owner: {
    name: string
    email: string
  }
  createdAt: string
  memberCount: number
  lastActivity?: string
}

interface ProjectCardProps {
  project: Project
  onViewDetails?: (projectId: string) => void
  onEdit?: (projectId: string) => void
}

export function ProjectCard({ project, onViewDetails, onEdit }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'planning':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'on_hold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary/20 hover:border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg leading-tight mb-1">{project.name}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {project.description}
            </CardDescription>
          </div>
          <Badge className={`${getStatusColor(project.status)} ml-3 shrink-0`}>
            {project.status.replace('_', ' ')}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Project Owner */}
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="text-xs bg-primary/10">
                {project.owner.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {project.owner.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {project.owner.email}
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-4 w-4" />
              <span>{project.memberCount} members</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(project.createdAt)}</span>
            </div>
          </div>

          {/* Last Activity */}
          {project.lastActivity && (
            <div className="text-xs text-gray-500">
              Last activity: {formatDate(project.lastActivity)}
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-2 pt-2">
            <Button
              size="sm"
              className="flex-1"
              onClick={() => onViewDetails?.(project.id)}
            >
              View Details
              <ArrowRight className="h-3 w-3 ml-2" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEdit?.(project.id)}
            >
              <FolderOpen className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
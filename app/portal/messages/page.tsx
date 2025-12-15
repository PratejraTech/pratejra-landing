'use client'

import { useState, useEffect } from 'react'
import { PortalLayout } from '../../../src/components/portal/PortalLayout'
import { PGPMessageComposer } from '../../../src/components/portal/PGPMessageComposer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../src/components/ui/card'
import { Button } from '../../../src/components/ui/button'
import { Badge } from '../../../src/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../../../src/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../src/components/ui/tabs'
import {
  MessageSquare,
  Send,
  Inbox,
  Eye,
  EyeOff,
  Shield
} from 'lucide-react'

interface Message {
  id: string
  sender: {
    id: string
    name: string
    email: string
  }
  recipient: {
    id: string
    name: string
    email: string
  }
  subject: string
  content: string // This will be encrypted
  isRead: boolean
  createdAt: string
  project?: {
    id: string
    name: string
  }
}

interface User {
  id: string
  name: string
  email: string
  publicKey?: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [decryptedContent, setDecryptedContent] = useState<string>('')

  useEffect(() => {
    loadMessages()
    loadUsers()
  }, [])

  const loadMessages = async () => {
    try {
      const response = await fetch('/api/messages')
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages)
      }
    } catch (error) {
      console.error('Failed to load messages:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadUsers = async () => {
    // Mock users data - in a real app, this would come from an API
    setUsers([
      {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@pratejra.build',
        publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\n...\n-----END PGP PUBLIC KEY BLOCK-----',
      },
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@pratejra.build',
        publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\n...\n-----END PGP PUBLIC KEY BLOCK-----',
      },
    ])
  }

  const handleSendMessage = async (messageData: {
    recipientId: string
    subject: string
    content: string
    encryptedContent: string
  }) => {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      })

      if (response.ok) {
        await loadMessages() // Refresh messages
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Failed to send message:', error)
      throw error
    }
  }

  const handleViewMessage = async (message: Message) => {
    setSelectedMessage(message)

    // In a real implementation, you would decrypt the message here
    // For now, we'll just show the encrypted content
    setDecryptedContent(message.content)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const unreadCount = messages.filter(m => !m.isRead).length

  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Secure Messages</h1>
          <p className="mt-2 text-gray-600">
            End-to-end encrypted communication for project collaboration
          </p>
        </div>

        <Tabs defaultValue="inbox" className="space-y-6">
          <TabsList>
            <TabsTrigger value="inbox" className="flex items-center">
              <Inbox className="h-4 w-4 mr-2" />
              Inbox
              {unreadCount > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="compose">
              <Send className="h-4 w-4 mr-2" />
              Compose
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inbox" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Messages List */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Messages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="animate-pulse">
                            <div className="h-16 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    ) : messages.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No messages yet</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                              selectedMessage?.id === message.id
                                ? 'bg-primary/10 border-primary'
                                : 'hover:bg-gray-50'
                            } ${!message.isRead ? 'bg-blue-50 border-blue-200' : ''}`}
                            onClick={() => handleViewMessage(message)}
                          >
                            <div className="flex items-start space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="" />
                                <AvatarFallback>
                                  {message.sender.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {message.sender.name}
                                  </p>
                                  {!message.isRead && (
                                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 truncate">
                                  {message.subject}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formatDate(message.createdAt)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Message Viewer */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      {selectedMessage ? selectedMessage.subject : 'Select a message'}
                    </CardTitle>
                    {selectedMessage && (
                      <CardDescription>
                        From {selectedMessage.sender.name} • {formatDate(selectedMessage.createdAt)}
                        {selectedMessage.project && (
                          <span className="ml-2">
                            • Project: {selectedMessage.project.name}
                          </span>
                        )}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {selectedMessage ? (
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Eye className="h-4 w-4 mr-2 text-green-600" />
                            <span className="text-sm font-medium text-green-600">
                              Encrypted Content (PGP)
                            </span>
                          </div>
                          <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono">
                            {decryptedContent}
                          </pre>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Reply
                          </Button>
                          <Button size="sm" variant="outline">
                            Forward
                          </Button>
                          <Button size="sm" variant="outline">
                            Archive
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <EyeOff className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Select a message to view its contents</p>
                        <p className="text-sm mt-1">
                          All messages are end-to-end encrypted
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compose">
            <PGPMessageComposer
              onSendMessage={handleSendMessage}
              recipients={users}
            />
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  )
}
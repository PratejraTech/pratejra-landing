'use client'

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Alert, AlertDescription } from '../ui/alert'
import { Badge } from '../ui/badge'
import { Loader2, Send, Key, Shield } from 'lucide-react'

interface PGPMessageComposerProps {
  onSendMessage: (message: {
    recipientId: string
    subject: string
    content: string
    encryptedContent: string
  }) => Promise<void>
  recipients?: Array<{
    id: string
    name: string
    email: string
    publicKey?: string
  }>
}

export function PGPMessageComposer({ onSendMessage, recipients = [] }: PGPMessageComposerProps) {
  const [recipientId, setRecipientId] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [isEncrypting, setIsEncrypting] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Load PGP library dynamically
  const [openpgp, setOpenpgp] = useState<typeof import('openpgp') | null>(null)

  useEffect(() => {
    const loadOpenPGP = async () => {
      try {
        const pgp = await import('openpgp')
        setOpenpgp(pgp)
      } catch (error) {
        console.error('Failed to load OpenPGP:', error)
        setError('PGP encryption not available')
      }
    }

    loadOpenPGP()
  }, [])

  const selectedRecipient = recipients.find(r => r.id === recipientId)

  const handleSendMessage = async () => {
    if (!recipientId || !subject || !content) {
      setError('Please fill in all fields')
      return
    }

    if (!selectedRecipient?.publicKey) {
      setError('Recipient does not have a PGP public key')
      return
    }

    if (!openpgp) {
      setError('PGP encryption not available')
      return
    }

    setIsEncrypting(true)
    setError('')

    try {
      // Encrypt the message content
      const publicKey = await openpgp.readKey({ armoredKey: selectedRecipient.publicKey })
      const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: content }),
        encryptionKeys: publicKey,
      })

      const encryptedContent = encrypted.toString()

      setIsEncrypting(false)
      setIsSending(true)

      await onSendMessage({
        recipientId,
        subject,
        content, // Store original for local display
        encryptedContent,
      })

      setSuccess('Message sent successfully!')
      setRecipientId('')
      setSubject('')
      setContent('')

      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Failed to send message:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsEncrypting(false)
      setIsSending(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 mr-2" />
          Secure Message Composer
        </CardTitle>
        <CardDescription>
          Send encrypted messages using PGP. Only the recipient can decrypt and read the content.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        {/* Recipient Selection */}
        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient</Label>
          <select
            id="recipient"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a recipient...</option>
            {recipients.map((recipient) => (
              <option key={recipient.id} value={recipient.id}>
                {recipient.name} ({recipient.email})
              </option>
            ))}
          </select>
          {selectedRecipient && (
            <div className="flex items-center space-x-2">
              <Badge variant={selectedRecipient.publicKey ? 'default' : 'destructive'}>
                <Key className="h-3 w-3 mr-1" />
                {selectedRecipient.publicKey ? 'PGP Enabled' : 'No PGP Key'}
              </Badge>
            </div>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Message subject..."
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <Label htmlFor="content">Message</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your secure message here..."
            rows={6}
          />
        </div>

        {/* Send Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSendMessage}
            disabled={isEncrypting || isSending || !recipientId || !subject || !content}
          >
            {isEncrypting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Encrypting...
              </>
            ) : isSending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Secure Message
              </>
            )}
          </Button>
        </div>

        {/* Security Notice */}
        <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
          <p className="font-medium mb-1">🔒 End-to-End Encryption</p>
          <p>
            Messages are encrypted using PGP before transmission.
            Only the intended recipient can decrypt and read the content.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
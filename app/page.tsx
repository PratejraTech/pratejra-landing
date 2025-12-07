import Home from '@/pages/Home'

// Revalidate every 24 hours
export const revalidate = 86400

export default function Page() {
  return <Home />
}
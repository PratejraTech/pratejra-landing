import { NextResponse } from 'next/server';

// Mock dynamic data - in a real app, this would come from a database
const projects = [
  {
    id: 1,
    name: 'Timeless Love',
    url: 'https://timelesslove.app',
    description: 'Stories, software, and playlists that celebrate long-term care and connection.',
    status: 'in-dev',
    statusColor: 'yellow',
    icon: 'Heart',
    isInternal: false,
  },
  {
    id: 2,
    name: 'Rise Strong',
    url: 'https://risestrong.app',
    description: 'Supportive resources for people rebuilding after hard seasons.',
    status: 'in-dev',
    statusColor: 'yellow',
    icon: 'Sprout',
    isInternal: false,
  },
  {
    id: 3,
    name: 'Pratejra',
    description: 'Calm builders pairing tech, care, and quiet strategy.',
    status: 'new',
    statusColor: 'green',
    icon: 'Sword',
    isInternal: true,
  },
  {
    id: 4,
    name: 'x0a.xyz',
    url: 'https://x0a.xyz',
    description: 'Developer tools and learning resources built in public.',
    status: 'coming-soon',
    statusColor: 'red',
    icon: 'Bot',
    isInternal: false,
  },
];

export async function GET() {
  try {
    // Simulate dynamic data fetching with potential delays
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
      success: true,
      data: projects,
      timestamp: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Projects API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
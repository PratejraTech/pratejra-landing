import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Community Radio Network',
    category: 'Signal Care',
    description: 'Built a quiet alert loop so hosts could flag harassment attempts in under five minutes.',
    image: '/api/placeholder/400/300',
    tags: ['Security', 'Community', 'Technology'],
  },
  {
    id: 2,
    title: 'Faith-Based Shelter System',
    category: 'Continuity',
    description: 'Digitized intake, stored records redundantly, and trained caretakers on daily exports.',
    image: '/api/placeholder/400/300',
    tags: ['Data', 'Training', 'Operations'],
  },
  {
    id: 3,
    title: 'Youth Climate Collective',
    category: 'Narrative Ops',
    description: 'Co-created myth-busting kits and multilingual social templates for rotating volunteers.',
    image: '/api/placeholder/400/300',
    tags: ['Education', 'Social Media', 'Climate'],
  },
  {
    id: 4,
    title: 'Indigenous Heritage Archive',
    category: 'Preservation',
    description: 'Developed secure digital repositories for cultural artifacts and oral histories.',
    image: '/api/placeholder/400/300',
    tags: ['Culture', 'Archives', 'Security'],
  },
  {
    id: 5,
    title: 'Refugee Support Network',
    category: 'Protection',
    description: 'Established encrypted communication channels and emergency response protocols.',
    image: '/api/placeholder/400/300',
    tags: ['Humanitarian', 'Security', 'Communication'],
  },
  {
    id: 6,
    title: 'Environmental Monitoring',
    category: 'Intelligence',
    description: 'Deployed autonomous sensor networks for real-time environmental data collection.',
    image: '/api/placeholder/400/300',
    tags: ['Environment', 'Technology', 'Data'],
  },
];

const PortfolioSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Field Operations
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Examples from our recent missions. Each operation begins with a natural question: "What eases the strain right now?"
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-slate-700 flex items-center justify-center">
                <Eye className="w-12 h-12 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-blue-400 bg-blue-900/20 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-mono text-blue-400 bg-blue-900/20 px-2 py-1 rounded mb-2 inline-block">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                <Eye className="w-16 h-16 text-slate-400" />
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
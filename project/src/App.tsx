import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import InfluencerCard from './components/InfluencerCard';
import FilterBar from './components/FilterBar';

const INFLUENCERS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    followers: '1.2M',
    price: '$2,000',
    rating: 4.8,
    platforms: ['Instagram', 'Youtube', 'Twitter'],
    description: 'Fashion and lifestyle content creator specializing in sustainable fashion and mindful living.',
  },
  {
    id: 2,
    name: 'Alex Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Tech',
    followers: '850K',
    price: '$3,000',
    rating: 4.9,
    platforms: ['Youtube', 'Twitter'],
    description: 'Tech reviewer and digital lifestyle expert focusing on the latest gadgets and productivity tools.',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Fitness',
    followers: '2M',
    price: '$2,500',
    rating: 4.7,
    platforms: ['Instagram', 'Youtube'],
    description: 'Certified fitness trainer and wellness coach sharing workout tips and healthy lifestyle advice.',
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredInfluencers = INFLUENCERS.filter((influencer) => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influencer.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || influencer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">InfluencerMatch</h1>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              List Your Profile
            </button>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <FilterBar
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInfluencers.map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              {...influencer}
            />
          ))}
        </div>

        {filteredInfluencers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No influencers found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
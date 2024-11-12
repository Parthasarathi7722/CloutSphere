import React from 'react';
import { Instagram, Youtube, Twitter, Mail, DollarSign, Users, Star } from 'lucide-react';

interface InfluencerProps {
  name: string;
  image: string;
  category: string;
  followers: string;
  price: string;
  rating: number;
  platforms: string[];
  description: string;
}

export default function InfluencerCard({
  name,
  image,
  category,
  followers,
  price,
  rating,
  platforms,
  description,
}: InfluencerProps) {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{category}</p>
          </div>
          <div className="flex gap-2">
            {platforms.map((platform) => (
              <span key={platform} className="text-gray-600">
                {getPlatformIcon(platform)}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">{followers}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">From {price}</span>
          </div>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
          <Mail className="w-4 h-4" />
          Contact
        </button>
      </div>
    </div>
  );
}
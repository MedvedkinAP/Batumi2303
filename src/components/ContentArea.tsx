import React from 'react';

interface ContentAreaProps {
  section: string;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ section }) => {
  const content: Record<string, { title: string, image: string, text: string }> = {
    howToGet: {
      title: 'How to Get to Batumi',
      image: 'https://images.unsplash.com/photo-1600264302287-86e5414c10d0?auto=format&fit=crop&w=800',
      text: 'Batumi is accessible by air through Batumi International Airport, by train from Tbilisi, or by bus from major Georgian cities.'
    },
    beachesAttractions: {
      title: 'Beaches & Attractions',
      image: 'https://images.unsplash.com/photo-1600264303870-83b12015bd51?auto=format&fit=crop&w=800',
      text: 'Explore Batumi\'s beautiful beaches and attractions, including the Alphabetic Tower, Batumi Boulevard, and the Dancing Fountains.'
    }
    // Add more sections as needed
  };

  const currentContent = content[section] || {
    title: 'Select a section',
    image: '',
    text: 'Please select a section from the navigation menu to view content.'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">{currentContent.title}</h2>
      {currentContent.image && (
        <img
          src={currentContent.image}
          alt={currentContent.title}
          className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700 text-sm sm:text-base">{currentContent.text}</p>
    </div>
  );
}
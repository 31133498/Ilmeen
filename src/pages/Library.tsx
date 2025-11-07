import React, { useState } from 'react';
import { Search, Grid3X3, List, Star, Trash2, Play, Eye, Plus, Folder, BookOpen, FileText, Building } from 'lucide-react';

export const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = ['All', 'Recent', 'Favorites', 'Grammar Books', 'Quranic Studies'];
  
  const libraryItems = [
    {
      id: 1,
      title: 'Al-Ajurrumiyyah - Chapter 3',
      progress: 75,
      dateAdded: '2024-01-15',
      category: 'Grammar Books',
      thumbnail: BookOpen,
      isFavorite: true
    },
    {
      id: 2,
      title: 'Matn Al-Zubad',
      progress: 100,
      dateAdded: '2024-01-10',
      category: 'Grammar Books',
      thumbnail: BookOpen,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Qawaid Al-Lughah',
      progress: 60,
      dateAdded: '2024-01-20',
      category: 'Grammar Books',
      thumbnail: FileText,
      isFavorite: true
    },
    {
      id: 4,
      title: 'Surah Al-Fatiha Analysis',
      progress: 90,
      dateAdded: '2024-01-25',
      category: 'Quranic Studies',
      thumbnail: Building,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Hadith Collection - Bukhari',
      progress: 45,
      dateAdded: '2024-01-18',
      category: 'Hadith Collections',
      thumbnail: FileText,
      isFavorite: true
    }
  ];

  const folders = [
    { name: 'All Texts', count: 24, icon: Folder },
    { name: 'Grammar Books', count: 8, icon: BookOpen },
    { name: 'Quranic Studies', count: 6, icon: Building },
    { name: 'Hadith Collections', count: 10, icon: FileText }
  ];

  const filteredItems = libraryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || 
                         selectedFilter === 'Recent' ||
                         (selectedFilter === 'Favorites' && item.isFavorite) ||
                         item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Library</h1>
          
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search texts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                <List className="w-4 h-4" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === filter
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Folders/Collections Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">Collections</h2>
              <div className="space-y-2">
                {folders.map((folder, index) => {
                  const IconComponent = folder.icon;
                  return (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-teal-600" />
                        <span className="text-sm font-medium text-gray-700">{folder.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {folder.count}
                      </span>
                    </button>
                  );
                })}
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left text-teal-600">
                  <Plus className="w-5 h-5" />
                  <span className="text-sm font-medium">Create New Folder</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="lg:col-span-3">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredItems.map((item) => {
                  const ThumbnailIcon = item.thumbnail;
                  return (
                    <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <ThumbnailIcon className="w-8 h-8 text-teal-600" />
                        <div className="flex gap-2">
                          <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                            <Star className={`w-4 h-4 ${item.isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                          </button>
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.dateAdded}</p>
                      
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600">Progress</span>
                          <span className="text-xs font-semibold text-gray-800">{item.progress}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1">
                          <Play className="w-4 h-4" /> Play
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1">
                          <Eye className="w-4 h-4" /> View
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="divide-y divide-gray-200">
                  {filteredItems.map((item) => {
                    const ThumbnailIcon = item.thumbnail;
                    return (
                      <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <ThumbnailIcon className="w-6 h-6 text-teal-600" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.category} • {item.dateAdded}</p>
                          </div>
                          <div className="w-32">
                            <div className="bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-teal-600 h-2 rounded-full"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                            <div className="text-xs text-gray-600 mt-1">{item.progress}%</div>
                          </div>
                          <div className="flex gap-2">
                            <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                              <Star className={`w-4 h-4 ${item.isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                            </button>
                            <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm py-1 px-3 rounded-lg transition-colors flex items-center gap-1">
                              <Play className="w-3 h-3" />
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-lg transition-colors flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
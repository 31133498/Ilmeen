import React, { useState } from 'react';
import { mockUser } from '../data/mockData';

export const Settings: React.FC = () => {
  const [profile, setProfile] = useState({
    name: mockUser.name,
    email: mockUser.email,
    language: 'english'
  });

  const [preferences, setPreferences] = useState({
    audioVoice: 'male',
    playbackSpeed: 1,
    autoSave: true,
    notifications: true
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile</h2>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {profile.name.charAt(0)}
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                Upload New Photo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Language Preference</label>
              <select
                value={profile.language}
                onChange={(e) => setProfile({...profile, language: e.target.value})}
                className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="english">English</option>
                <option value="yoruba">Yorùbá</option>
              </select>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Audio Voice Selection</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="audioVoice"
                      value="male"
                      checked={preferences.audioVoice === 'male'}
                      onChange={(e) => setPreferences({...preferences, audioVoice: e.target.value})}
                      className="mr-2"
                    />
                    Male Voice
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="audioVoice"
                      value="female"
                      checked={preferences.audioVoice === 'female'}
                      onChange={(e) => setPreferences({...preferences, audioVoice: e.target.value})}
                      className="mr-2"
                    />
                    Female Voice
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Playback Speed: {preferences.playbackSpeed}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.25"
                  value={preferences.playbackSpeed}
                  onChange={(e) => setPreferences({...preferences, playbackSpeed: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.5x</span>
                  <span>1x</span>
                  <span>1.5x</span>
                  <span>2x</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.autoSave}
                    onChange={(e) => setPreferences({...preferences, autoSave: e.target.checked})}
                    className="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Auto-save progress</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.notifications}
                    onChange={(e) => setPreferences({...preferences, notifications: e.target.checked})}
                    className="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Enable notifications</span>
                </label>
              </div>
            </div>
          </div>

          {/* Account Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Account</h2>
            
            <div className="space-y-4">
              <button className="w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium">
                Change Password
              </button>
              
              <button className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                Export My Data
              </button>
              
              <button 
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Delete Account
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
              Save Changes
            </button>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Account</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently lost.
              </p>
              <div className="flex gap-3 justify-end">
                <button 
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
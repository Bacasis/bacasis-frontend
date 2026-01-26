import { useState, useEffect } from 'react';
import { Layout } from '../../components/layout/Layout';
import { MusicianModal } from '../../components/musicians/MusicianModal';
import { musiciansService } from '../../services/musiciansService';
import type { Musician, MusicianFormData } from '../../types';
import { INSTRUMENTS } from '../../types';

export const MusiciansPage: React.FC = () => {
  const [musicians, setMusicians] = useState<Musician[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstrument, setSelectedInstrument] = useState('All Instruments');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMusician, setEditingMusician] = useState<Musician | null>(null);

  useEffect(() => {
    loadMusicians();
  }, [searchTerm, selectedInstrument]);

  const loadMusicians = async () => {
    try {
      setLoading(true);
      const data = await musiciansService.getMusicians(
        searchTerm,
        selectedInstrument !== 'All Instruments' ? selectedInstrument : undefined
      );
      setMusicians(data);
    } catch (error) {
      console.error('Failed to load musicians:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMusician = () => {
    setEditingMusician(null);
    setIsModalOpen(true);
  };

  const handleEditMusician = (musician: Musician) => {
    setEditingMusician(musician);
    setIsModalOpen(true);
  };

  const handleSaveMusician = async (data: MusicianFormData) => {
    if (editingMusician) {
      await musiciansService.updateMusician(editingMusician.id, data);
    } else {
      await musiciansService.createMusician(data);
    }
    await loadMusicians();
  };

  const handleDeleteMusician = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this musician?')) {
      try {
        await musiciansService.deleteMusician(id);
        await loadMusicians();
      } catch (error) {
        console.error('Failed to delete musician:', error);
        alert('Failed to delete musician');
      }
    }
  };

  return (
    <Layout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Musicians</h1>
          <p className="text-gray-600 mt-1">Manage your orchestra's musicians.</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search musicians..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div className="w-full md:w-64">
              <label htmlFor="instrument" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Instrument
              </label>
              <select
                id="instrument"
                value={selectedInstrument}
                onChange={(e) => setSelectedInstrument(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="All Instruments">All Instruments</option>
                {INSTRUMENTS.map((instrument) => (
                  <option key={instrument} value={instrument}>
                    {instrument}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAddMusician}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
            >
              Add Musician
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading musicians...</div>
          ) : musicians.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No musicians found. Click "Add Musician" to create one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Instrument
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {musicians.map((musician) => (
                    <tr key={musician.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{musician.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{musician.instrument}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{musician.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{musician.phone || '-'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            musician.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {musician.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleEditMusician(musician)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteMusician(musician.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <MusicianModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveMusician}
        musician={editingMusician}
      />
    </Layout>
  );
};

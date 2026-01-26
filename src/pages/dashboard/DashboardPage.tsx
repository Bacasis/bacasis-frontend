import { Layout } from '../../components/layout/Layout';

export const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome to Orchestra Tracker</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Musicians</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">-</p>
              </div>
              <div className="text-4xl">🎵</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Rehearsals</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">-</p>
              </div>
              <div className="text-4xl">📅</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Members</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">-</p>
              </div>
              <div className="text-4xl">✓</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <p className="text-gray-600">
            This is a placeholder page. Dashboard features will be implemented here.
          </p>
        </div>
      </div>
    </Layout>
  );
};

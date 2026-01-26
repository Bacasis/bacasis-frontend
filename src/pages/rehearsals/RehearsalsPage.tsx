import { Layout } from '../../components/layout/Layout';

export const RehearsalsPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Rehearsals</h1>
          <p className="text-gray-600 mt-1">Schedule and manage orchestra rehearsals.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="text-6xl mb-4">📅</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Rehearsals Management</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            This feature is coming soon. Here you'll be able to schedule rehearsals, track
            attendance, and manage practice sessions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

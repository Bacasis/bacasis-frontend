import { Layout } from '../../components/layout/Layout';

export const StatisticsPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Statistics</h1>
          <p className="text-gray-600 mt-1">View analytics and insights about your orchestra.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="text-6xl mb-4">📈</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Statistics & Analytics</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            This feature is coming soon. Here you'll be able to view detailed statistics about
            musicians, attendance rates, instrument distribution, and more.
          </p>
        </div>
      </div>
    </Layout>
  );
};

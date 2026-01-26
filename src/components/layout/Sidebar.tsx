import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Musicians', path: '/musicians', icon: '🎵' },
  { name: 'Rehearsals', path: '/rehearsals', icon: '📅' },
  { name: 'Statistics', path: '/statistics', icon: '📈' },
];

export const Sidebar: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="w-64 bg-blue-600 text-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-blue-500">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎼</span>
          <h1 className="text-xl font-bold">Orchestra Tracker</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-blue-500">
        <div className="px-4 py-3 bg-blue-500 rounded-lg">
          <p className="font-semibold">{user?.username || 'User'}</p>
          <p className="text-sm text-blue-200">Orchestra Admin / Conductor</p>
        </div>
        <button
          onClick={logout}
          className="w-full mt-2 px-4 py-2 text-sm text-blue-100 hover:bg-blue-500 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

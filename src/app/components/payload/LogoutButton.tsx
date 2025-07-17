'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/users/logout?allSessions=false', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        console.error('Logout failed');
      }
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 1rem' }}>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: '#d9534f',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
}

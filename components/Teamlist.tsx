// src/components/Team.tsx
"use client"
import React, { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
}

const Team: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container} className='bg-cover relative flex-wrap container'>
      <h2 className='text-black container  bold-52 lg:bold-50 space-x-5 space-y-9'>Our Team</h2>
      <div style={styles.teamContainer} className=' container flex-col column items-center'>
        {users.map((user, index) => (
          <div key={index} style={styles.card}>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} style={styles.avatar} />
            <h3 style={styles.name}>
              {user.name.first} {user.name.last}
            </h3>
            <p className='relative regular-8 ' style={styles.email}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '20px',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    gap: '20px',
  },
  card: {
    width: '200px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  avatar: {
    width: '100%',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  name: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  email: {
    color: '#555',
  },
};

export default Team;

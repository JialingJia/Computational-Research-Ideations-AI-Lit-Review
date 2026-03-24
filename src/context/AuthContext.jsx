import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, getAdditionalUserInfo } from 'firebase/auth';
import { auth, githubProvider } from '../firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [githubMetadata, setGithubMetadata] = useState(() => {
    const saved = localStorage.getItem('github_metadata');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => { 
      setUser(u); 
      setLoading(false); 
    });
    return unsub;
  }, []);

  async function signInWithGithub() {
    try { 
      const result = await signInWithPopup(auth, githubProvider);
      const additionalInfo = getAdditionalUserInfo(result);
      if (additionalInfo?.username) {
        const meta = {
          username: additionalInfo.username,
          githubId: additionalInfo.profile?.id,
          profileUrl: `https://github.com/${additionalInfo.username}`,
        };
        setGithubMetadata(meta);
        localStorage.setItem('github_metadata', JSON.stringify(meta));
      }
    }
    catch (e) { console.error('GitHub sign-in failed:', e); }
  }

  async function signOut() {
    try { 
      await firebaseSignOut(auth); 
      setGithubMetadata(null);
      localStorage.removeItem('github_metadata');
    }
    catch (e) { console.error('Sign-out failed:', e); }
  }

  if (loading) return null;
  return (
    <AuthContext.Provider value={{ user, githubMetadata, signInWithGithub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

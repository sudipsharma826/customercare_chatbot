'use client';
import { useState, useEffect } from 'react';
import { isAuthorized } from '@/lib/auth/isAuthorized';

export function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        async function getUser() {
            setLoading(true);
            setError(null);
            // Try localStorage first
            const localUser = localStorage.getItem('user_info');
            if (localUser) {
                try {
                    setUser(JSON.parse(localUser));
                    setLoading(false);
                    return;
                } catch (e) {
                    localStorage.removeItem('user_info');
                    setUser(null);
                    setError('Error parsing user info from localStorage');
                }
            }
            // If not in localStorage, check cookies/session via isAuthorized
            try {
                const userInfo = await isAuthorized();
                if (userInfo) {
                    setUser(userInfo);
                    localStorage.setItem('user_info', JSON.stringify(userInfo));
                }
            } catch (e) {
                setUser(null);
                setError('Error fetching user info');
            }
            setLoading(false);
        }
        getUser();
    }, []);

    return { user, loading, error };
}
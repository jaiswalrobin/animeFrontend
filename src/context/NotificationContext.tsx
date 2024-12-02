'use client'
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type NotificationType = 'info' | 'success' | 'error';

interface Notification {
  message: string;
  type: NotificationType;
}

interface NotificationContextType {
  showNotification: (message: string, type?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context.showNotification;
}

interface NotificationProviderProps {
  children: ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [visible, setVisible] = useState(false);

  const showNotification = useCallback((message: string, type: NotificationType = 'info') => {
    setNotification({ message, type });
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
    setTimeout(() => setNotification(null), 3300);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {notification && (
        <div className={`notification ${notification.type} ${visible ? 'visible' : ''}`}>
            {notification.message}
        </div>
      )}
      {children}
    </NotificationContext.Provider>
  );
}

import { createContext, ReactNode, useState } from 'react';
import { IPost, IUser } from '../interfaces';

type AppContextType = {
  post: (IPost & { user?: IUser }) | null;
  setPost: (post: (IPost & { user?: IUser }) | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [post, setPost] = useState<(IPost & { user?: IUser }) | null>(null);

  const value = {
    post,
    setPost,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext }
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ContextState {
  state: boolean;
  style: string;
  open: () => void;
  close: () => void;
}

interface NavbarProviderProps {
  children: ReactNode;
}

const NavbarContext = createContext({} as ContextState);

export default function NavbarProvider({ children }: NavbarProviderProps) {
  const navbar =
    'flex flex-col w-64 h-screen fixed transition-transform duration-500 md:duration-50 top-0 bg-secondary right-0 md:w-auto md:h-auto md:static md:flex-row gap-5 items-center justify-center h-20';

  const [state, setState] = useState<boolean>(false);
  const style = state ? `${navbar} transform-none` : `${navbar} translate-x-72 md:transform-none `;
  const open = () => {
    setTimeout(() => {
      setState(true);
    }, 75);
  };
  const close = () => {
    setTimeout(() => {
      setState(false);
    }, 75);
  };

  const memoizedValue = useMemo(
    () => ({
      state,
      style,
      open,
      close,
    }),
    [state, style, open, close],
  );

  return <NavbarContext.Provider value={memoizedValue}>{children}</NavbarContext.Provider>;
}

export function useNavbar() {
  const ctx = useContext(NavbarContext);
  const { state, style, open, close } = ctx;
  return { state, style, open, close };
}

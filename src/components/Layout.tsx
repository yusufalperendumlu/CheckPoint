import useTheme from "@/hooks/useTheme";

import Header from "@/components/Header";

interface ILayoutProps {
  children: React.ReactNode;
  isDarkMode?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <div>
      <Header title="API Health" isDarkMode={theme === "dark"} />
      {children}
    </div>
  );
};

export default Layout;

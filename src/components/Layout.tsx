import Header from "@/components/Header";

interface ILayoutProps {
  children: React.ReactNode;
  isDarkMode?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({ children, isDarkMode }) => {
  return (
    <div>
      <Header title="API Health" isDarkMode={isDarkMode} />
      {children}
    </div>
  );
};

export default Layout;

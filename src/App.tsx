import ReceptionPage from "@/views/reception/ReceptionPage";
import useTheme from "@/hooks/useTheme";

import Layout from "@/components/Layout";

function App() {
  const theme = useTheme();

  console.log(theme);

  return (
    <>
      <Layout isDarkMode={theme === "dark"}>
        <ReceptionPage />
      </Layout>
    </>
  );
}

export default App;

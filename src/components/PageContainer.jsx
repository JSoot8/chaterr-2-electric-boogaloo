import Header from "./Header";
import Sidebar from "./Sidebar";

function PageContainer({ children }) {
  return (
    <div className="pageContainer ">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}

export default PageContainer;

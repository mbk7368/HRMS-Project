import {Sidebar} from "/src/components/Sidebar.jsx";
import { Navbar } from '/src/components/Navbar';
import "./Documents.css"

const Documents = () => {
    return (
        <div className='DocumentsContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Documents" navText="Manage Documents" />
            




        </div>
        </div>
    );
};

export default Documents;
import './App.css';
import Header from './components/Header/Header';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBeneficiaries from './pages/CreateBeneficiaries';
import EditBeneficiaries from './pages/EditBeneficiaries';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Home = lazy(() => import('./pages/Home'));
  return (
    <div className="App">
      <Router>
        <Header />
        <ToastContainer />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<CreateBeneficiaries />} />
            <Route exact path="/edit/:id" element={<EditBeneficiaries />} />
            {/* <Route exact path="/*" element={< />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

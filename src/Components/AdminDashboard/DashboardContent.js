import React, { useState } from 'react';
import FlatForm from './FlatForm';
import ApartmentForm from './ApartmentForm';
import ResidentialForm from './ResidentialForm';

function DashboardContent() {
  const [showFlatForm, setShowFlatForm] = useState(false);
  const [showResidentialForm, setShowResidentialForm] = useState(false);
  const [showApartmentForm, setShowApartmentForm] = useState(false);

  const handleUploadClick = (formType) => {
    if (formType === 'flat') {
      setShowFlatForm(true);
    } else if (formType === 'residential') {
      setShowResidentialForm(true);
    } else if (formType === 'apartment') {
      setShowApartmentForm(true);
    }
  };

  const handleCloseForm = () => {
    setShowFlatForm(false);
    setShowResidentialForm(false);
    setShowApartmentForm(false);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
        <div>
          <span className="text-lg font-semibold">INDEPENDENT FLATS/ VILLAS</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleUploadClick('flat')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Upload
          </button>
        </div>
        {showFlatForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg z-50">
              <FlatForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
        <div>
          <span className="text-lg font-semibold">RESIDENTIAL LANDS</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleUploadClick('residential')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Upload
          </button>
        </div>
        {showResidentialForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg z-50">
              <ResidentialForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
        <div>
          <span className="text-lg font-semibold">APARTMENTS</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleUploadClick('apartment')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Upload
          </button>
        </div>
        {showApartmentForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg z-50">
              <ApartmentForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardContent;

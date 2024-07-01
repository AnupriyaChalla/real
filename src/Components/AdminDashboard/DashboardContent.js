import React, { useState } from 'react';
import FlatForm from './FlatForm'; // Import your PropertyForm component

function DashboardContent() {
  const [showForm, setShowForm] = useState(false);

  const handleUploadClick = () => {
    setShowForm(true); // Show the form when Upload button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form when Close button is clicked
  };

  return (
    <>
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Left Content */}
      <div>
        <span className="text-lg font-semibold">FLATS</span>
      
      </div>

      {/* Right Buttons */}
      <div className="flex items-center space-x-4">
        {/* Upload Button */}
        <button
          onClick={handleUploadClick} // Call handleUploadClick when Upload button is clicked
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Upload
        </button>

        {/* Edit Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Edit
        </button>

        {/* Delete Button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
          Delete
        </button>
      </div>

      {/* Pop-up Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg z-50">
            {/* PropertyForm component */}
            <FlatForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>

<div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
{/* Left Content */}
<div>
  <span className="text-lg font-semibold">RESIDENTIAL LANDS/HOUSES</span>

</div>

{/* Right Buttons */}
<div className="flex items-center space-x-4">
  {/* Upload Button */}
  <button
    onClick={handleUploadClick} // Call handleUploadClick when Upload button is clicked
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
  >
    Upload
  </button>

  {/* Edit Button */}
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
    Edit
  </button>

  {/* Delete Button */}
  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
    Delete
  </button>
</div>

{/* Pop-up Form */}
{showForm && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg z-50">
      {/* PropertyForm component */}
      <FlatForm onClose={handleCloseForm} />
    </div>
  </div>
)}
</div>


<div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
{/* Left Content */}
<div>
  <span className="text-lg font-semibold">PLOTS/VILLAS</span>

</div>

{/* Right Buttons */}
<div className="flex items-center space-x-4">
  {/* Upload Button */}
  <button
    onClick={handleUploadClick} // Call handleUploadClick when Upload button is clicked
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
  >
    Upload
  </button>

  {/* Edit Button */}
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
    Edit
  </button>

  {/* Delete Button */}
  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
    Delete
  </button>
</div>

{/* Pop-up Form */}
{showForm && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg z-50">
      {/* PropertyForm component */}
      <FlatForm onClose={handleCloseForm} />
    </div>
  </div>
)}
</div>

</>

  );
}

export default DashboardContent;

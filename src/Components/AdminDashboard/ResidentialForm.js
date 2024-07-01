import React, { useState } from 'react';

const ResidentialForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    price: '',
    imageFiles: [],
    videoFile: null,
  });
  const [uploadMessage, setUploadMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setUploadMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('location', formData.location);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);

    formData.imageFiles.forEach((file, index) => {
      formDataToSend.append(`image_data${index + 1}`, file);
    });

    if (formData.videoFile) {
      formDataToSend.append('video_data', formData.videoFile);
    }

    try {
      const response = await fetch('http://localhost/resipost.php', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to upload property. Server returned ' + response.status);
      }

      const data = await response.text();

      setUploadMessage(data);

      if (data.startsWith('Property uploaded successfully.')) {
        setFormData({
          location: '',
          description: '',
          price: '',
          imageFiles: [],
          videoFile: null,
        });

        setTimeout(() => {
          setUploadMessage('');
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error uploading property:', error.message);
      setUploadMessage('Failed to upload property.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      const filesArray = Array.from(e.target.files);
      const trimmedFilesArray = filesArray.slice(0, Math.min(filesArray.length, 8));
      setFormData({ ...formData, imageFiles: trimmedFilesArray });
    } else if (e.target.name === 'video') {
      const videoFile = e.target.files[0];
      setFormData({ ...formData, videoFile });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 w-96 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Upload Residential Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Images (4 to 8 images allowed)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              multiple
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="video" className="block text-sm font-medium text-gray-700">
              Video (Optional)
            </label>
            <input
              type="file"
              id="video"
              name="video"
              accept="video/*"
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
              onClick={handleCancel}
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          {uploadMessage && (
            <div className="mt-4 text-sm text-green-600">{uploadMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResidentialForm;

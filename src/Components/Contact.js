import React, { useState } from 'react';
import Axios from 'axios';

function ContactPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = "http://localhost/index.php"; 
  const [data, setData] = useState({
    Name: "",
    Email:"",
    Mobile:"",
    Radio: "",
    Message: ""
  });

  function submitForm(e) {
    e.preventDefault();

    setIsSubmitting(true);

    Axios.post(url, {
      Name: data.Name,
      Email: data.Email,
      Mobile: data.Mobile,
      Radio: data.Radio,
      Message: data.Message
  })
  
      .then(res => {
        console.log(res.data);
        setSuccessMessage("We will contact you soon..! Thank You");
        setErrorMessage("");
        // Clear form fields after successful submission
        setData({ Name: "", Mobile: "", Email: "", Radio: "", Message: "" });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch(error => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again later.");
        setSuccessMessage("");

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      })
      .finally(() => {
        // Enable the submit button after the request is completed
        setIsSubmitting(false);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-sans text-center mb-8">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-sans mb-4">FIND YOUR HOME!!</h3>
            <p className="mb-4">
              Ready to make your move? <br />
              Contact us now and find your perfect property match..!!
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <form method="post" onSubmit={submitForm} className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="Name" className="block text-sm font-semibold mb-2">Name<span className="text-red-500">*</span></label>
                  <input type="text" id="Name" 
                  name="Name"
                   required 
                  className="w-full border border-gray-600 bg-gray-700 rounded px-4 py-2 text-white" value={data.Name} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="Email" className="block text-sm font-semibold mb-2">Email <span className="text-red-500">*</span></label>
                <input type="email" id="Email" name="Email" required className="w-full border border-gray-600 bg-gray-700 rounded px-4 py-2 text-white" value={data.Email}
                  onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Mobile" className="block text-sm font-semibold mb-2">Mobile Number <span className="text-red-500">*</span></label>
                <input type="text" id="Mobile" name="Mobile" required className="w-full border border-gray-600 bg-gray-700 rounded px-4 py-2 text-white" value={data.Mobile}
                  onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Interested in:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="Radio" value="sell"  className="form-radio text-blue-500"
                      checked={data.Radio === 'sell'} onChange={handleChange} />
                    <span className="ml-2">Sell</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="Radio" value="rent" className="form-radio text-blue-500"
                      checked={data.Radio === 'rent'} onChange={handleChange} />
                    <span className="ml-2">Rent</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="Radio" value="other"  className="form-radio text-blue-500"
                      checked={data.Radio === 'other'} onChange={handleChange} />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="Message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea id="Message" name="Message" required className="w-full border border-gray-600 bg-gray-700 rounded px-4 py-2 text-white" value={data.Message}
                  onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
            {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

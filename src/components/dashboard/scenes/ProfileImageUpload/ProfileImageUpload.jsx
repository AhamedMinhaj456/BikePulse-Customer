import React, { useState } from 'react';
import axios from 'axios';

const shopId = 2;

const ProfileImageUpload = ({ shopId }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('shopId', shopId);
      await axios.post('http://localhost:8095/shop/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Profile image uploaded successfully');
    } catch (error) {
      console.error('Failed to upload profile image:', error);
      alert('Failed to upload profile image');
    }
  };

  return (
    <div>
      <h2>Upload Profile Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Choose File:</label>
          <input type="file" className="form-control" id="file" name="file" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default ProfileImageUpload;

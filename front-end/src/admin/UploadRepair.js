import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './pages.css'
import PriceCalculator from './PriceCalculator';

function UploadRepair() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    description: '',
    image: null,
  });
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('uploadRepairData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('uploadRepairData', JSON.stringify(formData));
  }, [formData]);

  const handlePublishClick = async () => {
    try {
      if (formData.image) {
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('price', formData.price);
        formDataToSubmit.append('stock', formData.stock);
        formDataToSubmit.append('category', formData.category);
        formDataToSubmit.append('description', formData.description);
        formDataToSubmit.append('image', formData.image);

        const response = await fetch('/api2/create-product', {
          method: 'POST',
          body: formDataToSubmit,
        });

        if (response.ok) {
          alert('Repair data uploaded successfully.');
          setFormData({
            repairName: '',
            repairPrice: '',
            stock: '',
            category: '',
            description: '',
            image: null,
          });
          setImageUrl('');
          setError(null);
        } else {
          const responseData = await response.json();
          setError(responseData.message);
        }
      } else {
        setError('Please select an image before publishing.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred while uploading. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
    setError(null);

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setImageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='sidebar'>
      <Sidebar />
      <div className='upload'>
        <div className='upload-row'>
          <h1 className='upload-text'>Upload Repair</h1>
          <button className='publish' onClick={handlePublishClick}>
            Publish
          </button>
        </div>

        <div className='upload-row1'>
          <div className='upload-service'>
            <div className='upload-container'>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt='Repair Preview'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <label htmlFor='fileInput'>
                    <img className='img-up' src='./images/upload-service.svg' alt='Upload Service' />
                  </label>
                  <input
                    type='file'
                    id='fileInput'
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                   
                  />
                </>
              )}
            </div>
            <div className='input-container'>
              <input
                className='input-r'
                type='text'
                placeholder='Repair Name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                
              />
              <input
                className='input-r'
                type='number'
                placeholder='Repair Price'
                name='price'
                value={formData.price}
                onChange={handleInputChange}
              />
              <input
                className='input-r'
                type='number'
                placeholder='Stock'
                name='stock'
                value={formData.stock}
                onChange={handleInputChange}
              />
              <select
                className='input-r'
                name='category'
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value=''>Select Category</option>
                <option value='screen'>Screen</option>
                <option value='battery'>Battery</option>
                <option value='charging-port'>Charging Port</option>
                <option value='back-glass'>Back Glass</option>
              </select>
              <textarea
                className='input-r'
                placeholder='Description'
                name='description'
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='preview-container'>
            <h1 className='preview-header'>Preview</h1>
            <p className='preview-small'>
              See the preview of the product. In the same way, users will see a
              product in the marketplace
            </p>
            <button className='see-preview'>See Preview</button>
          </div>
        </div>
<PriceCalculator/>
        {error && <p className='error-message4'>{error}</p>}
      </div>
    </div>
  );
}

export default UploadRepair;

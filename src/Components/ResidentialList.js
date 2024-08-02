import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ResidentailList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fullscreenCarousel, setFullscreenCarousel] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://theabhiestates.com/resiget.php');
            if (Array.isArray(response.data)) {
                setProperties(response.data);
            } else {
                setProperties([]);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openFullscreenCarousel = (property) => {
        setFullscreenCarousel(property);
    };

    const closeFullscreenCarousel = () => {
        setFullscreenCarousel(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Residential Lands</h1>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : properties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {properties.map(property => (
                        <div key={property.ID} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Carousel
                                showThumbs={false}
                                autoPlay={true}
                                interval={2000}
                                infiniteLoop={true}
                                onClickItem={() => openFullscreenCarousel(property)}
                            >
                                {Object.values(property.MediaFiles)
                                    .filter(media => media !== 'none')
                                    .map((media, index) => {
                                        const isImage = media.toLowerCase().endsWith('.jpg') || media.toLowerCase().endsWith('.jpeg') || media.toLowerCase().endsWith('.png');
                                        const mediaUrl = `https://theabhiestates.com/${media}`; // Adjust this URL format based on your server setup
                                        return (
                                            <div key={index}>
                                                {isImage ? (
                                                    <img
                                                        src={mediaUrl}
                                                        alt={`Property ${property.ID} Media ${index + 1}`}
                                                        className="w-full h-48 object-cover"
                                                        onError={(e) => {
                                                            console.error(`Failed to load image for Property ${property.ID} Media ${index + 1}`, e);
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="relative w-full h-48">
                                                        <video
                                                            src={mediaUrl}
                                                            controls
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                console.error(`Failed to load video for Property ${property.ID}`, e);
                                                            }}
                                                        />
                                                        <button
                                                            className="absolute inset-0 flex items-center justify-center text-white text-4xl"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            &#9658;
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                            </Carousel>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{property.Location}</h2>
                                <p className="text-gray-700 mb-2">{property.Description}</p>
                                <p className="text-gray-800 font-bold">{property.Price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No properties found with images or videos.</p>
            )}

            {fullscreenCarousel && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
                    <div className="relative w-full max-w-4xl h-full md:h-auto bg-white rounded-lg shadow-lg">
                        <Carousel
                            showThumbs={false}
                            autoPlay={true}
                            interval={2000}
                            infiniteLoop={true}
                            className="h-full"
                        >
                            {Object.values(fullscreenCarousel.MediaFiles)
                                .filter(media => media !== 'none')
                                .map((media, index) => {
                                    const isImage = media.toLowerCase().endsWith('.jpg') || media.toLowerCase().endsWith('.jpeg') || media.toLowerCase().endsWith('.png');
                                    const mediaUrl = `https://theabhiestates.com/${media}`;
                                    return (
                                        <div key={index} className="h-full flex items-center justify-center">
                                            {isImage ? (
                                                <img
                                                    src={mediaUrl}
                                                    alt={`Fullscreen Property ${fullscreenCarousel.ID} Media ${index + 1}`}
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        console.error(`Failed to load fullscreen image for Property ${fullscreenCarousel.ID} Media ${index + 1}`, e);
                                                    }}
                                                />
                                            ) : (
                                                <video
                                                    src={mediaUrl}
                                                    controls
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        console.error(`Failed to load fullscreen video for Property ${fullscreenCarousel.ID}`, e);
                                                    }}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                        </Carousel>
                        <button
                            onClick={closeFullscreenCarousel}
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                        >
                            &#x2715;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResidentailList;

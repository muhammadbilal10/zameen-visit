'use client';
import React, { useState } from 'react';

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ title, isActive, onClick }) => (
  <button
    className={`px-4 py-2 text-sm font-medium ${isActive ? 'text-green-600 border-b-4 border-green-600' : 'text-gray-500 hover:text-gray-700'} focus:outline-none`}
    onClick={onClick}
  >
    {title}
  </button>
);

interface Listing {
  name: string;
  count: number;
}

interface LocationItemProps {
  city: string;
  listings: Listing[];
}

const LocationItem: React.FC<LocationItemProps> = ({ city, listings }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
    <ul className="mt-2">
      {listings.map((listing, index) => (
        <li key={index} className="flex gap-1 items-center py-2">
          <a href="#" className="text-green-600 hover:text-green-800">
            {listing.name}
          </a>
          <span className="text-gray-600">({listing.count.toLocaleString()})</span>
        </li>
      ))}
    </ul>
  </div>
);

interface LocationsData {
  forSale: LocationItemProps[];
  toRent: LocationItemProps[];
}

const PopularLocations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forSale' | 'toRent'>('forSale');

  const locations: LocationsData = {
    forSale: [
      {
        city: 'Lahore',
        listings: [
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
        ],
      },
      {
        city: 'Islamabad',
        listings: [
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
        ],
      },
      {
        city: 'Karachi',
        listings: [
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
          { name: 'Plots for sale in DHA Defence', count: 8477 },
        ],
      },
     
    ],
    toRent: [
        {
            city: 'Lahore',
            listings: [
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
            ],
          },
          {
            city: 'Islamabad',
            listings: [
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
            ],
          },
          {
            city: 'Karachi',
            listings: [
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
              { name: 'Plots for sale in DHA Defence', count: 8477 },
            ],
          },
    ],
  };

  return (
    <div className="bg-white p-8">
      <div className="flex gap-4 mb-4 border-b-2">
        <TabButton title="For Sale" isActive={activeTab === 'forSale'} onClick={() => setActiveTab('forSale')} />
        <TabButton title="To Rent" isActive={activeTab === 'toRent'} onClick={() => setActiveTab('toRent')} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {locations[activeTab].map((location, index) => (
          <LocationItem key={index} city={location.city} listings={location.listings} />
        ))}
      </div>
    </div>
  );
};

export default PopularLocations;

"use client";
import { useEffect } from "react";

export const ARContactCard = () => {
  useEffect(() => {
    // Initialize AR.js scene
    // This would actually require a full AR implementation
    console.log("AR scene would initialize here");
  }, []);

  return (
    <div className="text-center">
      <div className="relative h-96 w-full bg-gray-100 rounded-xl mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">AR Camera View Would Appear Here</p>
        </div>
      </div>
      <p className="text-gray-600 mb-6">
        Point your camera at any flat surface to place my 3D contact card
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
        Launch AR Experience
      </button>
    </div>
  );
};

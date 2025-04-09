"use client";
import { useState } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";

export const SecureContact = () => {
  const [message, setMessage] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Encryption would happen here in a real implementation
  };

  return (
    <div className="bg-gray-900 rounded-xl p-8 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-6">
        {isEncrypted ? (
          <FiLock className="text-green-500 w-5 h-5" />
        ) : (
          <FiUnlock className="text-red-500 w-5 h-5" />
        )}
        <span className="font-mono text-sm text-gray-400">
          {isEncrypted ? "End-to-End Encrypted" : "Connection Unsecured"}
        </span>
      </div>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Secured</h3>
          <p className="text-gray-400">
            Your encrypted message has been delivered. Expect a response within
            24 hours.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold text-white mb-4">
            Secure Message Portal
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <FiLock className="w-5 h-5" />
              Encrypt & Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

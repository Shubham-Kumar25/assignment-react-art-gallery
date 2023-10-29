import React from "react";

function ArtistCard({ artist }) {
  const { profileImage, backgroundImage, name, username, online } = artist;

  return (
    <div className="relative flex h-32 mb-4 transition-transform transform cursor-pointer hover:scale-105">
      <div
        className="relative w-full h-32 bg-center bg-cover rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-full h-full bg-black rounded-lg opacity-30" />

        <div className="absolute bottom-2 left-2">
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-lg"
          />
        </div>

        {online && (
          <div className="absolute w-3 h-3 bg-green-400 rounded-full bottom-12 left-12" />
        )}
      </div>

      <div className="absolute text-white bottom-3 left-16">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">@{username}</p>
      </div>
    </div>
  );
}

export default ArtistCard;

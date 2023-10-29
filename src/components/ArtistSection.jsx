import React from "react";
import ArtistCard from "./ArtistCard";
import artist1p from "../assets/artist1p.png";
import artist1b from "../assets/artist1b.png";
import artist2p from "../assets/artist2p.png";
import artist2b from "../assets/artist2b.png";
import artist3p from "../assets/artist3p.png";
import artist3b from "../assets/artist3b.png";
import artist4p from "../assets/artist4p.png";
import artist4b from "../assets/artist4b.png";
import artist5b from "../assets/artist5b.png";

const artistData = [
  {
    id: 1,
    profileImage: artist1p,
    backgroundImage: artist1b,
    name: "Lily Artistry",
    username: "lily_artist",
    online: true,
  },
  {
    id: 2,
    profileImage: artist2p,
    backgroundImage: artist2b,
    name: "Graceful Creations",
    username: "grace_artist",
    online: true,
  },
  {
    id: 3,
    profileImage: artist3p,
    backgroundImage: artist3b,
    name: "SereneBrushStrokes",
    username: "serene_artist",
    online: true,
  },
  {
    id: 4,
    profileImage: artist4p,
    backgroundImage: artist4b,
    name: "DreamyPalette",
    username: "dreamy_artist",
    online: true,
  },
  {
    id: 5,
    profileImage: artist1p,
    backgroundImage: artist5b,
    name: "ArtisticHarmony",
    username: "art_harmony",
    online: true,
  },
];

function ArtistSection() {
  return (
    <div className="w-64 h-[700px] overflow-y-scroll flex flex-col gap-4">
      <div className="flex gap-4 hover:cursor-pointer">
        <h2 className="text-base font-semibold">Artists</h2>
        <h2 className="text-base font-semibold text-gray-500 hover:text-[#4fa99f]">
          Photographers
        </h2>
      </div>
      <div>
        {artistData.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default ArtistSection;

import React from "react";
import Button from "../../ui/Button";

const img_url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfH9H_B-iLsMdfzDuAWlXYk0uWweE9D9DhGW5eKSEQQ&s";

function MovieCard() {
  return (
    <div className="flex flex-col gap-2 w-60 shadow-xl rounded overflow-hidden">
      <img className="object-cover h-64" src={img_url} />
      <div className="p-4">
        <div className="text-2xl font-semibold">Movie title</div>
        <div className="text-lg font-medium mt-2 ">Movie subtitle</div>
        <div className="text-lg font-medium mt-2 text-bermuda-100">
          *OMDB | 7.9
        </div>
        <Button></Button>
      </div>
    </div>
  );
}

export default MovieCard;

import React from "react";
import { ReactDOM } from "react";
import memesData from "../memesData.js";

function Content() {
  //const [memeImage, setMemeImage] = React.useState("");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }

  return (
    <div className="p-9 bg-slate-300">
      <div action="" className="grid grid-cols-2 gap-4">
        <input
          type="text"
          className="p-3 border-black rounded-md indent-1"
          placeholder="top text"
        />
        <input
          type="text"
          className="p-3 border-black rounded-md indent-1"
          placeholder="bottom text"
        />
        <button
          className="bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded p-3 col-start-1 col-end-3 cursor-pointer"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="max-w-full my-5" />
    </div>
  );
}

export default Content;

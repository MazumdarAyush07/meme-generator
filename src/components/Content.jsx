import React from "react";
import { ReactDOM } from "react";

function Content() {
  //const [memeImage, setMemeImage] = React.useState("");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="p-9 bg-slate-300">
      <div action="" className="grid grid-cols-2 gap-4">
        <input
          type="text"
          className="p-3 border-black rounded-md indent-1"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="p-3 border-black rounded-md indent-1"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded p-3 col-start-1 col-end-3 cursor-pointer"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative flex items-center justify-center">
        <img src={meme.randomImage} className="max-w-full border-4" />
        <h2 className="absolute w-4/5 left-1/2 -translate-x-1/2 text-center my-4 px-1 font-sans text-4xl uppercase tracking-widest text-white top-0 ">
          {meme.topText}
        </h2>
        <h2 className="absolute w-4/5 left-1/2 -translate-x-1/2 text-center my-4 px-1 font-sans text-4xl uppercase tracking-widest text-white bottom-0 ">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}

export default Content;

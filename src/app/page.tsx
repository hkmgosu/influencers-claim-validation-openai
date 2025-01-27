"use client";
import { useState } from "react";
// import axios from "axios";

const Home = () => {
  const [claim, setClaim] = useState("");
  const [influencer, setInfluencer] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [images, setImages] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      // const response = await axios.get(`/api/flickr?term=${influencer}`);
      // setImages(response.data);

      const res = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ influencer, claim }),
      });

      if (!res.ok) throw new Error("Error fetching data");

      const data = await res.json();
      console.log(data.output);
      setResponse(data.output.content);
    } catch (error) {
      console.log(error);
      setError(true);
      setResponse("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="justify-items-center">
      <h1 className="dark:text-white pt-4">
        Verify Influencers using OpenAI, by Newenlabs.dev
      </h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="influencer_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Influencer Name
          </label>
          <input
            type="text"
            value={influencer}
            onChange={(e) => setInfluencer(e.target.value)}
            placeholder="Enter influencer name here"
            required
            id="influencer_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="influencer_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Health Claim
          </label>
          <textarea
            rows={4}
            cols={50}
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            placeholder="Enter your influencer's health claim here"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <br />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          aria-label="Send Prompt"
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </form>
      <br />
      {response && (
        <div className="align-content-start p-6">
          <h2>Response:</h2>
          {error && <p>{response}</p>}
          {/* Usando dangerouslySetInnerHTML para renderizar el HTML */}
          <div>
            {/* images.map((image) => (
              <img
                key={image.id}
                src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                alt={image.title}
                width={200}
              />
            )) */}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: response.split("\n").slice(1, -1).join("\n"),
            }}
            className="w-100 md:w-70 lg:w-70"
          />
        </div>
      )}
    </div>
  );
};

export default Home;

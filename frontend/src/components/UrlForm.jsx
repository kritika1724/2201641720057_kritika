import { useState } from "react";
import { logger } from "../middleware/logger";

export default function UrlForm() {
  const [urls, setUrls] = useState([""]);
  const [results, setResults] = useState([]);

  const handleChange = (i, val) => {
    const copy = [...urls];
    copy[i] = val;
    setUrls(copy);
  };

  const shortenUrls = () => {
    logger("Shorten request", { urls });

    const stored = JSON.parse(localStorage.getItem("urls")) || [];
    const newResults = urls.map((url) => {
      const shortCode = Math.random().toString(36).substring(2, 7);
      const expiry = new Date(Date.now() + 30 * 60000).toISOString();

      const entry = { original: url, shortCode, expiry, clicks: [] };
      stored.push(entry);
      return entry;
    });

    localStorage.setItem("urls", JSON.stringify(stored));
    setResults(newResults);
  };

  return (
    <div>
      {urls.map((u, i) => (
        <input
          key={i}
          value={u}
          onChange={(e) => handleChange(i, e.target.value)}
          placeholder="Enter URL"
          style={{ display: "block", margin: "0.5rem 0", width: "300px" }}
        />
      ))}
      {urls.length < 5 && (
        <button onClick={() => setUrls([...urls, ""])}>+ Add URL</button>
      )}
      <button onClick={shortenUrls}>Shorten</button>

      <div style={{ marginTop: "1rem" }}>
        {results.map((r, i) => (
          <p key={i}>
            {r.original} →{" "}
            <a href={`/${r.shortCode}`} target="_blank" rel="noreferrer">
              {window.location.origin}/{r.shortCode}
            </a>{" "}
            (expires: {r.expiry})
          </p>
        ))}
      </div>
    </div>
  );
}

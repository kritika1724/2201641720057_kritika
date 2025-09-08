import { useEffect, useState } from "react";
import { logger } from "../middleware/logger";

export default function UrlList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urls")) || [];
    setUrls(stored);
    logger("Loaded stats list", { count: stored.length });
  }, []);

  return (
    <div>
      {urls.length === 0 ? (
        <p>No shortened URLs yet</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((u, i) => (
              <tr key={i}>
                <td>{u.original}</td>
                <td>
                  <a href={`/${u.shortCode}`} target="_blank" rel="noreferrer">
                    {window.location.origin}/{u.shortCode}
                  </a>
                </td>
                <td>{u.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logger } from "../middleware/logger";

export default function RedirectPage() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    logger("Redirect attempt", { shortCode });
    const storedUrls = JSON.parse(localStorage.getItem("urls")) || [];
    const match = storedUrls.find(u => u.shortCode === shortCode);

    if (match && new Date(match.expiry) > new Date()) {
      window.location.href = match.original;
    } else {
      alert("Invalid or expired short URL");
      navigate("/");
    }
  }, [shortCode, navigate]);

  return <p>Redirecting...</p>;
}

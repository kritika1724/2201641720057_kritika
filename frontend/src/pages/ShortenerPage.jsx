import UrlForm from "../components/UrlForm";
import { logger } from "../middleware/logger";

export default function ShortenerPage() {
  logger("Loaded Shortener Page");

  return (
    <div style={{ padding: "2rem" }}>
      <h2>URL Shortener</h2>
      <UrlForm />
    </div>
  );
}

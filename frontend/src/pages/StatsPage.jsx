import UrlList from "../components/UrlList";
import { logger } from "../middleware/logger";

export default function StatsPage() {
  logger("Loaded Stats Page");

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Statistics</h2>
      <UrlList />
    </div>
  );
}

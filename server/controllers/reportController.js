import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadReport = (req, res) => {
  const filePath = path.join(__dirname, "../assets/dummy-report.pdf");
  res.download(filePath, "LabTestReport.pdf");
};

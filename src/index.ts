import app from "./app.js";
import { env } from "./config/env.js";

const startServer = () => {
  try {
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

import app from "./app.js";
import { settingDotEnv } from "./src/settings/config.js";
import { connectionMongodb } from "./src/settings/db.config.js";

//PORT
const { port } = settingDotEnv();

//Iniciando servidor
app.listen(port, async () => {
  await connectionMongodb();
  console.log(`🚀servidor corriendo en http://localhost:${port}`);
});

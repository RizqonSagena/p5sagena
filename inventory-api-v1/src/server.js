import "dotenv/config";
import {internalIpV4} from "internal-ip" ;
import app from "./app.js";

const PORT = 3000;

app.listen(PORT, async () => {
    const localIp = await internalIpV4();
    console.log(`IP local : http://localhost:${PORT}`);
    console.log(`IP Network : http://${localIp}:${PORT}`);
});
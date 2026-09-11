import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is up running on PORT:", PORT)
    })
}).catch((error) => {
    console.error("Failed to start server: ", error);
    process.exit(1);
})
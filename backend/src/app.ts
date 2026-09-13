import express from 'express';
import path from 'path'

import { clerkMiddleware } from '@clerk/express'

import authRoutes from './routes/authRoutes'
import chatRoutes from './routes/chatRoutes'
import messageRoutes from './routes/messageRoutes'
import userRoutes from './routes/userRoutes'
import { errorHandler } from './middleware/errorHandler';


const app = express();

app.use(express.json());

app.use(clerkMiddleware())

app.get("/health", (req, res) => {
    res.json({
        status: "ok", message:"server is running"
    })
})

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//error handlers must come after all the routes and other middlewares so they can catch errors passed with next(err) or thrown inside async handlers.
app.use(errorHandler);


//server front-end in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../../web/dist")))

    app.get("/{*any}", (_, res) => {
        res.sendFile(path.join(__dirname, "../../web/dist/index.html"));
    });
}

export default app
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./config/db");
(0, dotenv_1.config)();
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/users", userRoutes_1.default);
app.use("/test", (req, res) => {
    res.send("Hello Nabeel");
});
app.listen(3001, () => {
    console.log(`Server running on port ${port}`);
});

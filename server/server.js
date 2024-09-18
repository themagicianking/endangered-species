import express from "express";
import cors from "cors";
import pkg from "pg";
import "dotenv/config";

const app = express();
const { Pool } = pkg;

app.use(cors());
app.use(express());

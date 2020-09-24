const config = require("./config");

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(config);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;
    // console.log("Payment request >>>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
});

// Listen command
exports.api = functions.https.onRequest(app);

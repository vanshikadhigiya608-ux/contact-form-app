const express = require("express");
const app = express();
const PORT = 3000;

// 1️⃣ BODY PARSER (sabse upar)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2️⃣ STATIC FILES (HTML, CSS)
app.use(express.static("public"));

// 3️⃣ ROUTES
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Form submitted successfully ✅");
});

app.get("/contact", (req, res) => {
  res.send("Please submit the form from homepage 🙂");
});

// 4️⃣ SERVER START (last)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});








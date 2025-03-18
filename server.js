const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post("/save-data", (req, res) => {
  console.log("Полученные данные:", req.body);
  const filePath = path.join(__dirname, "user_data.log");
  
  // Добавляем метку времени и разделитель
  const logEntry = `\n=== ${new Date().toISOString()} ===\n${JSON.stringify(req.body, null, 2)}\n`;
  
  fs.appendFile(filePath, logEntry, (err) => {
    if (err) {
      console.error("Ошибка записи в файл:", err);
      console.log("Полный путь к файлу:", filePath); // Добавляем вывод пути
      return res.status(500).send("Ошибка сохранения данных");
    }
    console.log("Данные успешно записаны в:", filePath);
    res.send("Данные успешно получены и сохранены");
  });
});

app.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});

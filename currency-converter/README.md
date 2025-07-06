# 💱 Currency Converter

A simple Angular application for converting currencies using an external API.\
Built with **Angular 19** and styled with Angular Material.

---

## 🚀 Features

✅ Fetches the latest list of currencies from an API\
✅ Converts amounts between selected currencies\
✅ Clean and responsive UI using Angular Material\
✅ Unit tests included (Jasmine + Karma)

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OlehIhnatenko/currency-converter.git
   cd currency-converter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## 🖥️ Running the Application

### Start the development server

```bash
ng serve
```

Then open your browser at [http://localhost:4200](http://localhost:4200)

---

## 🧪 Running Tests

### Run unit tests

```bash
ng test
```

### View code coverage

```bash
ng test --code-coverage
```

Open the generated report:

```
coverage/index.html
```

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── currency-converter/      # Main parent component
│   │   └── currency-selector/       # Reusable currency selector component
│   ├── services/
│   │   ├── currency.service.ts      # Service for fetching currencies
│   │   └── conversion.service.ts    # Service for performing conversions
│   └── models/
│       └── currency.model.ts        # Currency interface
```

---

## 🛠 Technologies Used

- [Angular 19](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- [Jasmine + Karma](https://karma-runner.github.io/latest/index.html)

---

## ✍️ Author

**Oleh Ihnatenko**\
[GitHub Profile](https://github.com/OlehIhnatenko)


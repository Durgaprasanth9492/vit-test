🚀 Vite + React + TypeScript + CI/CD + Cypress + JMeter

📌 Project Overview

This project is a Vite-based React TypeScript application with a fully automated CI/CD pipeline.It includes:👉 Automated CI/CD using GitHub Actions👉 Linting & Code Quality Checks (ESLint, Prettier, Snyk)👉 End-to-End Testing (Cypress)👉 Security & Vulnerability Scanning (Snyk, OWASP ZAP)👉 Load Testing (Apache JMeter)👉 Deployment via Vercel

🛠️ Tech Stack

Frontend: Vite + React + TypeScript + Tailwind CSSTesting: Cypress (E2E), JMeter (Load Testing)Security: Snyk, OWASP ZAPCI/CD: GitHub ActionsDeployment: Vercel

🚀 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/Durgaprasanth9492/vit-test.git
cd vit-test

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm run dev

Now visit http://localhost:5173 in your browser.

🔍 Running Tests

🟢 Run Unit Tests

npm run test

🚀 Run Cypress End-to-End Tests

Start the dev server:

npm run dev

In a new terminal, run:

npx cypress open

OR run tests in headless mode:

npx cypress run

💥 Run Load Testing with JMeter

Ensure JMeter is installed (jmeter -v to verify).

Run the load test:

jmeter -n -t load_test.jmx -l results.jtl

View results in JMeter UI.

🔄 CI/CD Pipeline Breakdown

This project uses GitHub Actions for CI/CD:

Stage

Description

🏢 Build

Installs dependencies & runs linting, security scans

✅ Test

Runs unit tests & Cypress E2E tests

🔍 Security Scan

Uses Snyk & OWASP ZAP for vulnerability checks

🔥 Load Testing

Runs Apache JMeter tests

🚀 Deploy

Deploys the app to Vercel

CI/CD is triggered automatically on every push or pull request to main.

🚀 Deploying the App

This project is deployed using Vercel.

To manually deploy:

npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}

You can find the deployed app at:🔗 vit-test.vercel.app

💜 License

This project is licensed under MIT License.

💡 Contributing

Contributions are welcome! Please:

Fork the repo

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m "Added new feature")

Push to GitHub and create a pull request

📞 Contact

🔗 GitHub: Durgaprasanth9492📧 Email: durgaprasanthkampana@gmail.com

🔥 Happy Coding! 🚀

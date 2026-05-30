# Gacha Calc

A web-based gacha currency tracker and pull calculator built with React. It helps players convert saved resources into pulls, spark progress, and limited-banner pity coverage across several gacha games.

## 🔗 Live Demo
[https://franzthevanguard.github.io/gacha-calc/](https://franzthevanguard.github.io/gacha-calc/)

## 🎮 Supported Games
Implemented calculators:
- **GBF** - Granblue Fantasy
- **Nikke** - Goddess of Victory: Nikke
- **HSR** - Honkai: Star Rail
- **ZZZ** - Zenless Zone Zero
- **BA** - Blue Archive

Partial / placeholder:
- **Wuwa** - Wuthering Waves

## ✨ Features
- **Game-Specific Calculators**: Dedicated pages corresponding to the unique currency systems of each supported game.
- **Persistent Inputs**: Saves entered values in `localStorage` so your resource totals survive refreshes.
- **Dark/Light Mode**: Fully functional theme toggling system that saves your preference.
- **Responsive Design**: Includes a navigation drawer for seamless use on both desktop and mobile screens.

## 🛠️ Built With
- [React](https://reactjs.org/) (Create React App)
- [React Router](https://reactrouter.com/) for navigation
- Plain CSS for styling and theming

## What Each Calculator Covers
- **GBF**: Crystals, single tickets, 10x tickets, total rolls, spark percentage
- **BA**: Pyroxenes, single tickets, 10x tickets, total rolls, spark percentage
- **HSR**: Stellar Jades, Oneiric Shards, passes, limited pulls, estimated 5-star guarantees
- **ZZZ**: Polychromes, Monochromes, tapes, limited searches, estimated S-rank guarantees
- **Nikke**: Gems and advanced vouchers for limited-banner pull totals
- **Wuwa**: Route scaffold only; calculator logic is not implemented yet

## 🚀 Running Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup
1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Building for Production

To create a production-ready build:
```bash
npm run build
```
This minifies the files and builds the app for production to the `build` folder.

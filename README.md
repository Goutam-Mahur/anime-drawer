# Anime Drawer

Anime Drawer is a simple anime browser originally built using Next.js 14 by JS Mastery.  
This version has been migrated to **Next.js 15** with the **App Router** and updated to use server-only data fetching (`"use server"`).  
It fetches anime data from the Shikimori API and displays them as cards in a single-page layout.

## Features

- **Infinite Scroll**: Automatically loads more anime as you scroll down the page.
- **Responsive Design**: Built with Tailwind CSS to ensure a mobile-friendly experience.
- **API Integration**: Fetches anime data from the Shikimori API for real-time updates.
- **Lightweight and Fast**: Optimized for performance using Next.js.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/) - React framework for server-rendered applications
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **API**: Utilizes the [Shikimori API](https://shikimori.one/api/documents/animes) to fetch anime data.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/anime-drawer.git
   cd anime-drawer
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see your application in action.

## Usage

As you scroll down the page, more anime will automatically load. Click on any anime title for more details.

## API

This project uses the Shikimori API to fetch anime data. The data is retrieved using the following API endpoint:

```javascript
const response = await fetch(
  `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
);
```

You can modify the API parameters in the source code as needed.

## Customization

Feel free to customize the styles and layout according to your preferences. Tailwind CSS provides a wide range of utilities for styling.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shikimori API](https://shikimori.one/api/documents/animes)

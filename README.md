# Financial Dashboard Sample UI Project

A modern web application built with Next.js, TypeScript, and TailwindCSS.

## 🔗 Live Demo

Check out the live Vercel demo: [Finacial Dashboard App](https://soar-mocha.vercel.app)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/financial-dashboard.git
   cd financial-dashboard
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

The application will be available at `http://localhost:3000`

## 🛠️ Development

### Scripts

- `yarn dev` - Start development server
- `yarn build` - Build production bundle
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

### Project Structure

```
financial-dashboard/
├── .next/               # Next.js build output
├── src/                 # Source code
│   ├── app/            # Next.js 14 app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── settings/   # Settings page
│   │   └── _not-found/ # 404 page
├── public/             # Static assets
├── .eslintrc.js        # ESLint configuration
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

Key directories and files:

- `src/app/`: Contains all the application routes and pages using Next.js 14 App Router
- `public/`: Stores static assets like images and fonts
- `.next/`: Build output directory (automatically generated)
- Configuration files:
  - `.eslintrc.js`: Code style and linting rules
  - `postcss.config.mjs`: PostCSS plugins configuration
  - `tailwind.config.js`: Tailwind CSS customization

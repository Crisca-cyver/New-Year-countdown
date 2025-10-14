# New Year Countdown

A beautiful and interactive New Year Countdown web application built with React, TypeScript, and Tailwind CSS. Features optimized performance, accessibility improvements, and a responsive design.

## Features

- **Real-time countdown** to the next New Year's Eve
- **Displays days, hours, minutes, and seconds** with smooth updates
- **Responsive design** for various screen sizes (mobile, tablet, desktop)
- **Animated background gradient** for visual appeal
- **Elegant UI** with a calendar icon from Lucide React
- **Performance optimized** with React.memo and useCallback
- **Accessibility compliant** with ARIA labels and semantic HTML
- **TypeScript** for type safety and better development experience

## Live Demo

Check out the live demo: [New Year Countdown](https://super-meerkat-3d410f.netlify.app)

## Technologies Used

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better code quality
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful and consistent icon library
- **ESLint** - Code linting for consistent code style

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v8 or later) or yarn

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Crisca-cyver/new-year-countdown.git
    cd new-year-countdown
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

4. **Open your browser** and visit `http://localhost:5173` to see the application running.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Performance Optimizations

- **Memoization**: Components are wrapped with `React.memo` to prevent unnecessary re-renders
- **useCallback**: Timer updates are optimized with `useCallback` to maintain reference stability
- **Efficient calculations**: Countdown logic is optimized for minimal computation
- **Tree shaking**: Unused code is automatically removed in production builds

## Accessibility Features

- **ARIA labels** for screen readers
- **Semantic HTML** structure
- **Keyboard navigation** support
- **High contrast** design for better visibility
- **Live regions** for dynamic content updates

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Project Structure

```
src/
├── components/
│   ├── Countdown.tsx    # Main countdown display component
│   └── Footer.tsx       # Footer component
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite environment types
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Acknowledgements

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
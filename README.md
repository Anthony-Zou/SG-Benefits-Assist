# SG Benefits Assist

SG Benefits Assist is a comprehensive web application designed to help Singapore residents discover, understand, and access various government benefits and support schemes. The platform provides an intuitive interface for users to check their eligibility, compare benefits, and access important information about government assistance programs.

## Features

- **Benefits Explorer**: Browse and search through available government benefits and support schemes
- **Eligibility Checker**: Quick assessment tool to determine which benefits you may qualify for
- **Accessibility Features**: 
  - Font size adjustment
  - High contrast mode
  - Screen reader compatibility
- **Multi-language Support**: Interface available in multiple languages
- **Interactive FAQ**: Searchable frequently asked questions
- **Responsive Design**: Optimized for both desktop and mobile devices

## Tech Stack

- React.js with TypeScript
- Styled Components for styling
- React Router for navigation
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd sg-benefits-assist
   ```

2. Install dependencies
   ```bash
   cd frontend
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── components/      # Reusable UI components
│   ├── contexts/        # React Context providers
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and theme
│   ├── translations/    # Language translations
│   └── data/           # Static data and configurations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Singapore Government for providing benefit information
- Contributors and maintainers of the project
- Open source community for various tools and libraries used in this project
# React Component Library Showcase (Standalone)

This project is a high-quality showcase of two professional UI components, `InputField` and `DataTable`, built with React, TailwindCSS, and TypeScript patterns. 


## Features

-   **Two Core Components**: `InputField` and `DataTable` with all features from the assignment.
-   **Custom UI Primitives**: Includes custom-built, dependency-free components for Buttons, Cards, Tabs, etc.
-   **Fully Responsive**: Mobile-first design that adapts to all screen sizes.
-   **Light & Dark Mode**: Seamless theme switching supported out-of-the-box.
-   **Zero UI Library Dependencies**: No reliance on libraries like Material UI, Ant Design, or shadcn/ui.

## Tech Stack

-   **React**: For building the user interface.
-   **TailwindCSS**: For all styling.
-   **Lucide React**: For icons.
-   **clsx` & `tailwind-merge**: For robust CSS class name management.

## File Structure
src/
├── components/
│   ├── custom/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Checkbox.jsx
│   │   ├── Label.jsx
│   │   ├── Select.jsx
│   │   ├── Separator.jsx
│   │   ├── Skeleton.jsx
│   │   ├── Switch.jsx
│   │   └── Tabs.jsx
│   ├── showcase/
│   │   ├── CodeBlock.jsx
│   │   └── ComponentDemo.jsx
│   └── ui/
│       ├── DataTable.jsx
│       └── InputField.jsx
├── lib/
│   └── utils.js
├── pages/
│   └── ComponentShowcase.jsx
├── App.js
└── index.css
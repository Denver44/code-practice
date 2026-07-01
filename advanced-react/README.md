# Advanced React Practice

Practice code for the Advanced React blog series.

## Setup

```bash
pnpm install
pnpm dev
```

Then open http://localhost:5173.

## How to switch chapters

Edit `src/App.jsx` and change the import at the top:

```jsx
// Chapter 1 - Layout Components (SplitScreen, List, Modal)
import Demo from './01-layout-components/Demo.jsx'

// Chapter 2 - Container Components (CurrentUserLoader, UserLoader, DataSource)
// import Demo from './02-container-components/Demo.jsx'
```

## Chapters

| Folder | Topic | Blog post |
|---|---|---|
| `01-layout-components/` | SplitScreen, RegularList, NumberedList, Modal | Layout Components and the Split Screen Pattern |
| `02-container-components/` | CurrentUserLoader, UserLoader, DataSource | Container Components + Generic Data Containers |

More chapters will be added as the series progresses.

## File structure inside each chapter

- `SplitScreen.jsx` / `CurrentUserLoader.jsx` / etc. — the pattern itself, clean and ready to study
- `Demo.jsx` — a working demo that uses all the patterns in the chapter

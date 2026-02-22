# react-query-demo

Task 1: React Query fetch/caching/refetch using JSONPlaceholder posts.

## Run
```bash
npm install
npm run dev
```

## What to check (for caching)
- Open devtools Network tab
- Mount → fetch happens
- Unmount then remount within ~60s → should use cached data (less/no network)
- Click Refetch button → forces network update

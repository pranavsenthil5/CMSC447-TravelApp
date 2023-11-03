# Drift-Travel-App-Authentication


# Running Backend


```bash
py -3 -m venv venv
```
```bash
venv\Scripts\activate
```

## Install the required Python libraries using pip:

```bash
pip install Flask
```

```bash
pip install Flask-Cors
```

```bash
pip install psycopg2
```


```bash
flask run
```

# Run Supabase Authentication

## Install following supabase libraries

```bash
npm install @supabase/supabase-js
```

```bash
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js
```

```bash
npm install @supabase/auth-ui-react @supabase/auth-ui-shared
```

```bash
npm install pg-promise
```

```bash
npm install axios 
```

## Environment 

### Create a .env.local in your root directory

```bash
NEXT_PUBLIC_SUPABASE_URL=https://kqzctdxtctryinogwpip.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxemN0ZHh0Y3RyeWlub2d3cGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwODcyNDcsImV4cCI6MjAxMDY2MzI0N30.HN4g1L7K6GhXhA7ppIAWEah7MPe4K4k9B2m9p5GnZhA
```

## Run the program
```bash
npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# TravelApp
A travel app that allows users to plan their trips and save their favorite destinations.
_____

**Note:** Please read this document carefully before running the project. If you have any questions, please contact Pranav.

# Description
The project has two parts. The front end and the back end. The front end is built with React(Next.js) and the back end is built with Python(maily APIs.) As that is the case, both parts are in different git repositories, and have to run simultaneously.


## How to run the project
### Back End
1. Clone the [CMSC447-TravelApp-API git repository](https://github.com/pranavsenthil5/CMSC447-TravelApp-API)
3. Navigate to the root directory of the project
4. Run `pip install -r requirements.txt` to install all the dependencies
5. Run `python3 app.py` OR `python app.py` to start the API server
   
### Front End
1. Clone the [CMSC447-TravelApp git repository](https://github.com/pranavsenthil5/CMSC447-TravelApp)
2. Navigate to the root directory of the project
3. Perform a `git checkout Final` to checkout the branch that has the final code
4. Add a `.env.local` file with the following contents:
```
NEXT_PUBLIC_SUPABASE_URL=https://wlsngebjldmcjopnueul.supabase.co/
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsc25nZWJqbGRtY2pvcG51ZXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMDk2MjYsImV4cCI6MjAxNDc4NTYyNn0.EnffLt8wSfVdJbR5-G3kD0g-j3Dib8OIM8tIV4jaH4M
```
1. Run `npm install` to install all the dependencies
2. Run `npm run dev` to start the development server
3. Navigate to `localhost:3000` to view the project

## Notes
On the sign in page, click on create account and then proceed. There will be no email verification, so you can directly sign in after creating an account. However, you will have to refresh the after clickin on sign in. 


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

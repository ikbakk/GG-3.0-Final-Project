# Frontend

## Getting Started

Clone the repo:
`git clone https://github.com/ikbakk/GG-3.0-Final-Project.git`

cd to backend folder:

```bash
cd frontend
```

run:

```bash
npm install
```

or with pnpm:

```bash
pnpm install
```

Run the development server:

```bash
npm run dev
```

or

```bash
pnpm dev
```

Then the server will run on port 5173 as default

## Environment Variables

example for `.env.production` file, Vite will automatically use this env when run build script

```
VITE_ENVIRONMENT=production
```

## Tech Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)

## Folder Structure

    ├── public
    ├── src                    
    │   ├── assets                           #static assets 
    │   ├── components                       #components folder  
    │   │   ├── DetailPage              
    │   │   ├── Navbar                       
    │   │   ├── SearchPage                 
    │   │   └── ui                           #components from shadcn-ui
    │   ├── contexts                         #context providers
    │   ├── hooks                            
    │   ├── layouts                          #layout components to put <Outlet /> from react router
    │   ├── lib                              #utility function folder from shadcn-ui
    │   ├── pages                            #page components to exchange <Outlet /> in layout
    │   └── types                                    
    └── ...


# personal-preferences

## Environment Versions

- npm: 9.3.1
- node: 18.14.0
- nvm-windows: 1.1.0

## Setting Up Environment on Windows

Use the following command to set up the Node.js version specified in `.nvmrc`:

```powershell
nvm use $(Get-Content .nvmrc).replace( 'v', '' )
```

## Setting Up Environment on Linux/Mac
```powershell
nvm use
```

## Starting the Server
To start the server, run the following command:
```powershell
npm run dev
```

## Environment Configuration
The application utilizes an .env file that contains references to the backend. You can create the .env file with the following content:
```env
VITE_API_BASE_URL=[backend-url]
```
Replace [backend-url] with the actual URL of the backend.


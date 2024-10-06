# built_to_last_nasa_space_apps

2024 Nasa Space Apps Challenge - Team: B[U]ILT To Last

## How to Set Up

To set up the project, you'll need to install `uv` by running the following command:

```bash
pip install uv
```

## Installing Dependencies for React App (inside `frontend` folder)

1. Make the installation script executable by running:

   ```bash
   chmod +x install_dependencies.sh
   ```
2. Install the dependencies by executing the script:

   ```bash
   ./install_dependencies.sh
   ```

## Run Frontend (Be inside the `frontend` folder)

To start the frontend of your application, navigate to the `frontend` folder and run:

```bash
npm start
```

## Run Backend (Be inside the `backend` folder)

1. Create a virtual environment using `uv`:

   ```bash
   uv venv
   ```
2. Activate the virtual environment:

   ```bash
   source .venv/bin/activate
   ```
3. Install the required backend dependencies:

   ```bash
   uv pip install -r requirements.txt
   ```
4. Start the backend server by running:

   ```bash
   python app.py
   ```
# View Website
link: https://spaceexpirementexplorer.vercel.app/


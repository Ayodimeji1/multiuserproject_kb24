## Overview
The Multiuser Vehicle Management project is a full-stack web application designed to support multi-user functionalities for managing vehicle listings and interactions. It offers features for car owners, customers, and administrators to manage vehicles, view details, and interact with the system seamlessly. It consists of a backend developed using Python, Django, Django Rest Framework and a frontend built with React.js, providing a seamless interface for users to interact with vehicle data.

## Features
User Management: Separate modules for customers and vehicle owners.
Vehicle Management: Manage vehicle details, including brand, model, and images.
Data Serialization: Backend API using Django REST framework for efficient data transfer.
Frontend Interface: A React-based user interface to search and view vehicles.
Media Storage: Handling images for brands, vehicles, and user documents.
Containerization: Docker support for simplified deployment.
Nginx Setup: Configured NGINX for reverse proxy and load balancing.

## Project structure
```
multiuserproject_kb24-main/
│
├── backend/                    # Backend services
│   ├── carowner/               # Car owner management app
│   ├── customer/               # Customer management app
│   ├── vehicle/                # Vehicle management app
│   ├── media/                  # Media storage for images
│   ├── manage.py               # Django management script
│   └── requirements.txt        # Python dependencies
│
├── frontend/                   # Frontend React application
│   ├── src/                    # Source files
│   ├── public/                 # Static assets and HTML template
│   ├── package.json            # npm dependencies
│   └── Dockerfile              # Docker configuration for frontend
│
└── ngnix/                      # NGINX configuration
    └── ngnix-setup.conf        # Configuration file for reverse proxy
```

## Installation
### Backend Setup
1. Navigate to the backend directory:
cd backend
2. Create and activate a virtual environment:
python -m venv env
source env/bin/activate  #On Windows use 'env\Scripts\activate'
3. Install the required Python packages:
pip install -r requirements.txt
4. Run migrations to set up the database:
python manage.py migrate
5. Create a superuser for accessing the Django admin:
python manage.py createsuperuser
6. Start the development server:
python manage.py runserver

### Frontend Setup
1. Navigate to the frontend directory:
cd frontend
2. Install the required npm packages:
npm install
3. Start the React development server:
npm start

### Docker Deployment
Ensure Docker is installed and running.
1. Build and run the application using Docker Compose:
docker-compose up --build

## Usage
Running the Application
Frontend: Navigate to http://localhost:3000 in your browser to interact with the React frontend.
Backend: Access the API at http://localhost:8000 and the Django admin at http://localhost:8000/admin.

## Dependencies
### Backend
Python: Version 3.10+
Django: Version 4.x
Django REST framework: For API development
Pillow: For image handling
Other Packages: As specified in requirements.txt

### Frontend
React: Version 17.x or higher
React Router: For navigation
Axios: For API requests
Other Packages: As specified in package.json

## Deployment
Utilize Docker Compose for multi-container setup.
Adjust Dockerfile and NGINX configurations for production deployment.

## License
This project is licensed under the MIT License. See LICENSE for details.






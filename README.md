# **Advanced DevOps Project**

#### Production-Ready Multi-Container Application Deployment

#### Author

#### **Neha**



### **Project Overview**

###### This project demonstrates the deployment of a production-ready multi-container application using Docker Compose on Ubuntu Linux.

###### The environment consists of:

* ###### Frontend Service
* ###### Backend API Service
* ###### MySQL Database
* ###### Nginx Reverse Proxy
* ###### Custom Docker Network
* ###### Persistent Docker Volumes
* ###### Environment Variables
* ###### Health Checks
* ###### Monitoring \& Logging

###### The project also follows Linux security practices, Git workflow standards, and Docker production best practices.



#### **Architecture Diagram**



&#x20;               Internet

&#x20;                   |

&#x20;             Nginx Proxy

&#x20;                   |

&#x20;       -----------------------

&#x20;       |                     |

&#x20;   Frontend            Backend API

&#x20;                             |

&#x20;                          MySQL DB



Docker Network : app-network

Volume         : db\_data



#### **Project Structure**



advanced-devops-project/



├── frontend/

├── backend/

├── nginx/

│   └── nginx.conf

├── screenshots/

├── docker-compose.yml

├── .env

├── .gitignore

└── README.md



#### **Part 1 – Linux System Setup \& Security**



##### User Creation

A dedicated user was created for project management.



sudo adduser devopsuser

sudo usermod -aG sudo devopsuser

sudo usermod -aG docker devopsuser



##### **Firewall Configuration**



Only required ports were allowed using UFW.

sudo ufw allow 22/tcp

sudo ufw allow 80/tcp

sudo ufw allow 443/tcp

sudo ufw enable

Allowed Ports:

Port	Purpose

22	SSH

80	HTTP

443	HTTPS



##### **Software Installation**



Git

sudo apt install git -y



Docker

sudo apt install docker.io -y



Docker Compose

sudo apt install docker-compose-plugin -y



#### **Part 2 – Git \& GitHub Workflow**



##### **Repository**

advanced-devops-project



##### **Branch Strategy**

main

develop

feature/frontend

feature/backend



##### **Pull Requests**

1.feature/frontend → develop

2.feature/backend → develop

3.develop → main



##### **Version Tag**

git tag -a v1.0 -m "Production Release"





#### **Part 3 – Multi-Container Docker Deployment**



##### Services

##### 

##### Frontend

Provides the user interface for the application.



##### Backend

Handles API requests and communicates with the database.

##### 

##### MySQL Database

Stores application data and uses persistent Docker volumes.



##### Nginx Reverse Proxy

Routes incoming traffic to frontend and backend services.



##### Docker Compose Deployment



Start containers:



docker compose up -d



Check running containers:



docker ps



Stop containers:



docker compose down



##### **Docker Networking**



A custom bridge network was created.



docker network ls



Network:



app-network



Connected Containers:



Container



frontend



backend



mysql-db



nginx-proxy



Inspect network:



docker network inspect advanced-devops-project\_app-network



#### **Database Persistence**



Named Docker volume was used:



db\_data



Data remains available even after container restart.



Verification:



docker restart mysql-db



Database records remained intact after restart.



#### **Environment Variables**



Sensitive information is stored in a separate environment file.



Example:



DB\_HOST=mysql-db



DB\_USER=admin



DB\_PASSWORD=\*\*\*\*\*\*\*\*



DB\_NAME=appdb



#### **Health Checks**



Health checks were configured to ensure service availability.

Example:

healthcheck:

&#x20; test: \["CMD","mysqladmin","ping","-h","localhost"]

&#x20; interval: 30s

&#x20; retries: 3

#### 

#### **Part 4 – Networking \& Debugging**



Open Ports



ss -tulnp



Docker Networks



docker network ls



docker network inspect app-network



Container Logs



docker logs backend



docker logs mysql-db



docker logs nginx-proxy



Port Mapping



Example:

80:80

Host Port 80 is mapped to Container Port 80.



##### **localhost vs 0.0.0.0**



|localhost	|0.0.0.0|
|-|-|
|Local machine only|All network interfaces|
|127.0.0.1|Any available IP|
|Not accessible externally|Accessible externally|



#### **Part 5 – Production Best Practices**



Implemented best practices:



* Fixed image versions used



* No latest tags used



* Environment variables used



* Health checks configured



* Restart policies configured



* Persistent volumes configured



Example:



image: nginx:1.27



image: mysql:8.4



Why “latest” Is Not Recommended



Unpredictable deployments



Unexpected updates



Difficult rollback



Potential production failures



##### **Docker Cleanup Commands**



docker system prune -a



docker volume prune



docker network prune



#### **Part 6 – Monitoring**



Container Resource Monitoring



docker stats



**Monitored Metrics:**

CPU Usage

Memory Usage

Network I/O

Block I/O



**Container Logs**

docker compose logs

docker logs backend



**OOM (Out Of Memory)**

OOM occurs when a system or container runs out of available memory.

When memory is exhausted:

1.Linux kernel detects memory shortage.

2.OOM Killer selects a process.

3.The process is terminated.

4.Docker restart policy can restart the container.



Check OOM events:

sudo dmesg | grep -i oom





#### **Commands Used**



Linux

sudo adduser devopsuser

sudo ufw status

sudo systemctl status docker



Docker

docker compose up -d

docker ps

docker logs backend

docker stats

docker network inspect app-network



Git

git branch

git checkout develop

git checkout feature/frontend

git checkout feature/backend

git tag v1.0




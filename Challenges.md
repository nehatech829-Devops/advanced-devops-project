# Challenges Faced

## 1. Backend to Database Connectivity

The backend container attempted to connect before the MySQL service was fully initialized.

### Solution
- Added container health checks.
- Configured proper service dependencies.
- Verified database connectivity through container logs.

---

## 2. Docker Networking

Initially, container-to-container communication required validation to ensure services could communicate over the custom bridge network.

### Solution
- Created a custom Docker bridge network.
- Verified network configuration using `docker network inspect`.
- Used service names instead of hardcoded IP addresses.

---

## 3. Database Persistence

There was a requirement to retain database data even after container restarts.

### Solution
- Implemented named Docker volumes.
- Tested persistence by restarting the database container and verifying stored data.

---

## 4. Nginx Reverse Proxy Configuration

Configuring Nginx to properly route traffic between frontend and backend services required multiple tests.

### Solution
- Updated Nginx configuration files.
- Verified routing and accessibility through browser testing.
- Reviewed Nginx logs for troubleshooting.

---

## 5. File Permission Issues

Some configuration files generated permission-related errors during Git operations and deployment.

### Solution
- Corrected file ownership using `chown`.
- Assigned appropriate file permissions.
- Revalidated access after changes.

---

## 6. Git Branch Management

Managing multiple branches and pull requests while maintaining a clean workflow required careful coordination.

### Solution
- Followed a structured branching strategy.
- Used feature branches for isolated development.
- Merged changes through pull requests.

---

## 7. Environment Variable Management

Sensitive credentials needed to be protected while maintaining application portability.

### Solution
- Stored credentials in environment variables.
- Added `.env` to `.gitignore`.
- Created `.env.example` for documentation purposes.

---

## 8. Container Health Monitoring

Ensuring that all services remained healthy and operational required continuous monitoring.

### Solution
- Implemented Docker health checks.
- Monitored resource usage with `docker stats`.
- Analyzed logs using `docker logs`.

---

## 9. Firewall Configuration

Configuring the firewall while ensuring application accessibility required careful port management.

### Solution
- Enabled UFW firewall.
- Allowed only required ports (22, 80, 443).
- Verified firewall rules after configuration.

---

## 10. Production Readiness Validation

Validating that the application followed production best practices required additional testing.

### Solution
- Avoided using `latest` image tags.
- Configured restart policies.
- Cleaned unused Docker resources.
- Performed deployment verification and monitoring checks.

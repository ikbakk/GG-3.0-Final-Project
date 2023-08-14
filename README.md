# Generas GIGIH 3.0 Fullstack Engineer Path - Final Project

## Getting Started

### Local

1. Clone the repo:
   ```sh
   git clone https://github.com/ikbakk/GG-3.0-Final-Project
   ```

2. Change folder name to lowercase (forgot to change folder name in initial commit)

3. Build docker image:
   ```sh
   docker build -t <image_name> .
   ```

4. Run docker image:
   ```sh
   docker run -d -p 80:80 <image_name>
   ```

5. Go to `http://localhost` in browser

### Docker Hub

1. Pull docker image from docker hub:
   ```sh
   docker pull ikbak/final-project-gg:1.0
   ```
2. Run docker image:
   ```sh
   docker run -d -p 80:80 ikbak/final-project-gg:1.0
   ```

### Bonus

- Add search feature

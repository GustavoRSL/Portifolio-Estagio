# Esstudos relacionado a Docker

## Comandos

`docker ps -a`: é utilizado para listar todos os containers existentes no sistema, incluindo aqueles que não estão em execução no momento.

`docker images`: é usado para listar as imagens disponíveis no sistema Docker.

`docker run <image>`: utilizado para executar um container a partir de uma imagem existente no Docker Hub ou em um repositório de imagens local.

`docker run -it <image>`: cria e executa um container do Docker em modo interativo (interactive mode), ou seja, ele permite que o usuário interaja com o container por meio do terminal do host.

`docker start <container>`: é usado para iniciar um container previamente criado que esteja parado ou inativo. 

`docker start -a -i <container>`: é usado para iniciar um container previamente criado e exibir sua saída no terminal do host. 

`docker stop <container>`: é usado para parar um ou mais containers em execução.

`docker rm <container>`: é usado para remover um ou mais containers que estejam parados ou inativos.

`docker container prune`: é usado para remover todos os containers que estejam parados ou inativos, liberando espaço em disco. 

`docker rmi <image>`: é usado para remover uma ou mais imagens Docker do sistema. 

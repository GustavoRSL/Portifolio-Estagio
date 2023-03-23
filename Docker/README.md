# Estudos relacionados ao Docker

## Conceitos estudados

- [Volumes](https://github.com/GustavoRSL/Portifolio-Estagio/tree/docker/Docker/Volumes)

## Comandos

### Docker Run

`docker run <image>`: utilizado para executar um container a partir de uma imagem existente no Docker Hub ou em um repositório de imagens local.

`docker run -it <image>`: cria e executa um container do Docker em modo interativo (interactive mode), ou seja, ele permite que o usuário interaja com o container por meio do terminal do host.

`docker run -d <image>`: O parâmetro "-d" ou "--detach" informa ao Docker para executar o contêiner em segundo plano, sem interação com o terminal atual, liberando o terminal para que o usuário possa continuar trabalhando nele. Isso significa que o usuário pode continuar a executar outras tarefas no terminal sem que o processo do contêiner interrompa ou bloqueie a execução.

`docker run -P <image>`: O parâmetro "-P" ou "--publish-all" informa ao Docker para publicar todas as portas expostas pelo contêiner para portas aleatórias disponíveis no host. Isso é útil quando o usuário não sabe qual porta precisa ser acessada para se conectar a um serviço específico em um contêiner.

`docker ps -a`: é utilizado para listar todos os containers existentes no sistema, incluindo aqueles que não estão em execução no momento.

`docker run -p <portHost:portImage> <image>`: O parâmetro "-p" ou "--publish" informa ao Docker para publicar a(s) porta(s) especificada(s) pelo usuário no host, mapeando-a(s) para a(s) porta(s) correspondente(s) no contêiner.

`docker run --name <nome> <image>`: O parâmetro "--name" seguido do nome escolhido pelo usuário informa ao Docker para atribuir esse nome ao novo contêiner. Isso é útil para identificar facilmente um contêiner e facilitar sua gestão.

`docker run -e AUTHOR=”Gustavo” <image>`: O parâmetro "-e" seguido do nome e valor da variável informa ao Docker para definir essa variável de ambiente no contêiner. Isso permite que as aplicações dentro do contêiner acessem e usem essas variáveis de ambiente.


### Docker start/stop

`docker start <container>`: é usado para iniciar um container previamente criado que esteja parado ou inativo. 

`docker stop <container>`: é usado para parar um ou mais containers em execução.

`docker start -a -i <container>`: é usado para iniciar um container previamente criado e exibir sua saída no terminal do host. 

`docker stop -t 0 $(docker ps -q)`: O parâmetro "-t 0" indica ao Docker para aguardar 0 segundos para que os contêineres parem antes de forçar a interrupção. O comando "$(docker ps -q)" é usado para obter os IDs dos contêineres em execução no host Docker e passá-los como argumentos para o comando "docker stop".

### Docker remove

`docker rm <container>`: é usado para remover um ou mais containers que estejam parados ou inativos.

`docker rmi <image>`: é usado para remover uma ou mais imagens Docker do sistema. 

`docker images`: é usado para listar as imagens disponíveis no sistema Docker.

`docker container prune`: é usado para remover todos os containers que estejam parados ou inativos, liberando espaço em disco. 

`docker port`: é utilizado para listar as portas mapeadas do contêiner Docker.

`docker ps -q`: O parâmetro "-q" ou "--quiet" indica ao Docker para retornar apenas os IDs dos contêineres em execução e omitir outras informações, como o nome, a imagem, a porta, entre outras.

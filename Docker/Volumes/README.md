#Volumes

## Por que criar volumes??

Criar volumes com o Docker é uma maneira conveniente de persistir dados e arquivos gerados por contêineres Docker.

Os volumes permitem que os contêineres compartilhem e acessem os mesmos dados, mesmo quando os contêineres são destruídos e recriados. Eles também permitem que os dados persistam além do ciclo de vida dos contêineres, o que significa que os dados podem ser mantidos independentemente dos contêineres em execução.

Isso é especialmente útil para aplicativos que geram dados importantes, como bancos de dados, ou que precisam compartilhar dados entre contêineres, como um sistema de arquivos compartilhado.

Ao criar volumes, os usuários podem controlar onde os dados são armazenados no host Docker e como eles são acessados pelos contêineres. Os volumes também permitem que os usuários definam permissões de acesso a dados para diferentes contêineres e usuários.

Além disso, os volumes do Docker também permitem que os dados sejam compartilhados facilmente entre hosts Docker, permitindo que os usuários movam dados e aplicativos entre diferentes máquinas sem precisar copiar manualmente os dados.

Em resumo, criar volumes com o Docker oferece uma maneira flexível e poderosa de gerenciar dados e arquivos gerados por contêineres, permitindo que os usuários controlem o armazenamento, o acesso e a persistência dos dados.

### Comandos

`docker run -v`: O parâmetro "-v" ou "--volume" é usado para criar e montar o volume no contêiner.

#### Exemplo:

`docker run -v <caminho local>:<caminho do contêiner> <imagem>`

Este comando criará um novo volume no host Docker e o montará no contêiner em execução no caminho especificado. O caminho local é o caminho no host Docker onde os dados do volume serão armazenados, enquanto o caminho do contêiner é o caminho onde o volume será montado dentro do contêiner.

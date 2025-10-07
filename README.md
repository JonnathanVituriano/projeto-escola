# API Escolar

Uma API para gerenciar escolas, cursos e alunos.

## Instalação

1.  Clone o repositório:
    ```bash
    git clone <URL do repositório>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd <nome do repositório>
    ```
3.  Instale as dependências. As dependências estão listadas em `package.json` e podem ser instaladas usando `npm`:
    ```bash
    npm install
    ```

4.  Configure o banco de dados. Este projeto usa o Prisma para o gerenciamento do banco de dados. Execute o seguinte comando para aplicar as migrações do banco de dados e criar o esquema do banco de dados:
    ```bash
    npx prisma migrate dev
    ```
    Isso também irá gerar o Prisma Client, que é usado para interagir com o banco de dados.

## Executando a aplicação

### Modo de desenvolvimento

Para executar a aplicação em modo de desenvolvimento, que reiniciará automaticamente o servidor a cada alteração de arquivo, use o seguinte comando:

```bash
npm run dev
```

### Modo de produção

Para construir e executar a aplicação em modo de produção, que é otimizado para desempenho, use os seguintes comandos:

```bash
npm run build
npm start
```

## Documentação da API

Depois que a aplicação estiver em execução, a documentação da API do Swagger estará disponível em:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

A documentação do Swagger fornece uma interface interativa para explorar e testar os endpoints da API.

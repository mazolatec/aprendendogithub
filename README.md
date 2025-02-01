
## Minhas Anotações sobre Git e GitHub
Olá, pessoal! 👋

Estas são minhas anotações sobre minha experiência com Git e GitHub, e quero compartilhá-las com vocês. Atualmente, trabalho com C e C#, então ainda não sou programador web, mas estou aprendendo.

Se puderem contribuir com sugestões para melhorar o conteúdo e tornar os exemplos mais claros, será muito bem-vindo! Fiz essas anotações porque tive dificuldades em encontrar informações objetivas e acredito que elas podem ajudar quem está começando. 🚀

# Para iniciar, recomendo clonar este repositório e abrir o arquivo index.html
Ele contém um pequeno projeto usando HTML, CSS e JavaScript, ideal para praticar os primeiros passos com o Git.



## 📌 Configuração do Git e SSH no seu PC  

Este guia contém os passos necessários para configurar o **Git** no seu PC e credenciá-lo via **SSH** para acessar o GitHub.  

---

## 🔙 [Voltar](../index.html)  

## ⚙️ Configurando Usuário no Git  

Para garantir que suas alterações no Git estejam associadas ao seu usuário, execute os seguintes comandos:


Descrição: Adicione seu nome
📝 Comentário: Configura o nome do usuário para acesso via terminal

git config --global user.name "Seu Nome"

Descrição: Adicione seu e-mail
📝 Comentário: Configura o e-mail do usuário para acesso via terminal

git config --global user.email "SeuEmail@exemplo.com"

##🔑 Gerando uma Chave SSH
Para autenticar seu PC no GitHub via SSH, gere uma chave pública e privada com o seguinte comando:

ssh-keygen -t ed25519 -C "SeuEmail@exemplo.com"

# 📍 Localização da Chave SSH
Após a execução do comando, sua chave pública será gerada no seguinte local:

/c/Users/seu-usuario/.ssh/id_ed25519.pub
Descrição: Abrir o conteúdo deste arquivo e cadastrá-lo no GitHub

# 🔗 Cadastrando a Chave SSH no GitHub
1. Abra o arquivo gerado (id_ed25519.pub) e copie seu conteúdo
2. Acesse GitHub Dashboard
3. Vá para Settings → SSH and GPG keys → New SSH key
4. No campo Title, adicione o nome do seu PC
5. No campo Key, cole o conteúdo da chave pública
6. Clique em Add SSH Key

# ✅ Testando a Conexão com o GitHub
Após adicionar a chave, teste se a autenticação está funcionando corretamente:

ssh -T git@github.com

Se a configuração estiver correta, você verá a seguinte mensagem:
Hi <seu-usuario>! You've successfully authenticated, but GitHub does not provide shell access.


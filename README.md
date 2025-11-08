Memory Keeper 💖

Um portal web full-stack interativo, construído como um álbum de recortes digital para documentar e celebrar memórias preciosas. O projeto permite a criação de capítulos de uma história, álbuns de fotos e uma trilha sonora personalizada.
Este foi um "projeto-paixão" de iniciativa pessoal, desenvolvido para aplicar e integrar na prática tecnologias como Django, React e CSS. A motivação foi criar um portal de memórias completo, o que guiou todo o esforço de desenvolvimento, desde o design da API até a implantação na nuvem.

✨ Funcionalidades Principais

    Homepage Dinâmica: Exibe uma mensagem de boas-vindas inteligente que muda com base em datas especiais (como aniversários).

    Player de Música Contínuo: Uma "rádio" personalizada que toca as músicas favoritas do casal, com controles de volume, play/pause e mudo integrados à barra de navegação, persistindo entre as páginas.

    "A História": Uma seção cronológica que exibe capítulos de texto e imagens com animações suaves de "fade-in" conforme o usuário rola a página.

    "Memórias": Uma galeria de álbuns de fotos organizada em grade.

        Galeria Interativa: Ao clicar em um álbum, um carrossel de fotos (react-responsive-carousel) é exibido.

        Zoom de Imagem: Cada foto no carrossel pode ser ampliada em tela cheia (yet-another-react-lightbox).

    Backend com CMS: Todo o conteúdo do site (capítulos, fotos, músicas, imagens decorativas) é gerenciado através do painel de administração nativo do Django.

🛠️ Tecnologias Utilizadas

Este projeto utiliza uma arquitetura desacoplada (headless).

Backend (Servidor)

    Python

    Django & Django REST Framework (para a API REST)

    Gunicorn (Servidor web de produção)

Frontend (Cliente)

    React.js

    Vite (Ambiente de desenvolvimento)

    React Router (react-router-dom) (Para a navegação entre páginas)

    CSS Puro (Para estilização, com Flexbox e Grid)

Banco de Dados & Infraestrutura

    PostgreSQL (Banco de dados de produção, hospedado no Render)

    Cloudinary (Armazenamento de mídia em nuvem para produção)

    Git & GitHub (Controle de versão)

🚀 Como Rodar Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo.

Pré-requisitos

    Git

    Python 3.11+

    Node.js (LTS)

1. Clonar o Repositório

Bash

# Clone o projeto para sua máquina
git clone https://github.com/Augusto-jjoao/Memory-Keeper.git

# Entre na pasta do projeto
cd Memory-Keeper

2. Configurar o Backend (Python)

Bash

# Crie um ambiente virtual
python -m venv .venv

# Ative o ambiente virtual
# No Windows:
.venv\Scripts\activate
# No Mac/Linux:
# source .venv/bin/activate

# Instale todas as dependências do Python
pip install -r requirements.txt

# Crie o banco de dados local (SQLite)
python manage.py migrate

# Crie um usuário administrador local
python manage.py createsuperuser

3. Configurar o Frontend (React)

Bash

# Navegue até a pasta do frontend
cd frontend

# Instale todas as dependências do Node.js
npm install

# Volte para a pasta raiz
cd ..

4. Iniciar os Servidores

Este projeto precisa de dois terminais rodando ao mesmo tempo.

    No Terminal 1 (para o Backend):

        Certifique-se de que o ambiente .venv está ativado.
    Bash

python manage.py runserver

(O backend estará rodando em http://127.0.0.1:8000)

No Terminal 2 (para o Frontend):
Bash

    cd frontend
    npm run dev

    (O frontend estará rodando em http://localhost:5173)

Abra http://localhost:5173 no seu navegador para ver o site!

Dica para Windows: O arquivo iniciar_servidores.bat na raiz do projeto automatiza o Passo 4. Após configurar o backend e o frontend (passos 2 e 3), você pode simplesmente dar um clique duplo nele para iniciar os dois servidores e abrir o site no seu navegador.

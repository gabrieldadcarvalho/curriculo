/* Reset e configurações básicas */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
}

/* Fundo com animação */
body {
  background: #111;
  position: relative;
  overflow: auto;
}
#backgroundCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* Centraliza a folha A4 */
#pageWrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Contêiner com dimensões aproximadas de uma folha A4 */
.page {
  width: 210mm;
  height: 297mm;
  background: #fff;
  color: #000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  width: 30%;
  background: #222;
  padding: 20px;
  color: #fff;
}
.sidebar .profile-pic {
  width: 100%;
  max-width: 120px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 10px;
}
.sidebar h1 {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 15px;
}
.sidebar .contato, .sidebar .habilidades {
  margin-bottom: 20px;
}
.sidebar h2 {
  font-size: 1em;
  margin-bottom: 10px;
  border-bottom: 1px solid #444;
  padding-bottom: 5px;
  text-align: center;
}
.sidebar p {
  font-size: 0.9em;
}

/* Progress bars */
.skill {
  margin-bottom: 10px;
}
.skill span {
  font-size: 0.9em;
}
.progress {
  width: 100%;
  background: #444;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
}
.progress-bar {
  height: 8px;
  background: #00ff99;
}

/* Conteúdo principal */
.content {
  width: 70%;
  padding: 20px;
  overflow-y: auto;
}
.content section {
  margin-bottom: 20px;
}
.content h2 {
  font-size: 1.2em;
  border-bottom: 2px solid #00ff99;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
.content p, .content ul {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 10px;
}
.content ul {
  list-style-type: disc;
  padding-left: 20px;
}
.content a {
  color: #00ff99;
  text-decoration: none;
}
.content a:hover {
  text-decoration: underline;
}

/* Responsividade para telas menores */
@media (max-width: 800px) {
  .page {
    width: 90%;
    height: auto;
    flex-direction: column;
  }
  .sidebar, .content {
    width: 100%;
  }
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  {"name":"cloudchanges_site","type":"code/html","content":"<!DOCTYPE html>\n<html lang="es">\n<head>\n <meta charset="UTF-8" />\n <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n <title>CloudChanges · Aprendizaje con IA</title>\n <style>\n body {\n margin: 0;\n font-family: Arial, sans-serif;\n background: #f5f7fa;\n color: #222;\n line-height: 1.6;\n }\n header {\n background: #4f46e5;\n color: white;\n padding: 2rem;\n text-align: center;\n }\n nav {\n background: #3730a3;\n padding: 1rem;\n text-align: center;\n }\n nav a {\n color: white;\n margin: 0 1rem;\n text-decoration: none;\n font-weight: bold;\n }\n .container {\n max-width: 900px;\n margin: auto;\n padding: 2rem;\n }\n section {\n margin-bottom: 3rem;\n background: white;\n padding: 2rem;\n border-radius: 12px;\n box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n }\n h2 {\n color: #4f46e5;\n }\n footer {\n text-align: center;\n padding: 2rem;\n background: #eef1f6;\n margin-top: 3rem;\n }\n </style>\n</head>\n<body>\n <header>\n <h1>CloudChanges</h1>\n <p>Aprendizaje y herramientas impulsadas por la Inteligencia Artificial</p>\n </header>\n\n <nav>\n <a href="#identidad">Identidad Digital</a>\n <a href="#imagenes">Creadores de Imágenes</a>\n <a href="#videos">Videos con IA</a>\n <a href="#cv">Modelado de CV</a>\n <a href="#webs">Páginas Web con IA</a>\n </nav>\n\n <div class="container">\n\n <section id="identidad">\n <h2>Identidad Digital y Cultura de Aprendizaje</h2>\n <p>\n Construyo mi identidad digital en la red y la gestiono eficazmente para profundizar en el aprendizaje de la cultura digital.\n Empleo una dirección de correo electrónico específica para el curso, independiente de la personal, y la vinculo a las redes sociales.\n </p>\n </section>\n\n <section id="imagenes">\n <h2>Creadores de Imágenes con IA</h2>\n <p>\n Las herramientas de IA permiten generar imágenes profesionales para proyectos educativos, presentaciones, blogs o redes sociales.\n Entre las más destacadas se encuentran:\n </p>\n <ul>\n <li>DALL·E</li>\n <li>Midjourney</li>\n <li>Stable Diffusion</li>\n <li>Canva AI</li>\n </ul>\n </section>\n\n <section id="videos">\n <h2>Creación de Vídeos con IA</h2>\n <p>\n La inteligencia artificial acelera enormemente la creación de vídeos explicativos, educativos o creativos. Algunas herramientas útiles son:\n </p>\n <ul>\n <li>Sora (OpenAI)</li>\n <li>RunwayML</li>\n <li>Pika Labs</li>\n <li>Veed.io AI</li>\n </ul>\n </section>\n\n <section id="cv">\n <h2>Modelado y Mejora de Currículums con IA</h2>\n <p>\n La IA permite crear y optimizar currículums profesionales, resaltando habilidades y experiencia de forma clara y destacada. Opciones recomendadas:\n </p>\n <ul>\n <li>Kickresume AI</li>\n <li>Canva CV AI</li>\n <li>Teal Resume Builder</li>\n <li>ChatGPT para redacción y mejora de perfiles</li>\n </ul>\n </section>\n\n <section id="webs">\n <h2>Creación de Páginas Web con IA</h2>\n <p>\n Es posible crear sitios web completos mediante inteligencia artificial sin conocimientos previos de programación. Herramientas destacadas:\n </p>\n <ul>\n <li>Webstudio (IA + exportación gratuita)</li>\n <li>Framer AI</li>\n <li>Durable</li>\n <li>Wix ADI</li>\n </ul>\n </section>\n\n </div>\n\n <footer>\n <p>CloudChanges · Aprendizaje con Inteligencia Artificial</p>\n </footer>\n\n <!-- Chatbot de Zapier -->\n <script async type="module" src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js\">
</script>\n <zapier-interfaces-chatbot-embed is-popup="true" chatbot-id="cmj00zte1002a12n4fmnlj317"></zapier-interfaces-chatbot-embed>\n\n</body>\n</html>"}
  )
}

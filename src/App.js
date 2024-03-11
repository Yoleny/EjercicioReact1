import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-emma.png'
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      </div>
      <div className='contenedor-principal'>
        <Testimonio
          imagen='testimonio-sarah.png'
          nombre='Sarah Paz'
          pais='Bolivia'
          cargo='Doctora'
          empresa='Hospital AGRAMONT'
          testimonio='. El poder tener la oportunidad de trabajar hacia el logro de mi meta académica desde todas partes del mundo ha sido un privilegio. En mi caso desde la guerra tuve la oportunidad de estudiar mi doctorado' />
      </div>
      <div className='contenedor-principal'>
        <Testimonio
          imagen='johan.jpg'
          nombre='Johan Romero '
          pais='Honduras'
          cargo='Lic. En Recursos Humanos'
          empresa='RKH'
          testimonio='Estudiar en Ceutec ha sido de las mejores decisiones que he tomado.
          Recibí apoyo por parte de la universidad para iniciar mis estudios y
          terminar mi carrera universitaria en corto tiempo. Sus beneficios a la
          comunidad estudiantil como el programa de empleabilidad me ayudaron
          a conseguir mi primer empleo donde he logrado poner en práctica mi
          profesión y gracias a eso lograr cumplir otros sueños y metas personales.' />
      </div>
      <div className='contenedor-principal'>
        <Testimonio
          imagen='merilyn.jpg'
          nombre='Merilyn Escalante'
          pais='Canada'
          cargo='Tecnico En Administracion'
          empresa='Avennt'
          testimonio='Estudiar en CEUTEC significa para mi tener las puertas abiertas; sin importar la edad el tiempo o circunstacia del tiempo tengo la opurtunida de poder seguir preparandome profesionalmente' />
      </div>
      <div className='contenedor-principal'>
        <Testimonio
          imagen='gabriela.jpg'
          nombre='Gabriela Torres'
          pais='Costa Rica'
          cargo='Técnico en Administración/Lic. En Administración de Empresas'
          empresa='cargil'
          testimonio='En Ceutec encontré la oportunidad de alcanzar mi carrera profesional, a
          pesar de cada una de las circunstancias personales y retos laborales que
          se presentaron en el camino. Aquí siempre hay una oportunidad para
          seguir avanzando, sumando de nuestra parte esfuerzo, disciplina y
          compromiso. Ceutec es una puerta que se abre y nos impulsa a una
          educación y vida profesional de calidad
          ' />
      </div>
    </div>

    
  );
 
}




export default App;

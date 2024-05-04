"use client"

import React, { useState, useEffect } from 'react';

const QuizComponent = () => {
  const questionsData = {
    questions: [
     {
      question: "Según Luis A. Romero, durante el gobierno de Carlos Menem, la bonanza inicial ocultó por un tiempo los aspectos más duros de la gran transformación.",
      answers: [
       "A. Es falso, porque la convertibilidad fue exitosa y no tuvo contraindicaciones hasta el año 1999, en que Menem abandonó el poder.",
       "B. Es falso, porque la Argentina venía de un duro escenario anterior y todo lo que pasó posteriormente pareció mucho más aceptable.",
       "C. Es verdadero, porque la inflación no paró de crecer por la disimulada emisión monetaria.",
       "D. Es verdadero, porque los efectos del ajuste estatal se disimularon al principio, por las importantes indemnizaciones pagadas, pero explotaron a partir de 1995."
      ],
      correctAnswer: "D. Es verdadero, porque los efectos del ajuste estatal se disimularon al principio, por las importantes indemnizaciones pagadas, pero explotaron a partir de 1995."
     },
     {
      question: "En el video sobre la política del futuro, Julia Pomares afirma que los líderes políticos cada vez privilegian más las identidades globales, pero, al mismo tiempo, enfrentan problemas que son cada vez más locales.",
      answers: [
       "A. Es falso, porque los líderes políticos van adaptando sus identidades a las demandas electorales que reciben de sus electores.",
       "B. Es falso, porque los países hoy son muy grandes para encarar los problemas pequeños, pero muy pequeños para los problemas grandes.",
       "C. Es verdadero, porque estamos en un mundo donde hay muchos gobiernos municipales que pueden resolver los grandes problemas globales.",
       "D. Es verdadero, porque vivimos un tiempo histórico donde se observa la vuelta a Estados-nación de tipo absolutistas."
      ],
      correctAnswer: "B. Es falso, porque los países hoy son muy grandes para encarar los problemas pequeños, pero muy pequeños para los problemas grandes."
     },
     {
      question: "En el video en que Eduardo Levy Yeyati entrevista a Pablo Gerchunoff se hace referencia a que Raúl Alfonsín, después de las elecciones intermedias de octubre de 2001, se dio cuenta de que había una conspiración peronista para terminar con el gobierno de de la Rúa.",
      answers: [
       "A. Es falso, porque el gobierno de De la Rúa tenía una sólida relación con Menem y Duhalde, producto de continuar con la convertibilidad.",
       "B. Es falso, porque las elecciones de octubre se convirtieron en un masivo plebiscito a favor del gobierno de De la Rúa.",
       "C. Es verdadero, porque los legisladores peronistas ocuparon rápidamente los cargos de la sucesión presidencial en el Congreso después de las elecciones.",
       "D. Es verdadero, porque el sector del peronismo liderado por Néstor Kirchner quería llegar al poder lo antes posible."
      ],
      correctAnswer: "C. Es verdadero, porque los legisladores peronistas ocuparon rápidamente los cargos de la sucesión presidencial en el Congreso después de las elecciones."
     },
     {
      question: "Según Diego Pimentel, el filósofo surcoreano Han sostiene que la relación de los humanos con las cosas ha sido transferida a una nueva relación con la información.",
      answers: [
       "A. Es falso, porque la información solo es un conjunto de datos que las personas usan para tomar decisiones.",
       "B. Es falso, porque ese vínculo con la información es una característica del ser humano en cualquier tiempo y espacio.",
       "C. Es verdadero, porque vivir en la información es actualmente la idea de vivir al ritmo de la información constante.",
       "D. Es verdadero, porque nuestra nueva obsesión no son ya las cosas, sino el dinero y el prestigio social."
      ],
      correctAnswer: "C. Es verdadero, porque vivir en la información es actualmente la idea de vivir al ritmo de la información constante."
     },
     {
      question: "Según afirma Paula Bertino, a lo largo de su historia contemporánea, América Latina ha sufrido una serie recurrente de crisis y éstas han sido exclusivamente políticas.",
      answers: [
       "A. Es falso, porque a lo largo de su historia contemporánea, América Latina ha sufrido una serie recurrente de crisis económicas y sociales.",
       "B. Es verdadero, porque a lo largo de su historia contemporánea, América Latina ha sufrido una serie recurrente de crisis donde los políticos han sido la causa y los responsables.",
       "C. Es verdadero, porque a lo largo de su historia contemporánea, América Latina ha sufrido una serie recurrente de crisis culturales.",
       "D. Es falso, porque a lo largo de su historia contemporánea, América Latina ha sufrido una serie recurrente de crisis ideológicas."
      ],
      correctAnswer: "A. Es falso, porque a lo largo de su historia contemporánea, América Latina ha sufrido una serie recurrente de crisis económicas y sociales."
     },
     {
      question: "Según afirma Diego Bernardini, las personas mayores se convierten en un grupo subordinado por una gran parte de la sociedad actual.",
      answers: [
       "A. Es verdadero, se trata de una actitud que subyace en el inconsciente y se hace realidad como edadismo.",
       "B. Es verdadero, porque ancianos y niños son personas que, justificadamente, carecen de autonomía para decidir.",
       "C. Es falso, porque en la sociedad actual no hay edadismo y los adultos mayores gozan de plena autonomía en sus decisiones.",
       "D. Es falso, porque desde tiempos inmemoriales los ancianos fueron personas importantes e independientes."
      ],
      correctAnswer: "A. Es verdadero, se trata de una actitud que subyace en el inconsciente y se hace realidad como edadismo."
     },
     {
      question: "Según Edgar Straehle, una de las consecuencias más interesantes de la aparición y difusión de internet ha sido la inversión del tradicional pesimismo que, al menos en el seno de la academia, había prevalecido después de la Segunda Guerra Mundial. Esto generó que:",
      answers: [
       "A. No se valore el potencial de internet y se desconfíe en que los problemas correspondientes a la política pudieran ser resueltos gracias a la instalación y consolidación de una herramienta tecnológica.",
       "B. Haya lecturas demasiado esperanzadoras acerca de nuestro futuro, en muchos casos por un desconocimiento de las ambivalencias aparejadas a las dinámicas de la red.",
       "C. Se hayan generado críticas contra este nuevo optimismo, en especial contra las tendencias ciberutopistas que ven en la red la definitiva (e incluso mágica) tabla de salvación de los principales males del presente.",
       "D. Se suelan olvidar que la red constituye una realidad profundamente homogénea organizada a través de algoritmos.",
       "E. Las opciones correctas son la A y la C.",
       "F. Las opciones correctas son la B y la C.",
       "G. Las opciones correctas son la C y la D.",
       "H. Las opciones correctas son la A, la C y la D."
      ],
      correctAnswer: "F. Las opciones correctas son la B y la C."
     },
     {
      question: "En el video con la entrevista a Miguel Ángel Quintana Paz, el académico afirma que la ideología “woke” modifica la tradición judeocristiana en la idea de darle protagonismo al sufriente, a la víctima, eliminando la idea de perdón o reconciliación. Esto es así porque:",
      answers: [
       "A. En la ideología woke se te desprecia si has cometido un error, si te has comportado de una manera inadecuada en un momento determinado de tu vida, aunque haya sido hace 20 o 30 años. Eso puede volver siempre.",
       "B. En la ideología woke si has cometido un error, hagas lo que hagas, lo único que te queda es pedir perdón, pero aún si, incluso si lo pides, nunca se te da.",
       "C. En la ideología woke la humillación del que cometió un error es importante, porque también es muy importante en la tradición judeo-cristiana en la que vivimos.",
       "D. En la ideología woke se busca consolidar las ideas y tradicionales clásicas que sostienen a la sociedad en la que vivimos.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la B y la C.",
       "G. Las opciones correctas son la C y la D.",
       "H. Las opciones correctas son la A, la C y la D."
      ],
      correctAnswer: "E. Las opciones correctas son la A y la B."
     },
     {
      question: "Según Luis A. Romero, con la renuncia del presidente de la Rúa terminó el breve interludio de un gobierno no peronista en el ciclo del segundo peronismo. Esto fue así porque:",
      answers: [
       "A. Los datos duros de la economía ya indicaban en 1999 que, salvo algún cambio importante en las condiciones externas, el derrumbe fiscal era imposible de evitar.",
       "B. La dolarización de la economía propuesta por de la Rúa no fue aprobada en el Congreso a pesar de tener mayoría en ambas cámaras.",
       "C. En los años de gobierno de la Alianza los datos cambiaron para peor, sobre todo, con la nueva política de Estados Unidos y el FMI.",
       "D. El final pudo haber sido diferente en su forma y su profundidad, pero eso no fue responsabilidad del gobierno de de la Rúa ya que éste hizo todo lo posible para salvar el gobierno que encabezaba.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la A y la C.",
       "G. Las opciones correctas son la A y la D.",
       "H. Las opciones correctas son la B y la D."
      ],
      correctAnswer: "F. Las opciones correctas son la A y la C."
     },
     {
      question: "Según Armando Chaguaceda y Eloy Viera el régimen cubano, como quiera que se lo evalúe, no pasa un test serio de democraticidad formal o sustantiva. Esto es así porque:",
      answers: [
       "A. Posee claras falencias en sus horizontes liberales, republicanos y socialistas.",
       "B. Es “una democracia diferente” que no puede ser comprendida a la manera occidental.",
       "C. Se trata de un régimen político de matriz neoliberal.",
       "D. La forma real del poder en la isla es un socialismo de Estado y una autocracia con un núcleo familiar y militar ‒monopolizadora del poder, el saber y la riqueza‒.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la B y la C.",
       "G. Las opciones correctas son la C y la D.",
       "H. Las opciones correctas son la A y la D."
      ],
      correctAnswer: "H. Las opciones correctas son la A y la D."
     },
     {
      question: "Según Tomás Straka, a diferencia de otros gobiernos que dominaron la región en la primera década del siglo XXI, como los de Lula Da Silva, Rafael Correa, Pepe Mujica y Evo Morales, el chavismo decidió llevar las cosas por un camino más radical. Esto fue así porque:",
      answers: [
       "A. Tomó decisiones más temerarias en la administración de los recursos, pero, en proporción a aquellas apuestas, los resultados fueron más graves cuando las cosas no salieron como se esperaban.",
       "B. Se trazó metas más altas e hizo más ruido internacional, pero, en proporción a aquellas apuestas, los resultados fueron más graves cuando las cosas no salieron como se esperaban.",
       "C. Se trazó metas más altas e hizo más ruido internacional, y cuando, en proporción a aquellas apuestas, los resultados fueron mejores que los previstos, todo el poder quedó en manos de Chávez.",
       "D. Descontando los años del boom petrolero y los indicadores sociales que entonces hicieron aplaudir al mundo, el chavismo no logró ofrecer la estabilidad política, el crecimiento económico y la disminución de la pobreza que se vieron en otros países de la región.",
       "E. Las opciones correctas son la A y la D.",
       "F. Las opciones correctas son la B y la C.",
       "G. Las opciones correctas son la C y la D.",
       "H. Las opciones correctas son la A, la B y la D."
      ],
      correctAnswer: "H. Las opciones correctas son la A, la B y la D."
     },
     {
      question: "Según Romero, de la Rúa asumió el gobierno en medio de una crisis de la convertibilidad que no era percibida socialmente pero que estaba en un nivel preocupante. Esto se observaba en que:",
      answers: [
       "A. La convertibilidad, sumada a diez años de inflación interna, tuvo como consecuencia un peso sobrevaluado que hacía difícil competir en los mercados mundiales.",
       "B. La emisión descontrolada volvía a presionar sobre el indicie inflacionario.",
       "C. Retrocedieron las exportaciones sojeras, que habían sido uno de los pilares de la transformación de los noventa.",
       "D. Pagar los vencimientos de la deuda requería un enorme esfuerzo fiscal.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la A y la C.",
       "G. Las opciones correctas son la A y la D.",
       "H. Las opciones correctas son la B y la D."
      ],
      correctAnswer: "G. Las opciones correctas son la A y la D."
     },
     {
      question: "Entre mediados del siglo XX e inicios del siglo XXI hubo en Argentina numerosos cambios de gobiernos y de régimen político. Entre ellos se puede mencionar:",
      answers: [
       "A. La reelección de Menem generó un cambio de régimen político porque fue intermediada por la reforma constitucional de 1994.",
       "B. El paso del gobierno de Adolfo Rodríguez Saá a Eduardo Duhalde fue un cambio de régimen político ya que pasó de un sistema de elección popular por elecciones a otra de tipo parlamentaria.",
       "C. El paso del gobierno de Fernando de la Rúa al de Rodríguez Saá no generó un cambio de régimen político.",
       "D. El paso del gobierno de Raúl Alfonsín al de Carlos Menem no generó un cambio de régimen político a pesar de integrar ambos dos partidos diferentes.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la A y la C.",
       "G. Las opciones correctas son la A y la D.",
       "H. Las opciones correctas son la C y la D."
      ],
      correctAnswer: "H. Las opciones correctas son la C y la D."
     },
     {
      question: "Julio Montero afirma que más allá de su larga trayectoria filosófica y de su influencia sobre varias constituciones occidentales de los siglos XVIII y XIX, la noción de derechos humanos recién alcanzó aceptación internacional plena durante la Segunda Guerra Mundial. Esto es así porque:",
      answers: [
       "A. Hasta ese momento, había predominado la idea de que cada Estado tenía total libertad para fijar su propio marco legal.",
       "B. Lo que los gobiernos hacían dentro de su territorio era un asunto de cada comunidad política y de nadie más.",
       "C. Hasta ese momento, había predominado la idea de que cada Estado tenía total libertad para decidir qué derechos les reconocía a sus ciudadanos.",
       "D. Hasta ese momento, había predominado la idea de que solo la ONU podía intervenir si se violaban los derechos humanos de los ciudadanos de un país.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la B y la D.",
       "G. Las opciones correctas son la C y la D.",
       "H. Las opciones correctas son la A, la B y la C."
      ],
      correctAnswer: "H. Las opciones correctas son la A, la B y la C."
     },
     {
      question: "Encabezada por Fernando de la Rúa, la coalición llamada Alianza por el Trabajo, la Justicia y la Educación, llegó al gobierno con una amplia confianza social, pero también con varios desafíos de difícil solución. Luis A. Romero afirma que esto se produjo, entre otras razones, porque:",
      answers: [
       "A. Todo era culpa de la convertibilidad, y eliminarla fue el nuevo reclamo colectivo y también la principal propuesta del nuevo gobierno.",
       "B. El nuevo gobierno recibió una economía que estaba en recesión desde 1998.",
       "C. Todo reposaba sobre la convertibilidad, y mantenerla fue la nueva ilusión colectiva y también el principal respaldo del gobierno.",
       "D. La grieta ideológica con la oposición imposibilitaba la eficiente gestión del gobierno al impedir la concreción de acuerdos.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la A y la D.",
       "G. Las opciones correctas son la B, la C.",
       "H. Las opciones correctas son la A, la B y la D."
      ],
      correctAnswer: "G. Las opciones correctas son la B, la C."
     },
     {
      question: "Según Romero, sorpresivamente, en noviembre de 1993, Menem y Alfonsín acordaron en secreto -el llamado 'Pacto de Olivos' - las condiciones para una reforma constitucional. Esto fue así, porque:",
      answers: [
       "A. Incluiría la cláusula de reelección tan deseada por Menem.",
       "B. Incluiría una serie de modificaciones impulsadas por la UCR para modernizar el texto y reducir el margen de discrecionalidad presidencial.",
       "C. Incluiría una serie de modificaciones impulsadas por el peronismo para reducir el margen de discrecionalidad del poder judicial.",
       "D. Ambas partes acordaron la creación de las llamadas elecciones PASO (Primarias, Abiertas, Simultaneas y Obligatorias).",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la A y la C.",
       "G. Las opciones correctas son la A y la D.",
       "H. Las opciones correctas son la B, la C y la D."
      ],
      correctAnswer: "E. Las opciones correctas son la A y la B."
     },
     {
      question: "Según Paola Bautista de Alemán, los autoritarismos con capacidad estatal son regímenes no democráticos que han desarrollado herramientas que les permiten satisfacer las demandas de los habitantes que viven en el territorio que dominan. Esto es así porque:",
      answers: [
       "A. Los regímenes autoritarios son más eficientes que los democráticos frente a grandes crisis.",
       "B. En el siglo XXI la gobernabilidad depende del liderazgo carismático para garantizar la dominación de la sociedad.",
       "C. Los autoritarismos no se preocupan por las demandas de sus habitantes.",
       "D. En el siglo XXI, esto se vincula con la tecnología y tiene resultados más precisos en materia de dominación.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la B y la C.",
       "G. Las opciones correctas son la C y la D.",
       "H. Las opciones correctas son la A, la C y la D."
      ],
      correctAnswer: "H. Las opciones correctas son la A, la C y la D."
     },
     {
      question: "Sebastián Linares argumenta que el sorteo de cargos públicos honra de un modo equivalente, aunque distinto, el principio de igual dignidad política a la hora de participar en los asuntos públicos. Esto sería así porque:",
      answers: [
       "A. El sorteo ayuda a que los mejores lleguen a ocupar los cargos públicos.",
       "B. En el sorteo el clientelismo político y el nepotismo son neutralizados.",
       "C. El sorteo canaliza una suerte de igual probabilidad de formar parte de una decisión colectiva.",
       "D. El sorteo canaliza una suerte de desigual probabilidad de formar parte de una decisión colectiva.",
       "E. Las opciones correctas son la A y la B.",
       "F. Las opciones correctas son la B y la C.",
       "G. Las opciones correctas son la C y la D.",
       "H. Las opciones correctas son la A, la C y la D."
      ],
      correctAnswer: "F. Las opciones correctas son la B y la C."
     }
    ]
   };
   

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // Estado para almacenar preguntas en orden aleatorio

  useEffect(() => {
    // Barajar preguntas y respuestas cuando el componente se monta
    const shuffled = shuffleArray(questionsData.questions.map(question => ({
      ...question,
      answers: shuffleArray(question.answers)
    })));
    setShuffledQuestions(shuffled);
  }, []);

  const shuffleArray = array => {
    // Algoritmo de Fisher-Yates para barajar el array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const calculateScore = () => {
    let newScore = 0;
    for (let i = 0; i < shuffledQuestions.length; i++) {
      const correctAnswer = shuffledQuestions[i].correctAnswer;
      if (selectedAnswers[i] === correctAnswer) {
        newScore++;
      }
    }
    return (newScore / shuffledQuestions.length * 10).toFixed(2); // Calcular puntaje en formato de nota con 2 decimales
  };

  const handleAnswerClick = (questionIndex, answer) => {
    if (!submitted) {
      setSelectedAnswers(prevState => ({
        ...prevState,
        [questionIndex]: answer
      }));
    }
  };

  const handleSubmit = () => {
    if (!submitted) {
      setScore(calculateScore());
      setSubmitted(true);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
    setSubmitted(false);
    // Barajar preguntas y respuestas nuevamente
    const shuffled = shuffleArray(questionsData.questions.map(question => ({
      ...question,
      answers: shuffleArray(question.answers)
    })));
    setShuffledQuestions(shuffled);
  };

  const allQuestionsAnswered = Object.keys(selectedAnswers).length === shuffledQuestions.length;

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-800 text-gray-400 rounded-md shadow-md">
      {shuffledQuestions.map((question, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-blue-500 px-2 rounded-md">{question.question}</h2>
          <ul className="list-disc ml-6 space-y-1">
            {question.answers.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`${submitted && answer === question.correctAnswer ? 'text-green-500 italic' : selectedAnswers[index] === answer ? 'text-blue-500 italic' : 'italic'}`}
                onClick={() => handleAnswerClick(index, answer)}
                style={{ cursor: !submitted ? 'pointer' : 'default' }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {submitted && (
        <div className="mt-6">
          <p className={`text-lg font-semibold mb-10  ${score > 4 ? 'text-green-500' : "text-red-500"} `}>Calificacion: {score}/10.00</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none" onClick={restartQuiz}>
            Reiniciar Examen
          </button>
        </div>
      )}
      {!submitted && (
        <div className="mt-6">
          <button className={`px-4 py-2 text-white rounded-md focus:outline-none ${!allQuestionsAnswered ? "bg-gray-500" : "bg-green-500"}`} onClick={handleSubmit} disabled={!allQuestionsAnswered}>
            Terminar Examen
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;

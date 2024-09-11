export const allQuestionsData =
  [
    // PARTE A
    {
      year: 2023,
      name: "PARTE A",
      questions: [
        {
          question: "Determine cuál de los siguientes fragmentos es un argumento.",
          answers: [
            "La piel de los reptiles es impermeable, delgada y cubierta de escamas. Y eso les permite vivir en tierra firme.",
            "Los lagartos mudan su piel al crecer. Se la comen luego para obtener calcio y otros nutrientes.",
            "El yacaré tiene hábitos nocturnos o diurnos. Se sigue que tiene hábitos nocturnos, dado que no tiene hábitos diurnos.",
            "Si el Mar Argentino ocupa un tercio del territorio, entonces es la zona ecológica más grande del país."
          ],
          correctAnswer: "El yacaré tiene hábitos nocturnos o diurnos. Se sigue que tiene hábitos nocturnos, dado que no tiene hábitos diurnos."
        },
        {
          question: "Indique cuál es la conclusión del siguiente argumento.\n\n\"La mayoría de los anfibios son animales nocturnos. La rana marsupial es un anfibio. Por lo tanto, es un animal nocturno.\"",
          answers: [
            "La mayoría de los anfibios son animales nocturnos.",
            "La rana marsupial es un animal nocturno.",
            "La rana marsupial es un anfibio.",
            "Es un animal nocturno."
          ],
          correctAnswer: "La rana marsupial es un animal nocturno."
        },
        {
          question: "Dadas las siguientes oraciones verdaderas:\n\n- La caranca es un ave que se puede observar en el Parque Nacional Tierra del Fuego (PNTF).\n- La caranca se alimenta de algas.\n\nDetermine cuál de los siguientes enunciados es verdadero.",
          answers: [
            "La caranca es un ave que se puede observar en el PNTF y además no se alimenta de algas.",
            "Si la caranca es un ave que se puede observar en el PNTF, entonces se alimenta de algas.",
            "O bien la caranca se alimenta de algas o bien es un ave que se puede observar en el PNTF.",
            "La caranca no es un ave que se puede observar en el PNTF."
          ],
          correctAnswer: "Si la caranca es un ave que se puede observar en el PNTF, entonces se alimenta de algas."
        },
        {
          question: "Complete el siguiente enunciado para que sea una tautología.\n\nLos macaes son aves zambullidoras ...",
          answers: [
            "pero no son patos.",
            "pero no son aves zambullidoras.",
            "o no son aves zambullidoras.",
            "y bucean con facilidad."
          ],
          correctAnswer: "o no son aves zambullidoras."
        },
        {
          question: "Dados los siguientes argumentos, determine cuál es válido. Sobre lagos y valles",
          answers: [
            "El lago Nahuel Huapi, el valle de Talampaya, el glaciar Perito Moreno y las cataratas del Iguazú son todos parques nacionales, y también zonas cuya fauna y flora son protegidas por el Estado. Por lo tanto, todos los parques nacionales son zonas cuya fauna y flora son protegidas por el Estado.",
            "Si el valle de Talampaya es un parque nacional, entonces es una zona cuya fauna y flora son protegidas por el Estado. Pero el valle de Talampaya no es una zona cuya fauna y flora son protegidas por el Estado. Por lo tanto, no es un parque nacional.",
            "Si el valle de Talampaya es un parque nacional, entonces es una zona cuya fauna y flora son protegidas por el Estado. Pero el valle de Talampaya no es un parque nacional. Por lo tanto, no es una zona cuya fauna y flora sean protegidas por el Estado.",
            "Si el valle de Talampaya es un parque nacional, entonces es una zona cuya fauna y flora son protegidas por el Estado. Y el valle de Talampaya de hecho es una zona cuya fauna y flora son protegidas por el Estado. Por lo tanto, es un parque nacional."
          ],
          correctAnswer: "Si el valle de Talampaya es un parque nacional, entonces es una zona cuya fauna y flora son protegidas por el Estado. Pero el valle de Talampaya no es una zona cuya fauna y flora son protegidas por el Estado. Por lo tanto, no es un parque nacional."
        },
        {
          question: "Seleccione la opción correcta \n\nSi un argumento es válido, ...",
          answers: [
            "sus premisas deben ser verdaderas.",
            "su conclusión no puede ser falsa.",
            "sus premisas pueden ser falsas.",
            "sus premisas pueden ser inválidas.",
            "sus premisas o su conclusión deben ser verdaderas."
          ],
          correctAnswer: "sus premisas pueden ser falsas."
        },
        {
          question: "Dado el siguiente conjunto de enunciados:\n\n- El águila coronada es un ave que habita en los Esteros del Iberá y está en peligro de extinción.\n- El cachilo de antifaz es un ave que habita en los Esteros del Iberá y está en peligro de extinción.\n\nA. El cardenal amarillo es un ave que habita en los Esteros del Iberá.\nB. El cachilo de antifaz está en peligro de extinción.\nC. Todas las aves que habitan los Esteros del Iberá están en peligro de extinción.\nD. La mayoría de las aves que habitan los Esteros del Iberá está en peligro de extinción.\nE. El cardenal amarillo está en peligro de extinción.\n\nSeleccione cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que el argumento resulte un argumento inductivo por analogía.",
          answers: [
            "A y B",
            "C y D",
            "A y E",
            "D y E",
            "B y D"
          ],
          correctAnswer: "A y E"
        },
        {
          question: "Determine qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por enumeración incompleta.\n\nLos parques nacionales argentinos contienen una gran diversidad de fauna y flora. Porque Iberá, Tierra del Fuego, Iguazú y Arrayanes contienen una gran diversidad de fauna y flora, y son parques nacionales argentinos.",
          answers: [
            "Iberá, Tierra del Fuego, Iguazú y Arrayanes son todos los parques nacionales argentinos que hay.",
            "El Impenetrable contiene una gran diversidad de fauna y flora y es un parque nacional argentino.",
            "El parque nacional argentino Los Glaciares no contiene una gran diversidad de fauna y flora.",
            "Tijuca contiene una gran variedad de fauna y flora y es un parque nacional brasileño."
          ],
          correctAnswer: "El Impenetrable contiene una gran diversidad de fauna y flora y es un parque nacional argentino."
        },
        {
          question: "Dado un sistema axiomático que incluye los siguientes axiomas y regla de inferencia, determine cuál de los enunciados que se enumeran a continuación es un teorema del sistema y responda a la pregunta que se formula a continuación.\nRegla de inferencia:\nModus ponens\nAxiomas:\nSi A entonces B\nA\nB\n- Si Los Glaciares es un parque nacional, entonces es un área protegida por el Estado.\n- Los Glaciares es un parque nacional.\n- Los Glaciares no es un área protegida por el Estado.",
          answers: [
            "Los Glaciares es un área protegida por el Estado.",
            "Los Glaciares es un parque nacional.",
            "Los Glaciares no es un área protegida por el Estado.",
            "Los Glaciares no es un parque nacional."
          ],
          correctAnswer: "Los Glaciares es un área protegida por el Estado."
        },
        {
          question: "Determine si el siguiente enunciado es verdadero (V) o falso (F) según la concepción contemporánea de los sistemas axiomáticos. Los axiomas se eligen convencionalmente como puntos de partida de un sistema.\nSeleccione la opción que justifica su respuesta",
          answers: [
            "Los axiomas son aceptados como punto de partida de un sistema sin necesidad de demostrarlos.",
            "Ningún enunciado se elige convencionalmente como punto de partida del sistema.",
            "Los axiomas deben ser demostrados para evitar la regresión al infinito.",
            "Todos los enunciados del sistema se eligen convencionalmente."
          ],
          correctAnswer: "Los axiomas son aceptados como punto de partida de un sistema sin necesidad de demostrarlos."
        },
        {
          question: "Determine cuál de los siguientes fragmentos es un argumento sobre anfibios",
          answers: [
            "Los anfibios respiran con branquias en estado larvario. Muchos luego pasan a usar pulmones en estado adulto.",
            "La cáscara protege a los huevos de reptil de la desecación. También protege al embrión de golpes y fenómenos atmosféricos.",
            "Si el gecko de Sierra de la Ventana se reproduce por partenogénesis, entonces las crías son clones genéticos de la madre.",
            "Las serpientes cascabel, yarará y coral tienen lenguas bífidas y son venenosas. La anaconda curiyú tiene lengua bífida. Por lo tanto, es venenosa."
          ],
          correctAnswer: "Las serpientes cascabel, yarará y coral tienen lenguas bífidas y son venenosas. La anaconda curiyú tiene lengua bífida. Por lo tanto, es venenosa."
        },
        {
          question: "Indique cuál es la conclusión del siguiente argumento.\n\n\"Si los caimanes tienen sangre fría, entonces necesitan una fuente externa de calor. Podemos inferir que los caimanes la necesitan, puesto que tienen sangre fría.\"",
          answers: [
            "Los caimanes necesitan una fuente externa de calor.",
            "Si los caimanes tienen sangre fría, entonces necesitan una fuente externa de calor.",
            "Los caimanes tienen sangre fría.",
            "Los caimanes la necesitan."
          ],
          correctAnswer: "Los caimanes necesitan una fuente externa de calor."
        },
        {
          question: "Dadas las siguientes oraciones verdaderas:\n- La caranca es un ave que se puede observar en el Parque Nacional Tierra del Fuego (PNTF).\n- La caranca se alimenta de algas.\nDetermine cuál de los siguientes enunciados es verdadero.",
          answers: [
            "La caranca se alimenta de algas pero no es un ave que se puede observar en el PNTF.",
            "Si la caranca se alimenta de algas, entonces no es un ave que se puede observar en el PNTF.",
            "No es cierto que la caranca se alimenta de algas.",
            "La caranca se alimenta de algas o es un ave que se puede observar en el PNTF."
          ],
          correctAnswer: "La caranca se alimenta de algas o es un ave que se puede observar en el PNTF."
        },
        {
          question: "Complete el siguiente enunciado para que sea una contradicción.\n\nLos macaes son aves zambullidoras ...",
          answers: [
            "pero no son aves zambullidoras.",
            "aunque no son patos.",
            "o son aves zambullidoras.",
            "y bucean con facilidad."
          ],
          correctAnswer: "pero no son aves zambullidoras."
        },
        {
          question: "Dados los siguientes argumentos, determine cuál es válido. Sobre lagos y valles de Rio Negro",
          answers: [
            "Todos los lagos que están en Río Negro tienen su origen en el deshielo. El lago Titicaca está en Río Negro. En consecuencia, el lago Titicaca tiene su origen en el deshielo.",
            "El lago Nahuel Huapi, el lago Lácar, el lago Machónico y el lago Correntoso están en Río Negro y tienen su origen en el deshielo. El lago Espejo está en Río Negro. Por ende, tiene su origen en el deshielo.",
            "Si el lago Nahuel Huapi está en Río Negro, entonces tiene su origen en el deshielo. Pero no está en Río Negro. En consecuencia, no tiene su origen en el deshielo.",
            "El lago Nahuel Huapi está en Río Negro o en California. Por lo tanto, está en Río Negro."
          ],
          correctAnswer: "Todos los lagos que están en Río Negro tienen su origen en el deshielo. El lago Titicaca está en Río Negro. En consecuencia, el lago Titicaca tiene su origen en el deshielo."
        },
        {
          question: "Seleccione la opción que permite completar la oración siguiente de modo que resulte ser correcta.\n\nSi un argumento es inválido, ...",
          answers: [
            "su conclusión puede ser válida.",
            "su conclusión necesariamente es falsa.",
            "sus premisas necesariamente son inválidas.",
            "sus premisas o su conclusión deben ser falsas.",
            "su conclusión puede ser verdadera."
          ],
          correctAnswer: "su conclusión puede ser verdadera."
        },
        {
          question: "Determine qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un silogismo inductivo.\n\n\"El 75% de los parques nacionales en el norte argentino presenta un riesgo de incendio elevado. Calilegua es un parque nacional en el norte argentino. Luego, Calilegua presenta un riesgo de incendio elevado.\"",
          answers: [
            "Calilegua es un parque nacional con un clima cálido y escasas precipitaciones.",
            "El 86% de los parques nacionales en el norte argentino presenta un riesgo de incendio elevado.",
            "El 100% de los parques nacionales en el norte argentino presenta un riesgo de incendio elevado.",
            "El 100% de los parques nacionales y/o reservas naturales en el norte argentino presenta un riesgo de incendio elevado."
          ],
          correctAnswer: "El 86% de los parques nacionales en el norte argentino presenta un riesgo de incendio elevado."
        },
        {
          question: "Dado un sistema axiomático que incluye los siguientes axiomas y regla de inferencia, determine cuál de los enunciados que se enumeran a continuación es un teorema del sistema y responda a la pregunta que se formula a continuación.\nRegla de inferencia:\n\nModus Tollens\n\nAxiomas:\n\nSi A entonces B\nno B\nno A\n\n- Si se crea el Parque Nacional Ansenunza en la Laguna de Mar Chiquita, se avanza en la protección de los humedales.\n- No se avanza en la protección de los humedales.\n- No se crea el Parque Nacional Ansenunza en la Laguna de Mar Chiquita.",
          answers: [
            "No se avanza en la protección de los humedales.",
            "No se crea el Parque Nacional Ansenunza en la Laguna de Mar Chiquita.",
            "Se avanza en la protección de los humedales.",
            "Se crea el Parque Nacional Ansenunza en la Laguna de Mar Chiquita."
          ],
          correctAnswer: "No se crea el Parque Nacional Ansenunza en la Laguna de Mar Chiquita."
        },
      ]

    },

    // PARTE B
    {
      year: 2023,
      name: "PARTE B",
      questions: [
        {
          question: "Según Luis A. Romero, el nuevo gobierno de Fernando de la Rúa que asumía en 1999 recibía del presidente saliente, Carlos Menem, una economía en expansión; con un déficit fiscal menor gracias a las privatizaciones y el achicamiento del Estado, y con bajo desempleo.",
          answers: [
            "A. Es verdadero, porque ni bien llegó al poder, el nuevo gobierno encabezado por Fernando de la Rúa gozó de un legado económico inmejorable a lo que debió sumar la apertura de una nueva etapa de crecimiento económico gracias al contexto internacional.",
            "B. Es verdadero, porque al comienzo de la gestión de la Alianza, el enorme ingreso de divisas provenientes de las exportaciones de soja, que ya había comenzado con el gobierno anterior, permitió mejorar los ya excelentes índices macroeconómicos.",
            "C. Es falso, porque si bien las cuentas públicas estaban en orden gracias a las políticas de achicamiento del Estado, aun persistía una alta inflación heredada del gobierno menemista.",
            "D. Es falso, porque el nuevo gobierno asumió en un marco de alto desempleo, déficit fiscal y actividad económica estancada."
          ],
          correctAnswer: "D. Es falso, porque el nuevo gobierno asumió en un marco de alto desempleo, déficit fiscal y actividad económica estancada."
        },

      ]
    },


  ]




const allQuestionsData2 =
  [
    // PARTE 1
    {
      year: 2023,
      name: "PARTE A",
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
          question: "Según Luis A. Romero, durante el gobierno de Carlos Menem, la bonanza inicial ocultó por un tiempo los aspectos más duros de la gran transformación.",
          answers: [
            "A. Es falso, porque la convertibilidad fue exitosa y no tuvo contraindicaciones hasta el año 1999, en que Menem abandonó el poder.",
            "B. Es falso, porque la Argentina venía de un duro escenario anterior y todo lo que pasó posteriormente pareció mucho más aceptable.",
            "C. Es verdadero, porque la inflación no paró de crecer por la disimulada emisión monetaria.",
            "D. Es verdadero, porque los efectos del ajuste estatal se disimularon al principio, por las importantes indemnizaciones pagadas, pero explotaron a partir de 1995."
          ],
          correctAnswer: "D. Es verdadero, porque los efectos del ajuste estatal se disimularon al principio, por las importantes indemnizaciones pagadas, pero explotaron a partir de 1995."
        },
      ]
    }
  ]
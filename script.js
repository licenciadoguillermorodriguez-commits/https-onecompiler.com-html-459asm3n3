const bancoPreguntas = [
    // --- 5 DE HISTORIA ---
    {
        categoria: "Historia",
        claseCat: "cat-historia",
        pregunta: "1. ¿Qué río permitió el desarrollo de la antigua civilización egipcia?",
        opciones: ["Río Amazonas", "Río Nilo", "Río Tigris"],
        correcta: 1,
        explicacion: "El río Nilo proveía agua dulce y tierras fértiles en medio del desierto."
    },
    {
        categoria: "Historia",
        claseCat: "cat-historia",
        pregunta: "2. ¿Alrededor de qué mar se expandió principalmente el Imperio Romano?",
        opciones: ["Mar Caribe", "Mar Mediterráneo", "Mar Rojo"],
        correcta: 1,
        explicacion: "Los romanos llamaban al Mar Mediterráneo 'Mare Nostrum'."
    },
    {
        categoria: "Historia",
        claseCat: "cat-historia",
        pregunta: "3. ¿En qué año llegó Cristóbal Colón por primera vez a América?",
        opciones: ["1492", "1519", "1789"],
        correcta: 0,
        explicacion: "El 12 de octubre de 1492 la expedición desembarcó en el continente americano."
    },
    {
        categoria: "Historia",
        claseCat: "cat-historia",
        pregunta: "4. ¿Qué civilización construyó la ciudadela de Machu Picchu?",
        opciones: ["Los Mayas", "Los Aztecas", "Los Incas"],
        correcta: 2,
        explicacion: "El Imperio Inca construyó Machu Picchu en el siglo XV en los Andes."
    },
    {
        categoria: "Historia",
        claseCat: "cat-historia",
        pregunta: "5. ¿Qué ciudad griega es considerada la cuna de la democracia?",
        opciones: ["Esparta", "Atenas", "Troya"],
        correcta: 1,
        explicacion: "En Atenas surgió el sistema donde los ciudadanos participaban en las decisiones."
    },

    // --- 5 DE GEOGRAFÍA ---
    {
        categoria: "Geografía",
        claseCat: "cat-geografia",
        pregunta: "6. ¿Cómo se llama la línea imaginaria que divide a la Tierra en hemisferio Norte y Sur?",
        opciones: ["Meridiano de Greenwich", "Línea del Ecuador", "Trópico de Cáncer"],
        correcta: 1,
        explicacion: "La línea del Ecuador (latitud 0°) divide el planeta en Norte y Sur."
    },
    {
        categoria: "Geografía",
        claseCat: "cat-geografia",
        pregunta: "7. ¿Cuál es el océano más grande y profundo del planeta Tierra?",
        opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico"],
        correcta: 2,
        explicacion: "El Océano Pacífico cubre aproximadamente un tercio de la superficie terrestre."
    },
    {
        categoria: "Geografía",
        claseCat: "cat-geografia",
        pregunta: "8. ¿En qué continente se encuentra la cordillera de los Andes?",
        opciones: ["América del Sur", "Asia", "Europa"],
        correcta: 0,
        explicacion: "La cordillera de los Andes atraviesa siete países sudamericanos."
    },
    {
        categoria: "Geografía",
        claseCat: "cat-geografia",
        pregunta: "9. ¿Cuál es el país con mayor superficie territorial del mundo?",
        opciones: ["Canadá", "China", "Rusia"],
        correcta: 2,
        explicacion: "Rusia abarca más de 17 millones de kilómetros cuadrados."
    },
    {
        categoria: "Geografía",
        claseCat: "cat-geografia",
        pregunta: "10. ¿Qué río es el más caudaloso y largo de América del Sur?",
        opciones: ["Río Paraná", "Río Amazonas", "Río Orinoco"],
        correcta: 1,
        explicacion: "El río Amazonas contiene más agua dulce que cualquier otro río del mundo."
    },

    // --- 5 DE CIENCIAS ---
    {
        categoria: "Ciencias",
        claseCat: "cat-ciencias",
        pregunta: "11. ¿Cuál es el planeta más cercano al Sol en nuestro sistema solar?",
        opciones: ["Venus", "Marte", "Mercurio"],
        correcta: 2,
        explicacion: "Mercurio orbita a una distancia media de 58 millones de kilómetros del Sol."
    },
    {
        categoria: "Ciencias",
        claseCat: "cat-ciencias",
        pregunta: "12. ¿Qué gas absorben las plantas durante la fotosíntesis?",
        opciones: ["Dióxido de carbono (CO2)", "Nitrógeno", "Helio"],
        correcta: 0,
        explicacion: "Las plantas toman CO2 del aire y liberan oxígeno gracias a la luz solar."
    },
    {
        categoria: "Ciencias",
        claseCat: "cat-ciencias",
        pregunta: "13. ¿Cuál es la unidad básica estructural de todos los seres vivos?",
        opciones: ["El átomo", "La célula", "La molécula"],
        correcta: 1,
        explicacion: "Todos los organismos vivos están formados por una o más células."
    },
    {
        categoria: "Ciencias",
        claseCat: "cat-ciencias",
        pregunta: "14. ¿A qué temperatura hierve el agua pura al nivel del mar?",
        opciones: ["50 °C", "100 °C", "150 °C"],
        correcta: 1,
        explicacion: "A nivel del mar, el punto de ebullición del agua es de 100 grados Celsius."
    },
    {
        categoria: "Ciencias",
        claseCat: "cat-ciencias",
        pregunta: "15. ¿Qué fuerza mantiene a los planetas orbitando alrededor del Sol?",
        opciones: ["Fuerza magnética", "Fuerza de gravedad", "Fuerza centrífuga"],
        correcta: 1,
        explicacion: "La gravedad es la fuerza de atracción entre cuerpos con masa."
    }
];

function cargarTrivia() {
    const contenedor = document.getElementById("contenedor-preguntas");
    const marcador = document.getElementById("marcador");
    
    if (!contenedor) return;
    
    contenedor.innerHTML = "";
    let puntaje = 0;
    marcador.textContent = puntaje;

    bancoPreguntas.forEach((item) => {
        const card = document.createElement("article");
        card.className = "card-pregunta";

        const badge = document.createElement("span");
        badge.className = "etiqueta-categoria " + item.claseCat;
        badge.textContent = item.categoria;
        card.appendChild(badge);

        const titulo = document.createElement("p");
        titulo.className = "texto-pregunta";
        titulo.textContent = item.pregunta;
        card.appendChild(titulo);

        const gridOpciones = document.createElement("div");
        gridOpciones.className = "opciones-grid";

        const feedback = document.createElement("div");
        feedback.className = "feedback-box";

        const letras = ["A", "B", "C"];
        item.opciones.forEach((textoOpcion, idx) => {
            const boton = document.createElement("button");
            boton.type = "button";
            boton.className = "btn-opcion";
            boton.textContent = letras[idx] + ") " + textoOpcion;

            boton.onclick = function () {
                const botones = gridOpciones.querySelectorAll("button");
                botones.forEach(b => b.disabled = true);

                if (idx === item.correcta) {
                    boton.classList.add("correcta");
                    puntaje++;
                    marcador.textContent = puntaje;
                    feedback.innerHTML = "✅ <strong>¡Correcto!</strong> " + item.explicacion;
                    feedback.style.borderLeftColor = "#10b981";
                } else {
                    boton.classList.add("incorrecta");
                    botones[item.correcta].classList.add("correcta");
                    const respCorrecta = letras[item.correcta] + ") " + item.opciones[item.correcta];
                    feedback.innerHTML = "❌ <strong>Incorrecto.</strong> La respuesta correcta es: <strong>" + respCorrecta + "</strong>. " + item.explicacion;
                    feedback.style.borderLeftColor = "#ef4444";
                }
                feedback.style.display = "block";
            };

            gridOpciones.appendChild(boton);
        });

        card.appendChild(gridOpciones);
        card.appendChild(feedback);
        contenedor.appendChild(card);
    });
}

document.getElementById("btn-reiniciar").onclick = cargarTrivia;
cargarTrivia();
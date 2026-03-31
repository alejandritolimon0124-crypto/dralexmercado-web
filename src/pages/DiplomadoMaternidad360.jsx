export default function DiplomadoMaternidad360() {
  const modulos = [
    {
      numero: "01",
      titulo: "Antes del embarazo",
      subtitulo: "Preparando mi cuerpo y mi mente",
      descripcion:
        "Aprenderás cómo prepararte de forma adecuada antes de embarazarte para lograr un embarazo más seguro y saludable.",
      temas: [
        "Evaluación médica previa",
        "Vitaminas y suplementación",
        "Estudios recomendados",
        "Hábitos que impactan la fertilidad",
        "Preparación emocional",
      ],
      impartido: ["Dr. Alex Mercado"],
    },
    {
      numero: "02",
      titulo: "Primer trimestre",
      subtitulo: "Entendiendo los cambios iniciales",
      descripcion:
        "Conoce lo que ocurre en tu cuerpo durante las primeras semanas y cómo identificar qué es normal y qué no.",
      temas: [
        "Cambios hormonales y físicos",
        "Náuseas, fatiga y síntomas comunes",
        "Signos de alarma",
        "Cuidados esenciales",
      ],
      impartido: ["Dr. Alex Mercado"],
    },
    {
      numero: "03",
      titulo: "Segundo trimestre",
      subtitulo: "La etapa más estable del embarazo",
      descripcion:
        "Aprende a disfrutar esta etapa con mayor energía y conexión con tu bebé.",
      temas: [
        "Desarrollo del bebé",
        "Cambios corporales",
        "Estudios importantes",
        "Actividad física segura",
      ],
      impartido: ["Dr. Alex Mercado"],
    },
    {
      numero: "04",
      titulo: "Tercer trimestre",
      subtitulo: "Preparación para el nacimiento",
      descripcion:
        "Todo lo que necesitas saber para llegar tranquila y preparada al momento del parto.",
      temas: [
        "Crecimiento fetal",
        "Molestias frecuentes",
        "Preparación física y mental",
        "Señales de inicio de trabajo de parto",
      ],
      impartido: ["Dr. Alex Mercado"],
    },
    {
      numero: "05",
      titulo: "Nutrición y ejercicio",
      subtitulo: "Tu estilo de vida impacta directamente en la salud de tu bebé",
      descripcion:
        "Descubre cómo alimentarte mejor y mantenerte activa de forma segura durante el embarazo.",
      temas: [
        "Alimentación adecuada por etapas",
        "Suplementación",
        "Ejercicio seguro",
        "Mitos y realidades",
      ],
      impartido: ["Dr. Alex Mercado"],
    },
    {
      numero: "06",
      titulo: "Pareja y sexualidad",
      subtitulo: "Conexión, cambios emocionales y vida íntima en el embarazo",
      descripcion:
        "El embarazo también transforma la relación de pareja y la conexión emocional.",
      temas: [
        "Cambios emocionales en la pareja",
        "Sexualidad durante el embarazo",
        "Mitos y realidades",
        "Comunicación y vínculo afectivo",
      ],
      impartido: [
        "Padre Vicente Eliamar",
        "Sacerdote Diocesano de Saltillo, Coahuila y Médico General",
        "Dr. Alex Mercado",
      ],
    },
    {
      numero: "07",
      titulo: "Complicaciones",
      subtitulo: "Reconoce las señales de alarma a tiempo",
      descripcion:
        "Aprende a identificar y actuar ante situaciones que requieren atención médica.",
      temas: [
        "Diabetes gestacional",
        "Preeclampsia",
        "Sangrados y urgencias",
        "Cuándo acudir al hospital",
      ],
      impartido: ["Dr. Alex Mercado"],
    },
    {
      numero: "08",
      titulo: "Parto vs cesárea",
      subtitulo: "Tomando decisiones informadas",
      descripcion:
        "Conoce las diferencias reales para tomar decisiones con seguridad y tranquilidad.",
      temas: [
        "Tipos de parto",
        "Indicaciones médicas reales",
        "Riesgos y beneficios",
        "Plan de nacimiento",
      ],
      impartido: ["Dr. Alex Mercado"],
    },
    {
      numero: "09",
      titulo: "Anestesia",
      subtitulo: "Pierde el miedo entendiendo cómo funciona",
      descripcion:
        "Conoce las opciones de analgesia y anestesia para vivir este momento con mayor seguridad.",
      temas: [
        "Epidural",
        "Opciones de analgesia",
        "Seguridad y riesgos",
        "Mitos comunes",
      ],
      impartido: ["Dra. Angela López, Anestesióloga", "Dr. Alex Mercado"],
    },
    {
      numero: "10",
      titulo: "Postparto y nacimiento del bebé",
      subtitulo: "Lo que realmente sucede después del nacimiento",
      descripcion:
        "Prepárate para el nacimiento de tu bebé y para los cambios físicos y emocionales del postparto.",
      temas: [
        "Lactancia",
        "Cuidados del recién nacido",
        "Cambios emocionales",
        "Recuperación física",
      ],
      impartido: ["Dra. Rocío Ramírez, Pediatra", "Dr. Alex Mercado"],
    },
  ];

  const beneficios = [
    "Acceso presencial al diplomado",
    "Material didáctico digital (tablas, algoritmos y checklist de utilidad)",
    "Certificado de participación",
    "Acceso a la comunidad de mamás informadas y capacitadas en maternidad",
    "Evento de fin de cursos",
  ];

  const paraQuienEs = [
    "Mujeres que planean embarazarse",
    "Mujeres en cualquier trimestre del embarazo",
    "Mamás que desean entender mejor su proceso y tomar decisiones informadas",
    "Parejas que quieren vivir esta etapa con mayor claridad y conexión",
    "Pacientes que desean prepararse mejor para parto, cesárea, lactancia y postparto",
  ];

  const noEsPara = [
    "Quien busca información superficial o incompleta",
    "Quien no desea involucrarse activamente en su proceso de maternidad",
    "Quien prefiere vivir el embarazo desde el miedo o la desinformación",
  ];

  const credenciales = [
    "Egresado con Mención Honorífica como Médico General de la Facultad de Medicina Saltillo (UAdeC).",
    "Especialista en Ginecología y Obstetricia egresado de la UMAE No. 23 del IMSS, Monterrey, N.L., avalado por la UDEM como Primer Lugar de generación y Tercer Lugar Nacional.",
    "Diplomado en Colposcopia y Cáncer en la Mujer avalado por la Universidad Autónoma de Puebla.",
    "Diplomado en Investigación Clínica y Maestría en Ciencias de la Salud por la Universidad Autónoma de Durango.",
    "Rotación en Docencia avalado por la Universidad de Querétaro.",
    "Rotación en Reproducción Asistida, Medicina Fetal y Obstetricia en Hospital Vall d’Hebron, Barcelona, España.",
    "Diplomado en Administración de Recursos Hospitalarios avalado por la UANE.",
    "Certificado por el Consejo Mexicano de Ginecología y Obstetricia Num. 5928.",
    "Miembro activo del Colegio de Ginecología y Obstetricia de Saltillo.",
  ];

  const whatsappInfo =
    "https://wa.me/528443934366?text=Hola%20Dr.%20Alex%20Mercado,%20quiero%20informes%20del%20Diplomado%20Maternidad%20360";
  const whatsappInscripcion =
    "https://wa.me/528443934366?text=Hola%20Dr.%20Alex%20Mercado,%20quiero%20inscribirme%20al%20Diplomado%20Maternidad%20360";
  const whatsappApartar =
    "https://wa.me/528443934366?text=Hola%20Dr.%20Alex%20Mercado,%20quiero%20apartar%20mi%20lugar%20en%20el%20Diplomado%20Maternidad%20360";

  const appleStyles = `
    @keyframes appleFadeUp {
      from {
        opacity: 0;
        transform: translate3d(0, 36px, 0) scale(0.985);
        filter: blur(8px);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
        filter: blur(0);
      }
    }

    @keyframes appleFadeIn {
      from {
        opacity: 0;
        transform: scale(0.985);
        filter: blur(10px);
      }
      to {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
      }
    }

    .apple-fade-up {
      opacity: 0;
      animation: appleFadeUp 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      will-change: transform, opacity, filter;
      backface-visibility: hidden;
    }

    .apple-fade-in {
      opacity: 0;
      animation: appleFadeIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      will-change: transform, opacity, filter;
      backface-visibility: hidden;
    }

    .delay-1 { animation-delay: 0.12s; }
    .delay-2 { animation-delay: 0.24s; }
    .delay-3 { animation-delay: 0.36s; }
    .delay-4 { animation-delay: 0.48s; }

    .apple-card {
      transition:
        transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1),
        border-color 320ms ease,
        background-color 320ms ease;
    }

    .apple-card:hover {
      transform: translateY(-6px);
    }

    .apple-button {
      transition:
        transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),
        background-color 260ms ease,
        border-color 260ms ease,
        color 260ms ease;
    }

    .apple-button:hover {
      transform: translateY(-3px);
    }
  `;

  return (
    <>
      <style>{appleStyles}</style>

      <main className="min-h-screen bg-[#faf7f2] text-slate-900">
        <a
          href={whatsappInfo}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-[#1fb85a]"
        >
          <span className="text-base">💬</span>
          WhatsApp
        </a>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#faf7f2]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-rose-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="apple-fade-up inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-rose-700 shadow-sm">
                  Diplomado presencial en Saltillo, Coahuila
                </div>

                <h1 className="apple-fade-up delay-1 mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
                  Diplomado{" "}
                  <span className="text-rose-500">Maternidad 360</span>
                </h1>

                <p className="apple-fade-up delay-2 mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                  Un acompañamiento integral para vivir tu embarazo con mayor
                  seguridad, conocimiento y tranquilidad, desde antes del
                  embarazo hasta el nacimiento de tu bebé.
                </p>

                <div className="apple-fade-up delay-3 mt-8 flex flex-wrap items-center gap-4">
                  <div className="rounded-[1.75rem] border border-rose-200 bg-white px-6 py-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                      Próximo inicio
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-slate-950">
                      18 de abril
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-amber-200 bg-[#fff9f1] px-6 py-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                      Disponibilidad
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-slate-950">
                      Cupo limitado
                    </p>
                  </div>
                </div>

                <div className="apple-fade-up delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappInscripcion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-button inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-[#1fb85a]"
                  >
                    Inscribirme por WhatsApp
                  </a>

                  <a
                    href="#programa"
                    className="apple-button inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Ver programa completo
                  </a>
                </div>

                <div className="apple-fade-up delay-4 mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <div className="apple-card rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Duración</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      10 módulos
                    </p>
                  </div>
                  <div className="apple-card rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Formato</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      10 sesiones semanales
                    </p>
                  </div>
                  <div className="apple-card rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Duración por sesión</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      2 horas
                    </p>
                  </div>
                  <div className="apple-card rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Sede</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      Edificio MEDICS
                    </p>
                  </div>
                </div>
              </div>

              <div className="apple-fade-in delay-2 relative">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-rose-100 via-white to-rose-50 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.08)]">
                  <img
                    src="/mama.png"
                    alt="Mamá embarazada señalando"
                    className="h-[520px] w-full object-cover object-center lg:h-[620px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="apple-fade-up rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                ¿Qué es Maternidad 360?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Mucho más que información: una guía real para esta etapa de tu vida
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                El embarazo es una de las etapas más importantes de tu vida, pero
                también una de las más inciertas. Este diplomado fue diseñado para
                ayudarte a entender cada cambio, resolver tus dudas, detectar
                señales de alarma y tomar decisiones con mayor seguridad.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Aquí no solo aprenderás teoría: recibirás orientación práctica,
                acompañamiento médico y herramientas útiles para vivir tu embarazo
                con más tranquilidad.
              </p>
            </div>

            <div className="apple-fade-up delay-1 rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
              <h3 className="text-2xl font-semibold">¿Qué lograrás con este diplomado?</h3>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Sentirte más segura en cada etapa del embarazo</li>
                <li>• Saber identificar qué es normal y qué no</li>
                <li>• Tomar decisiones mejor informadas</li>
                <li>• Reducir miedo e incertidumbre</li>
                <li>• Prepararte mejor para el nacimiento y el postparto</li>
                <li>• Vivir esta etapa con mayor confianza y tranquilidad</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="incluye" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                Valor incluido
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                ¿Qué incluye el diplomado?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                No es solo una serie de clases. Es una experiencia completa de
                formación y acompañamiento.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((item, i) => (
                <div
                  key={i}
                  className="apple-card rounded-[1.75rem] border border-black/5 bg-[#faf7f2] p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-xl text-rose-600">
                    ✓
                  </div>
                  <p className="text-lg font-medium leading-7 text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="apple-card rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                Este diplomado es para ti si
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Sí es para ti
              </h2>
              <div className="mt-8 space-y-4">
                {paraQuienEs.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[1.25rem] border border-rose-100 bg-rose-50 px-5 py-4 text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="apple-card rounded-[2rem] border border-black/5 bg-[#f8f8f8] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Perfil esperado
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                No es para ti si
              </h2>
              <div className="mt-8 space-y-4">
                {noEsPara.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="programa" className="bg-[#f7f4ef] py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                Programa académico
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Estructura del Diplomado Maternidad 360
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                10 módulos diseñados para acompañarte de forma integral durante
                todo el proceso.
              </p>
            </div>

            <div className="mt-14 grid gap-8">
              {modulos.map((modulo) => (
                <article
                  key={modulo.numero}
                  className="apple-card rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
                >
                  <div className="grid gap-8 lg:grid-cols-[120px_1fr]">
                    <div>
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-rose-100 text-2xl font-semibold text-rose-600">
                        {modulo.numero}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950">
                        {modulo.titulo}
                      </h3>
                      <p className="mt-2 text-lg font-medium text-rose-500">
                        {modulo.subtitulo}
                      </p>
                      <p className="mt-4 leading-8 text-slate-600">
                        {modulo.descripcion}
                      </p>

                      <div className="mt-6">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                          Incluye
                        </p>
                        <ul className="grid gap-3 md:grid-cols-2">
                          {modulo.temas.map((tema, i) => (
                            <li
                              key={i}
                              className="rounded-[1.25rem] border border-black/5 bg-[#faf7f2] px-4 py-3 text-slate-700"
                            >
                              {tema}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 rounded-[1.5rem] bg-rose-50 px-5 py-4">
                        <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">
                          Impartido por
                        </p>
                        <div className="mt-2 space-y-1">
                          {modulo.impartido.map((persona, i) => (
                            <p key={i} className="text-slate-800">
                              {persona}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
            Decisión inteligente
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Este no es un curso más
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Es el acompañamiento que muchas mamás hubieran querido tener desde el
            inicio de su embarazo. La próxima fecha es el <strong>18 de abril</strong> y
            el <strong> cupo es limitado</strong>.
          </p>
          <div className="mt-8">
            <a
              href={whatsappApartar}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button inline-flex items-center justify-center rounded-full bg-[#25D366] px-10 py-4 text-base font-semibold text-white shadow-md hover:bg-[#1fb85a]"
            >
              Apartar mi lugar
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                Tu mentor en este proceso
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Dr. Jorge Alejandro Mercado
              </h2>
              <p className="mt-3 text-lg font-medium text-rose-500">
                Especialista en Ginecología y Obstetricia
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Este diplomado está coordinado para darte información clara,
                confiable y útil en una de las etapas más importantes de tu vida.
                Más que un curso, es un acompañamiento médico con enfoque humano,
                experiencia clínica y formación académica sólida.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="apple-card rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Experiencia</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">
                    14 años de experiencia
                  </p>
                </div>
                <div className="apple-card rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Enfoque</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">
                    Atención y formación médica
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-6 shadow-[0_30px_100px_rgba(15,23,42,0.08)]">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-rose-100 blur-3xl" />
                <img
                  src="/FB_IMG_1751002176775-removebg-preview.png"
                  alt="Dr. Jorge Alejandro Mercado"
                  className="relative z-10 mx-auto max-h-[540px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                Trayectoria profesional
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Formación y experiencia que respaldan este diplomado
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Un acompañamiento con preparación académica, experiencia clínica y
                compromiso real con la salud de la mujer.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="apple-card rounded-[2rem] border border-black/5 bg-[#faf7f2] p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-10 w-1 rounded-full bg-rose-500" />
                  <h3 className="text-2xl font-semibold text-slate-950">
                    Currículum médico
                  </h3>
                </div>

                <div className="grid gap-4">
                  {credenciales.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-[1.25rem] border border-black/5 bg-white px-5 py-4 text-slate-700"
                    >
                      <span className="font-semibold text-rose-500">
                        {String(i + 1).padStart(2, "0")}.
                      </span>{" "}
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="apple-card rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                    Respaldo profesional
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    ¿Por qué confiar en este diplomado?
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    Porque la maternidad merece acompañamiento serio, actualizado y
                    humano. Esta formación está diseñada desde la práctica médica
                    real y desde la experiencia de atención a mujeres en cada etapa
                    de su embarazo.
                  </p>
                </div>

                <div className="apple-card rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">
                    Confianza
                  </p>
                  <p className="mt-4 text-3xl font-semibold">
                    14 años de experiencia, atención y formación médica
                  </p>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Un diplomado creado para orientar, acompañar y darte mayor
                    seguridad durante todo tu proceso de maternidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                  Modalidad
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Así vivirás el Diplomado Maternidad 360
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Un formato diseñado para que aprendas con calma, entiendas cada
                  etapa y puedas resolver dudas reales en un ambiente cercano,
                  profesional y confiable.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#faf7f2] p-8 ring-1 ring-black/5">
                <ul className="space-y-4 text-slate-700">
                  <li>• Inicio próximo: 18 de abril</li>
                  <li>• Cupo limitado</li>
                  <li>• 10 módulos</li>
                  <li>• 10 sesiones semanales</li>
                  <li>• Duración de 2 horas por sesión</li>
                  <li>• Formato presencial</li>
                  <li>• Sede: Edificio MEDICS, Saltillo, Coahuila</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center md:px-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Inicia el 18 de abril
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Tu embarazo no debería vivirse con miedo ni incertidumbre. Este
              diplomado está diseñado para darte el acompañamiento y la información
              que necesitas en uno de los momentos más importantes de tu vida.
            </p>
            <p className="mt-4 text-xl font-semibold text-white">
              Cupo limitado
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappInscripcion}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-[#1fb85a]"
              >
                Inscribirme ahora
              </a>

              <a
                href="tel:8443934366"
                className="apple-button inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/5"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
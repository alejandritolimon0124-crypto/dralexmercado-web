function App() {
  const services = [
    {
      title: "Embarazo y maternidad",
      items: [
        "Control prenatal con seguimiento cercano",
        "Ultrasonido obstétrico y valoración del bienestar fetal",
        "Ultrasonido 5D para una experiencia más cercana y memorable",
        "Resolución clara de dudas en cada etapa del embarazo",
      ],
    },
    {
      title: "Salud ginecológica",
      items: [
        "Problemas hormonales y ciclos irregulares",
        "Sangrados anormales, miomas y quistes",
        "Infecciones vaginales y molestias recurrentes",
        "Dolor pélvico y evaluación integral",
      ],
    },
    {
      title: "Cirugía laparoscópica avanzada",
      items: [
        "Manejo quirúrgico de miomas y patología ginecológica seleccionada",
        "Abordaje moderno con visión mínimamente invasiva",
        "Evaluación quirúrgica con explicación clara del plan de tratamiento",
        "Seguimiento antes y después del procedimiento",
      ],
    },
  ];

  const differentiators = [
    "Atención especializada para cada etapa de la mujer",
    "Ultrasonido 5D y seguimiento cercano del embarazo",
    "Experiencia quirúrgica en laparoscopía avanzada",
    "Consulta clara, humana y ordenada desde el primer contacto",
  ];

  const steps = [
    {
      n: "01",
      title: "Agenda fácil",
      text: "Escríbeme por WhatsApp o agenda en línea de forma rápida, clara y profesional.",
    },
    {
      n: "02",
      title: "Valoración completa",
      text: "Se identifica el motivo de consulta, se explica el problema y se plantea una ruta clara.",
    },
    {
      n: "03",
      title: "Seguimiento real",
      text: "La experiencia continúa con orden, cercanía y acompañamiento.",
    },
  ];

  const testimonials = [
    {
      name: "Paciente embarazada",
      text: "Me dio muchísima tranquilidad sentir que entendía cada paso de mi embarazo y que mis dudas sí importaban.",
    },
    {
      name: "Paciente ginecológica",
      text: "Fui por un problema de sangrado que ya había consultado antes y por fin sentí una explicación clara y una solución real.",
    },
    {
      name: "Experiencia integral",
      text: "La atención se siente moderna, ordenada y muy profesional desde que agendas hasta el seguimiento.",
    },
  ];

  const gallery5D = ["/ultrasonido-5d-1.jpeg", "/ultrasonido-5d-2.jpeg"];
  const officeGallery = ["/consultorio-1.jpeg", "/consultorio-2.jpeg", "/consultorio-3.jpeg"];
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=528443934366&text=Hola%20Dr.%20Alex%20Mercado,%20me%20gustar%C3%ADa%20agendar%20una%20consulta";

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <div>
            <div className="text-xl font-semibold tracking-tight">Dr. Alex Mercado</div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Ginecología y Obstetricia</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#servicios" className="transition hover:text-slate-900">Servicios</a>
            <a href="#sobre-mi" className="transition hover:text-slate-900">Sobre mí</a>
            <a href="#galeria" className="transition hover:text-slate-900">Galería</a>
            <a href="#contacto" className="transition hover:text-slate-900">Contacto</a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-[#1fb85a]"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,167,117,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(20,184,166,0.08),transparent_24%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-amber-800 shadow-sm">
                Atención integral para la mujer
              </div>

              <div className="mb-7 rounded-[1.6rem] border border-black/5 bg-white/85 px-5 py-4 shadow-sm backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="/lookadoc-clean.png"
                      alt="Look a Doc"
                      className="h-16 md:h-20 object-contain"
                    />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.32em] text-slate-500">Agenda médica inteligente</div>
                      <div className="mt-1 text-sm text-slate-600">Experiencia digital moderna para una atención más ágil, clara y ordenada.</div>
                    </div>
                  </div>
                  <a
                    href="https://agenda.dralexmercado.com.mx"
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-white"
                  >
                    Conocer agenda en línea
                  </a>
                </div>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Embarazo con tranquilidad. Salud ginecológica y cirugía avanzada con confianza.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Desde el control prenatal y ultrasonido 5D hasta el manejo de problemas hormonales, sangrados, miomas, infecciones y cirugía laparoscópica avanzada, aquí encuentras atención especializada, explicación clara y seguimiento real.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-[#1fb85a]"
                >
                  Agendar consulta por WhatsApp
                </a>
                <a
                  href="https://agenda.dralexmercado.com.mx"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Agenda en línea
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 rounded-[1.5rem] border border-black/5 bg-white/80 px-5 py-4 shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Agenda digital</div>
                <img src="/lookadoc-clean.png" alt="Look a Doc" className="h-12 object-contain" />
                <div className="h-6 w-px bg-slate-200" />
                <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Atención en</div>
                <img src="/medics-logo.png" alt="MEDICS" className="h-10 object-contain" />
                <img src="/muguerza-logo.png" alt="Hospital Muguerza" className="h-12 object-contain" />
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">14+</div>
                  <div className="mt-1 text-sm text-slate-600">años de experiencia</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">Ultrasonido 5D</div>
                  <div className="mt-1 text-sm text-slate-600">embarazo con cercanía y emoción</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">Laparoscopía</div>
                  <div className="mt-1 text-sm text-slate-600">cirugía ginecológica avanzada</div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-amber-100/70 via-white to-teal-100/50 blur-2xl" />
              <img
                src="/dr-alex-hero.jpeg"
                alt="Dr Alex Mercado"
                className="relative h-[590px] w-full rounded-[2.2rem] object-cover object-top shadow-2xl shadow-slate-900/15"
              />
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10">
              <img
                src="/dr-alex-bebe.jpeg"
                alt="Dr Alex Mercado con recién nacido"
                className="mb-6 h-72 w-full rounded-xl object-cover object-top"
              />
              <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Sobre mí</div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">Atención médica con criterio, cercanía y claridad.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Mi objetivo no es solo atenderte. Mi enfoque es entender lo que estás viviendo, explicártelo claramente y ayudarte a tomar decisiones con seguridad, ya sea durante tu embarazo, frente a un problema ginecológico o en una valoración quirúrgica.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Experiencia</div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Más de 14 años acompañando a mujeres en etapas clave de su salud, con un enfoque profesional, humano y resolutivo.
                </p>
              </div>
              <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Tecnología y precisión</div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Consulta con explicación completa, ultrasonido obstétrico, ultrasonido 5D y experiencia en cirugía laparoscópica avanzada.
                </p>
              </div>
              <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm md:col-span-2">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Posicionamiento</div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  No importa si estás embarazada o no. Si algo en tu cuerpo no está bien, aquí se estudia con seriedad, se explica con claridad y se busca una solución real.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-700">¿En qué puedo ayudarte?</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Atención especializada para cada etapa de la mujer.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Este sitio está diseñado para acompañar tanto a pacientes embarazadas como a mujeres que buscan resolver problemas ginecológicos o valorar una alternativa quirúrgica con atención experta y clara.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[2rem] border border-black/5 bg-[#fcfaf7] p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                  <div className="mt-6 space-y-4">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-slate-700">
                        <div className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                        <span className="leading-7">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1fb85a]"
                  >
                    Agendar valoración por WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.24em] text-amber-700">Galería</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Tecnología, experiencia y un entorno pensado para la paciente.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Ultrasonido 5D</h3>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                Vive una experiencia más cercana durante el embarazo con imágenes que permiten apreciar mejor a tu bebé y fortalecer el vínculo desde antes de nacer.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {gallery5D.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Ultrasonido 5D ${index + 1}`}
                    className="h-72 w-full rounded-[1.5rem] object-cover shadow-sm"
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Consultorio y experiencia presencial</h3>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                Atención en un espacio moderno, cómodo y profesional para que cada consulta se viva con confianza, privacidad y orden.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {officeGallery.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Consultorio ${index + 1}`}
                    className={`w-full rounded-[1.5rem] object-cover shadow-sm ${index === 2 ? 'sm:col-span-2 h-80' : 'h-72'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-2xl shadow-slate-900/10 md:p-14">
              <div className="max-w-4xl">
                <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Cirugía laparoscópica avanzada</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  Alternativas quirúrgicas modernas con visión precisa y recuperación más amable.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  Para pacientes seleccionadas, la laparoscopía representa un abordaje avanzado para tratar ciertos problemas ginecológicos con una estrategia mínimamente invasiva y un plan claro de seguimiento.
                </p>
              </div>

              <div id="agenda" className="mt-10 grid gap-5 md:grid-cols-3">
                {steps.map((step) => (
                  <div key={step.n} className="rounded-[2rem] bg-white/8 p-6 backdrop-blur-sm">
                    <div className="text-sm font-medium tracking-[0.22em] text-amber-300">{step.n}</div>
                    <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1fb85a]"
                >
                  Escribirme por WhatsApp
                </a>
                <a
                  href="https://agenda.dralexmercado.com.mx"
                  className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Agenda en línea
                </a>
              </div>
            </div>

            <img
              src="/dr-alex-laparoscopia.jpeg"
              alt="Dr Alex Mercado realizando cirugía laparoscópica"
              className="h-full min-h-[520px] w-full rounded-[2.5rem] object-cover shadow-xl"
            />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-700">Testimonios</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Confianza que se siente desde la primera consulta.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-[2rem] border border-black/5 bg-[#fcfaf7] p-8 shadow-sm">
                  <p className="text-lg leading-8 text-slate-700">“{t.text}”</p>
                  <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Ubicación</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Atención en un espacio diseñado para tu comodidad y confianza.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Consulta presencial en MEDICS y atención en Hospital Muguerza, en Saltillo, Coahuila, en un entorno profesional, cómodo y enfocado en la experiencia de la paciente.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-[1.5rem] bg-slate-50 p-6 text-slate-700">
                  <div className="font-medium">MEDICS | Salud & Belleza</div>
                  <div className="mt-2 leading-7">Saltillo, Coahuila</div>
                </div>
                <div className="rounded-[1.5rem] bg-slate-50 p-6 text-slate-700">
                  <div className="font-medium">Hospital Muguerza</div>
                  <div className="mt-2 leading-7">Atención hospitalaria en Saltillo, Coahuila</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <img src="/medics-logo.png" alt="MEDICS" className="h-14 object-contain" />
              </div>
            </div>

            <div id="contacto" className="rounded-[2rem] bg-[#f7efe3] p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-800">Contacto</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Tu tranquilidad no debería esperar.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Agenda tu consulta, resuelve tus dudas y recibe atención con claridad, seguimiento y confianza.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-[#25D366] px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1fb85a]"
                >
                  Escríbeme por WhatsApp
                </a>
                <a
                  href="https://agenda.dralexmercado.com.mx"
                  className="block rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Agenda en línea
                </a>
              </div>

              <div className="mt-8 text-sm leading-7 text-slate-600">
                Especialista en Ginecología y Obstetricia<br />
                Céd. Prof. 7840295<br />
                Permiso de publicidad COFEPRIS: 2605082002A00005
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
          <div className="mb-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Dr. Alex Mercado. Todos los derechos reservados.
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-[#f8fafc] px-6 py-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Atención en</span>
                <img src="/medics-logo.png" alt="MEDICS" className="h-12 object-contain" />
                <img src="/muguerza-logo.png" alt="Hospital Muguerza" className="h-14 object-contain" />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Agenda digital</span>
                <img src="/lookadoc-clean.png" alt="Look a Doc" className="h-14 object-contain" />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Powered by</span>
                <img src="/axm-logo.png" alt="AXM Technologies" className="h-12 object-contain opacity-95" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

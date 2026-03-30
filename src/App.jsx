export default function DrAlexMercadoWebsite() {
  const services = [
    {
      title: "Embarazo y maternidad",
      items: [
        "Control prenatal con seguimiento cercano",
        "Resolución clara de dudas en cada etapa",
        "Valoración de síntomas y señales de alarma",
        "Preparación para el parto y acompañamiento"
      ]
    },
    {
      title: "Salud ginecológica",
      items: [
        "Problemas hormonales y ciclos irregulares",
        "Sangrados anormales, miomas y quistes",
        "Infecciones vaginales y molestias recurrentes",
        "Dolor pélvico y evaluación integral"
      ]
    }
  ];

  const differentiators = [
    "Explicación clara y cercana",
    "Atención especializada para cada etapa de la mujer",
    "Agenda digital práctica y ordenada",
    "Seguimiento real, no consultas impersonales"
  ];

  const steps = [
    {
      n: "01",
      title: "Agenda fácil",
      text: "La paciente agenda su consulta en línea de forma rápida, clara y profesional."
    },
    {
      n: "02",
      title: "Valoración completa",
      text: "Se identifica el motivo de consulta, se explica el problema y se plantea una ruta clara."
    },
    {
      n: "03",
      title: "Seguimiento real",
      text: "La experiencia continúa con orden, claridad y acompañamiento." 
    }
  ];

  const testimonials = [
    {
      name: "Paciente embarazada",
      text: "Me dio muchísima tranquilidad sentir que entendía cada paso de mi embarazo y que mis dudas sí importaban."
    },
    {
      name: "Paciente ginecológica",
      text: "Fui por un problema de sangrado que ya había consultado antes y por fin sentí una explicación clara y una solución real."
    },
    {
      name: "Consulta integral",
      text: "La atención se siente moderna, ordenada y muy profesional desde que agendas hasta el seguimiento."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fcfaf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-xl font-semibold tracking-tight">Dr. Alex Mercado</div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Ginecología y Obstetricia</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#servicios" className="transition hover:text-slate-900">Servicios</a>
            <a href="#sobre-mi" className="transition hover:text-slate-900">Sobre mí</a>
            <a href="#agenda" className="transition hover:text-slate-900">Agenda</a>
            <a href="#contacto" className="transition hover:text-slate-900">Contacto</a>
          </nav>

          <a
            href="https://agenda.dralexmercado.com"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,167,117,0.16),transparent_30%),radial-gradient(circle_at_left,rgba(217,119,6,0.10),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-amber-800 shadow-sm">
                Atención integral para la mujer
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Embarazo con tranquilidad. Salud ginecológica con soluciones reales.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Desde el control de tu embarazo hasta el manejo de problemas hormonales, sangrados, miomas, infecciones y más, aquí encuentras atención especializada, explicación clara y seguimiento real.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://agenda.dralexmercado.com"
                  className="rounded-full bg-slate-900 px-7 py-4 text-center text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
                >
                  Agenda tu consulta
                </a>
                <a
                  href="https://wa.me/528443934366"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Enviar WhatsApp
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">14+</div>
                  <div className="mt-1 text-sm text-slate-600">años de experiencia</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">Embarazo</div>
                  <div className="mt-1 text-sm text-slate-600">seguimiento seguro y cercano</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">Ginecología</div>
                  <div className="mt-1 text-sm text-slate-600">diagnóstico y solución integral</div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-xl rounded-[2rem] border border-white/60 bg-white p-5 shadow-2xl shadow-slate-900/10">
                <div className="rounded-[1.6rem] bg-gradient-to-br from-[#f7efe3] via-white to-[#f9f5ef] p-8">
                  <div className="rounded-[1.5rem] border border-black/5 bg-white p-8 shadow-sm">
                    <div className="text-sm font-medium uppercase tracking-[0.22em] text-amber-700">
                      Tu espacio de confianza
                    </div>
                    <div className="mt-4 text-3xl font-semibold leading-tight text-slate-950">
                      Cuidado médico claro, humano y moderno.
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      Un sitio diseñado para ayudarte a entender tu salud, resolver tus dudas y agendar de forma fácil una atención especializada.
                    </p>

                    <div className="mt-8 space-y-3">
                      {differentiators.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Sobre mí</div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">Atención médica con criterio, cercanía y claridad.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Mi objetivo no es solo atenderte. Mi enfoque es entender lo que estás viviendo, explicártelo claramente y ayudarte a tomar decisiones con seguridad, ya sea durante tu embarazo o frente a un problema ginecológico.
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
                <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Atención</div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Consulta con explicación completa, seguimiento cercano y sensación real de orden desde el primer contacto.
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
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-700">¿En qué puedo ayudarte?</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Atención especializada para cada etapa de la mujer.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Este sitio está diseñado para acompañar tanto a pacientes embarazadas como a mujeres que buscan resolver problemas ginecológicos con una atención experta y clara.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
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
                    href="https://agenda.dralexmercado.com"
                    className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                  >
                    Agendar valoración
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-2xl shadow-slate-900/10 md:p-14">
            <div className="max-w-4xl">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Diferencial</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Una consulta moderna va más allá del consultorio.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                La experiencia está diseñada para que sientas orden, claridad y facilidad desde que decides agendar. Menos fricción, más confianza.
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
                href="https://agenda.dralexmercado.com"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Agendar en línea
              </a>
              <a
                href="https://wa.me/528443934366"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-white/5"
              >
                Resolver dudas por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
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

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Ubicación</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Atención en un espacio diseñado para tu comodidad y confianza.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Consulta presencial en MEDICS, en Saltillo, Coahuila, en un entorno profesional, cómodo y enfocado en la experiencia de la paciente.
              </p>
              <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-6 text-slate-700">
                <div className="font-medium">MEDICS | Salud & Belleza</div>
                <div className="mt-2 leading-7">Saltillo, Coahuila</div>
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
                  href="https://agenda.dralexmercado.com"
                  className="block rounded-full bg-slate-900 px-7 py-4 text-center text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Agenda tu consulta hoy
                </a>
                <a
                  href="https://wa.me/528443934366"
                  className="block rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Escríbeme por WhatsApp
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:px-10 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Dr. Alex Mercado. Todos los derechos reservados.</div>
          <div>Sistema de agenda digital gestionado mediante plataforma médica especializada.</div>
        </div>
      </footer>
    </div>
  );
}
import React, { useEffect, useMemo, useState } from 'react';
import {
  ChevronDown,
  Star,
  Award,
  Heart,
  ShieldCheck,
  MessageCircle,
  Phone,
  MapPin,
  Check,
  CalendarDays,
  Users,
  Stethoscope,
  Baby,
  Clock3,
} from 'lucide-react';

const appleStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  * {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #fcfaf7;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(22px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes floatSoft {
    0%,100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  @keyframes pulseSoft {
    0%,100% { box-shadow: 0 0 0 0 rgba(242,106,94,0.18); }
    70% { box-shadow: 0 0 0 14px rgba(242,106,94,0); }
  }

  .animate-slideIn {
    animation: slideIn .65s ease-out forwards;
  }

  .animate-floatSoft {
    animation: floatSoft 4s ease-in-out infinite;
  }

  .animate-pulseSoft {
    animation: pulseSoft 2.4s infinite;
  }

  .glass-card {
    background: rgba(255,255,255,0.72);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }
`;

export default function DiplomadoMaternidad360() {
  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const WHATSAPP_NUMBER = '528441892008';

  const whatsappBase = `https://wa.me/${WHATSAPP_NUMBER}`;
  const buildWhatsAppLink = (message) =>
    `${whatsappBase}?text=${encodeURIComponent(message)}`;

  const ctaMain = useMemo(
    () =>
      buildWhatsAppLink(
        'Hola, vi el Diplomado Maternidad 360 y quiero información para apartar mi lugar.'
      ),
    []
  );

  const ctaInfo = useMemo(
    () =>
      buildWhatsAppLink(
        'Hola, quiero saber si el Diplomado Maternidad 360 es para mí.'
      ),
    []
  );

  const ctaPrice = useMemo(
    () =>
      buildWhatsAppLink(
        'Hola, quiero asegurar mi lugar en el Diplomado Maternidad 360 con $390 por sesión. ¿Qué necesito para inscribirme?'
      ),
    []
  );

  const ctaConsult = useMemo(
    () =>
      buildWhatsAppLink(
        'Hola, quiero agendar una consulta con el Dr. Alex Mercado.'
      ),
    []
  );

  const ctaSeat = useMemo(
    () =>
      buildWhatsAppLink(
        'Hola, quiero separar mi lugar para el Diplomado Maternidad 360. ¿Aún hay cupo?'
      ),
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programHighlights = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Explicación médica clara',
      description:
        'Información útil, aterrizada y entendible para que sepas qué está pasando y qué decisiones importan.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Más tranquilidad en tu embarazo',
      description:
        'Reduce la incertidumbre al entender síntomas, cambios normales y señales que sí requieren atención.',
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: 'Preparación para parto, cesárea y postparto',
      description:
        'Llega mejor preparada al nacimiento de tu bebé con una visión integral y realista.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Grupo reducido',
      description:
        'Cupo limitado para mantener una experiencia más cercana, con mejor atención y espacio para resolver dudas.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Material práctico de alto valor',
      description:
        'Contenido diseñado para acompañarte antes, durante y después del nacimiento, no solo teoría.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Confianza en cada etapa',
      description:
        'Entiende cuándo todo va bien, cuándo pedir ayuda y cómo vivir esta etapa con más seguridad.',
    },
  ];

  const modules = [
    {
      id: 1,
      title: 'Módulo 1: Antes del embarazo',
      description:
        'Qué debes saber si estás planeando embarazarte o quieres prepararte mejor.',
      content:
        'Revisión de salud previa, suplementación, estudios básicos, hábitos que vale la pena corregir y decisiones importantes antes de iniciar esta etapa.',
    },
    {
      id: 2,
      title: 'Módulo 2: Primer trimestre',
      description:
        'Los primeros cambios, síntomas más comunes, miedos frecuentes y cómo vivirlo con más seguridad.',
      content:
        'Qué es normal, cuándo preocuparte, cómo cuidar tu alimentación, qué estudios suelen solicitarse y cómo interpretar esta etapa con más tranquilidad.',
    },
    {
      id: 3,
      title: 'Módulo 3: Segundo trimestre',
      description:
        'La etapa en la que muchas mamás se sienten mejor, pero aún hay mucho por entender.',
      content:
        'Crecimiento del bebé, cambios físicos, seguimiento prenatal, molestias comunes y cómo mantener bienestar físico y emocional.',
    },
    {
      id: 4,
      title: 'Módulo 4: Tercer trimestre',
      description:
        'La recta final del embarazo y cómo prepararte mental y físicamente para el nacimiento.',
      content:
        'Cambios finales, señales a vigilar, preparación para parto o cesárea, maleta, expectativas realistas y organización familiar.',
    },
    {
      id: 5,
      title: 'Módulo 5: Nutrición y ejercicio',
      description:
        'Qué sí te ayuda, qué no vale la pena y cómo cuidar tu cuerpo durante el embarazo.',
      content:
        'Alimentación práctica, control de peso, hidratación, actividad física segura y recomendaciones útiles según cada etapa.',
    },
    {
      id: 6,
      title: 'Módulo 6: Pareja y sexualidad',
      description:
        'Cómo vivir esta etapa sin desinformación, con mejor comunicación y mayor confianza.',
      content:
        'Cambios en la relación, dudas frecuentes sobre sexualidad, emociones, apoyo de pareja y adaptación a la nueva dinámica.',
    },
    {
      id: 7,
      title: 'Módulo 7: Complicaciones',
      description:
        'Identifica señales importantes y entiende cuándo necesitas valoración médica.',
      content:
        'Sangrado, dolor, presión, movimientos fetales, urgencias más comunes y cómo actuar con claridad sin caer en pánico.',
    },
    {
      id: 8,
      title: 'Módulo 8: Parto vs. cesárea',
      description:
        'Información clara para entender ambas vías de nacimiento y tomar decisiones mejor informadas.',
      content:
        'Indicaciones, diferencias, mitos, recuperación y puntos clave para sentirte más preparada según tu caso.',
    },
    {
      id: 9,
      title: 'Módulo 9: Anestesia',
      description:
        'Qué debes saber sobre analgesia y anestesia durante el nacimiento.',
      content:
        'Módulo impartido por la Dra. Ángela López, Anestesióloga, y el Dr. Alex Mercado. Se revisan opciones, dudas frecuentes, seguridad, indicaciones y expectativas realistas.',
    },
    {
      id: 10,
      title: 'Módulo 10: Postparto y nacimiento del bebé',
      description:
        'Lo que realmente pasa después del nacimiento y cómo vivirlo mejor.',
      content:
        'Módulo impartido por la Dra. Rocío Ramírez, Pediatra, y el Dr. Alex Mercado. Incluye cuidados de mamá, adaptación, primeros días del bebé y puntos esenciales del postparto.',
    },
  ];

  const experts = [
    {
      name: 'Dr. Alex Mercado',
      specialty: 'Ginecología y Obstetricia',
      description:
        'Dirección médica del programa y guía principal durante el diplomado.',
    },
    {
      name: 'Dra. Ángela López',
      specialty: 'Anestesiología',
      description:
        'Participación especial en el módulo de anestesia para parto o cesárea.',
    },
    {
      name: 'Dra. Rocío Ramírez',
      specialty: 'Pediatría',
      description:
        'Participación especial en el módulo de postparto y nacimiento del bebé.',
    },
    {
      name: 'Dr. Vicente Eliamar',
      specialty: 'Médico general y Sacerdote Diocesano',
      description:
        'Participación especial con acompañamiento integral, orientación humana y visión cercana para esta etapa.',
    },
  ];

  const testimonials = [
    {
      name: 'Paciente embarazada',
      role: 'Mamá primeriza',
      content:
        'Me ayudó a entender cosas que nadie me había explicado con claridad. Me sentí más tranquila, más preparada y mucho menos sola.',
      rating: 5,
    },
    {
      name: 'Paciente en consulta',
      role: 'Planeando embarazo',
      content:
        'No solo te informa, también te da paz. Sales con una idea mucho más clara de lo que viene y de cómo cuidarte mejor.',
      rating: 5,
    },
    {
      name: 'Paciente de control prenatal',
      role: 'Segunda gestación',
      content:
        'La forma de explicar del doctor hace que todo se entienda fácil. Es información útil, aterrizada y muy valiosa para cualquier mamá.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: '¿Para quién es este diplomado?',
      answer:
        'Está pensado para mujeres embarazadas, mujeres que planean embarazarse y mamás que desean vivir esta etapa con mayor claridad, seguridad y acompañamiento médico.',
    },
    {
      question: '¿Es solo para pacientes del Dr. Alex Mercado?',
      answer:
        'No. Puede integrarse cualquier mujer interesada en entender mejor su embarazo y prepararse de forma integral.',
    },
    {
      question: '¿Cómo se aparta el lugar?',
      answer:
        'La forma más rápida es por WhatsApp. Ahí se te comparte disponibilidad, forma de inscripción y los pasos para confirmar tu lugar.',
    },
    {
      question: '¿Hay cupo limitado?',
      answer:
        'Sí. El grupo es reducido a 15 mamás por generación para mantener una experiencia más cercana y personalizada.',
    },
    {
      question: '¿Qué incluye?',
      answer:
        'Incluye acceso al diplomado, 10 módulos, material digital de apoyo, certificado de participación y una experiencia presencial diseñada para resolver dudas reales.',
    },
    {
      question: '¿Dónde se lleva a cabo?',
      answer:
        'En EDIFICIO MEDICS, en Saltillo, Coahuila. Al final de esta página puedes ver el mapa y abrir la ruta en Google Maps o Waze.',
    },
    {
      question: '¿Puedo entrar si es mi primer embarazo?',
      answer:
        'Sí. De hecho, suele ser una de las etapas donde más tranquilidad aporta tener información clara, ordenada y confiable.',
    },
    {
      question: '¿Sirve aunque todavía no esté embarazada?',
      answer:
        'Sí. También está pensado para mujeres que desean prepararse mejor desde antes del embarazo.',
    },
  ];

  const includedItems = [
    '10 módulos integrales',
    'Material digital de apoyo',
    'Certificado de participación',
    'Experiencia presencial enfocada en claridad y acompañamiento',
    'Comunidad de mamás informadas',
    'Sesiones diseñadas para dudas reales del embarazo',
  ];

  const idealFor = [
    'Si te sientes confundida por tanta información en internet',
    'Si quieres entender mejor tu embarazo sin sentirte sola',
    'Si quieres llegar más preparada al parto, cesárea y postparto',
    'Si buscas orientación médica clara y práctica',
  ];

  return (
    <div>
      <style>{appleStyles}</style>

            <main className="min-h-screen bg-[#fcfaf7] text-slate-900">
        <nav
          className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex shrink-0 items-center">
              <img
                src="/logo-maternidad.png"
                alt="Maternidad 360"
                className="h-[4.8rem] w-auto object-contain sm:h-[5.5rem]"
              />
            </div>

            <a
              href="https://dralexmercado.com.mx"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 sm:px-5"
            >
              ← Regresar
            </a>

            <a
              href={ctaMain}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-green-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-600 sm:px-5"
            >
              WhatsApp
            </a>
          </div>
        </nav>

        <section
          id="top"
          className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F26A5E]/20 blur-3xl" />
            <div className="absolute right-0 top-44 h-80 w-80 rounded-full bg-[#F26A5E]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#F26A5E]/10 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="animate-slideIn mb-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#F26A5E]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#F26A5E] shadow-sm">
                  <CalendarDays className="h-4 w-4" />
                  Diplomado presencial para futuras mamás en Saltillo
                </span>
              </div>

              <h1
                className="animate-slideIn text-4xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-5xl md:text-7xl"
                style={{ animationDelay: '0.08s' }}
              >
                El acompañamiento que toda mamá necesita para vivir su embarazo con{' '}
                <span className="text-[#F26A5E]">más seguridad y tranquilidad</span>
              </h1>

              <p
                className="animate-slideIn mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
                style={{ animationDelay: '0.16s' }}
              >
                Un diplomado creado para ayudarte a entender esta etapa, resolver dudas
                reales y prepararte mejor para el nacimiento de tu bebé con guía médica
                clara.
              </p>

              <div
                className="animate-slideIn mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                style={{ animationDelay: '0.22s' }}
              >
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  10 módulos
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  Inicia 18 de abril
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  Saltillo, Coahuila
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  Cupo limitado
                </span>
              </div>

              <p
                className="animate-slideIn mt-5 text-base font-semibold text-slate-800 sm:text-lg"
                style={{ animationDelay: '0.24s' }}
              >
                Diplomado Maternidad 360 por el{' '}
                <span className="text-[#F26A5E]">Dr. Alex Mercado</span>
              </p>

              <div
                className="animate-slideIn mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start"
                style={{ animationDelay: '0.28s' }}
              >
                <a
                  href={ctaSeat}
                  target="_blank"
                  rel="noreferrer"
                  className="animate-pulseSoft inline-flex w-full items-center justify-center rounded-full bg-green-500 px-6 py-4 text-center text-base font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-green-600 sm:w-auto sm:px-8 sm:text-lg"
                >
                  Quiero apartar mi lugar
                </a>

                <a
                  href={ctaInfo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#F26A5E]/20 bg-white/80 px-6 py-4 text-center text-base font-bold text-[#F26A5E] shadow-sm transition hover:-translate-y-0.5 hover:border-[#F26A5E]/30 hover:bg-[#F26A5E]/5 sm:w-auto sm:px-8 sm:text-lg"
                >
                  Quiero más información
                </a>
              </div>

              <div
                className="animate-slideIn mt-7 rounded-2xl border border-red-200 bg-red-50 p-5 text-left shadow-sm"
                style={{ animationDelay: '0.34s' }}
              >
                <p className="text-base font-extrabold text-red-600 sm:text-lg">
                  ⚠️ Cupo limitado a 15 mamás por generación
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Cuando el grupo se llena, se cierra. Está pensado para ser cercano,
                  claro y verdaderamente útil para cada asistente.
                </p>
              </div>

              <div
                className="animate-slideIn mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
                style={{ animationDelay: '0.40s' }}
              >
                <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur">
                  <p className="text-2xl font-black text-[#F26A5E] sm:text-3xl">10</p>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Sesiones</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur">
                  <p className="text-2xl font-black text-[#F26A5E] sm:text-3xl">1</p>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Sesión semanal</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur">
                  <p className="text-2xl font-black text-[#F26A5E] sm:text-3xl">$390</p>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">por sesión</p>
                </div>
              </div>
            </div>

            <div className="animate-slideIn relative" style={{ animationDelay: '0.24s' }}>
              <div className="glass-card animate-floatSoft rounded-[1.5rem] border border-white/70 p-4 shadow-[0_20px_80px_rgba(242,106,94,0.12)] sm:rounded-[2rem] sm:p-8">
                <div className="rounded-[1.25rem] bg-gradient-to-br from-white via-[#F26A5E]/5 to-[#F26A5E]/10 p-5 sm:rounded-[1.75rem] sm:p-8">
                  <div className="mb-6 inline-flex rounded-full bg-[#F26A5E]/10 px-4 py-2 text-sm font-bold text-[#F26A5E]">
                    Formación médica premium
                  </div>

                  <h3 className="text-xl font-black leading-tight text-slate-900 sm:text-3xl">
                    Menos miedo. Más claridad. Mejor preparación.
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Diseñado para mujeres que quieren vivir su embarazo con información
                    útil, confianza y una guía mucho más clara en cada etapa.
                  </p>

                  <div className="mt-7 space-y-4">
                    {[
                      'Aprende lo que sí importa durante tu embarazo',
                      'Entiende cambios, señales de alerta y decisiones importantes',
                      'Prepárate para parto, cesárea y postparto',
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm"
                      >
                        <div className="mt-0.5 rounded-full bg-green-100 p-1.5 text-green-600">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-2xl bg-white/80 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Ideal para ti si:</p>
                    <div className="mt-3 space-y-3">
                      {idealFor.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F26A5E]" />
                          <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={ctaConsult}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 sm:text-base"
                  >
                    También quiero agendar consulta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programa" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-[#F26A5E]/10 px-4 py-2 text-sm font-bold text-[#F26A5E]">
                ¿Por qué elegir este programa?
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                No es solo un curso.
                <span className="block text-[#F26A5E]">
                  Es preparación real para una etapa decisiva.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Está diseñado para ayudarte a sentirte más segura, mejor informada y
                emocionalmente más preparada para vivir tu embarazo y el nacimiento de tu bebé.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {programHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[1.6rem] border border-[#F26A5E]/20 bg-gradient-to-br from-white to-pink-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-[#F26A5E]/10 p-3 text-[#F26A5E]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={ctaMain}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-green-600 sm:w-auto"
              >
                Quiero informes por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfaf7] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10">
              <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                Tu guía durante este proceso
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Dr. Alex Mercado
              </h2>

              <p className="mt-4 text-lg font-semibold text-[#F26A5E]">
                Especialista en Ginecología y Obstetricia
              </p>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Este diplomado nace de una necesidad muy real: muchas mujeres viven su
                embarazo con dudas, miedo, información confusa o sin una guía clara.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                La idea es reunir, en un solo espacio, explicaciones médicas útiles,
                acompañamiento cercano y preparación práctica para que llegues a esta etapa
                con mayor tranquilidad y confianza.
              </p>

              <p className="mt-4 text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
                Es una extensión del acompañamiento que muchas pacientes quisieran tener
                desde antes, durante y después del nacimiento.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={ctaConsult}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-base font-bold text-white transition hover:bg-slate-800 sm:w-auto"
                >
                  Agendar consulta
                </a>
                <a
                  href={ctaInfo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-800 transition hover:bg-slate-50 sm:w-auto"
                >
                  Pedir información del diplomado
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#F26A5E] to-[#F26A5E] p-8 text-white shadow-[0_20px_60px_rgba(242,106,94,0.22)] sm:p-10">
              <h3 className="text-2xl font-black">Lo que incluye</h3>
              <p className="mt-3 text-pink-50">
                Una experiencia pensada para aportar valor real, no solo teoría.
              </p>

              <div className="mt-8 space-y-4">
                {includedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-sm leading-relaxed text-white/95 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-white/12 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                  Ideal para ti si:
                </p>
                <p className="mt-3 text-base leading-relaxed text-white">
                  Quieres entender mejor tu embarazo, sentirte acompañada y llegar al
                  nacimiento con más preparación y menos incertidumbre.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contenido" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full bg-[#F26A5E]/10 px-4 py-2 text-sm font-bold text-[#F26A5E]">
                Contenido del diplomado
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                10 módulos pensados para responder
                <span className="block text-[#F26A5E]">
                  las dudas reales de una futura mamá
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="overflow-hidden rounded-[1.25rem] border border-[#F26A5E]/20 bg-white shadow-sm transition hover:shadow-md"
                >
                  <button
                    onClick={() =>
                      setExpandedModule(expandedModule === module.id ? null : module.id)
                    }
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-[#F26A5E]/5"
                  >
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                        {module.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {module.description}
                      </p>
                    </div>

                    <ChevronDown
                      className={`h-6 w-6 flex-shrink-0 text-[#F26A5E] transition-transform ${
                        expandedModule === module.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedModule === module.id && (
                    <div className="border-t border-[#F26A5E]/20 bg-[#F26A5E]/5 px-6 pb-6 pt-4">
                      <p className="leading-relaxed text-slate-700">{module.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={ctaInfo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-green-600 sm:w-auto"
              >
                Quiero recibir información completa
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfaf7] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full bg-[#F26A5E]/10 px-4 py-2 text-sm font-bold text-[#F26A5E]">
                Expertos participantes
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Un programa respaldado por
                <span className="block text-[#F26A5E]">profesionales de la salud</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {experts.map((expert, idx) => (
                <div
                  key={idx}
                  className="rounded-[1.6rem] bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F26A5E]/10 text-[#F26A5E]">
                    <Stethoscope className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{expert.name}</h3>
                  <p className="mt-2 font-semibold text-[#F26A5E]">{expert.specialty}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {expert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="inversion" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full bg-[#F26A5E]/10 px-4 py-2 text-sm font-bold text-[#F26A5E]">
                Inversión
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Una inversión pequeña para una etapa enorme de tu vida
              </h2>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-white via-[#F26A5E]/5 to-[#F26A5E]/10 p-8 shadow-[0_20px_70px_rgba(242,106,94,0.14)] sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
                    Inversión accesible por sesión
                  </p>

                  <p className="mt-5 text-xl font-medium text-slate-400 line-through">
                    Valor real $6,800 MXN
                  </p>

                  <p className="mt-2 text-5xl font-black tracking-tight text-[#F26A5E] sm:text-6xl">
                    $390 MXN
                  </p>

                  <p className="mt-2 text-xl font-semibold text-slate-800 sm:text-2xl">
                    por sesión
                  </p>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    10 sesiones presenciales diseñadas para ayudarte a entender tu embarazo,
                    resolver dudas reales y llegar con más tranquilidad y preparación a esta etapa.
                  </p>

                  <div className="mt-5 rounded-2xl bg-white/70 px-5 py-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">
                      Total del diplomado
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-800">
                      $3,900 MXN al finalizar el curso
                    </p>
                  </div>

                  <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5">
                    <p className="font-extrabold text-red-600">
                      Precio de lanzamiento disponible solo para esta generación
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      Al llenarse el grupo o cerrar inscripciones, esta condición puede cambiar.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.8rem] bg-slate-900 p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-black">Tu lugar incluye</h3>

                  <ul className="mt-6 space-y-4">
                    {includedItems.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                        <span className="text-sm leading-relaxed text-white/90 sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={ctaPrice}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-green-500 px-8 py-4 text-center text-lg font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-green-600"
                  >
                    Quiero asegurar mi lugar con $390 por sesión
                  </a>

                  <p className="mt-4 text-center text-xs text-white/70">
                    Atención rápida y proceso directo de inscripción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfaf7] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full bg-[#F26A5E]/10 px-4 py-2 text-sm font-bold text-[#F26A5E]">
                Testimonios
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Lo que una mamá quiere sentir en esta etapa:
                <span className="block text-[#F26A5E]">
                  tranquilidad, claridad y confianza
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="rounded-[1.6rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-base leading-relaxed text-slate-700">
                    “{testimonial.content}”
                  </p>

                  <div className="mt-6">
                    <p className="font-extrabold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={ctaMain}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-green-600 sm:w-auto"
              >
                Quiero apartar mi lugar
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full bg-[#F26A5E]/10 px-4 py-2 text-sm font-bold text-[#F26A5E]">
                Preguntas frecuentes
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Resolvamos tus dudas
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-[1.25rem] border border-[#F26A5E]/20 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-[#F26A5E]/5"
                  >
                    <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`h-6 w-6 flex-shrink-0 text-[#F26A5E] transition-transform ${
                        expandedFAQ === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFAQ === idx && (
                    <div className="border-t border-[#F26A5E]/20 bg-[#F26A5E]/5 px-6 pb-6 pt-4">
                      <p className="leading-relaxed text-slate-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="llegar"
          className="border-t border-emerald-100 bg-white px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col justify-center">
                <span className="mb-3 inline-flex w-fit rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
                  Sede del diplomado
                </span>

                <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                  Cómo llegar a la sede
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  El Diplomado Maternidad 360 se llevará a cabo en{' '}
                  <span className="font-semibold text-slate-900">EDIFICIO MEDICS</span>.
                </p>

                <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Ubicación
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-base font-semibold text-slate-700">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    EDIFICIO MEDICS
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Saltillo, Coahuila</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <Clock3 className="h-4 w-4 text-[#F26A5E]" />
                    Llega fácilmente con tu app favorita
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://maps.app.goo.gl/HpfMTUfQTzmJh7Az7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
                  >
                    Abrir en Google Maps
                  </a>

                  <a
                    href="https://waze.com/ul?ll=25.4771829,-100.9786991&navigate=yes"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                  >
                    Abrir en Waze
                  </a>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Toca el botón de tu app favorita para iniciar la ruta de llegada.
                </p>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-xl">
                <iframe
                  title="Mapa EDIFICIO MEDICS"
                  src="https://www.google.com/maps?q=EDIFICIO%20MEDICS%20Saltillo%20Coahuila&z=16&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[340px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#F26A5E] to-[#F26A5E] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
              Último llamado
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Tu embarazo merece vivirse con más paz y menos incertidumbre
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
              Si quieres sentirte más preparada, entender mejor cada etapa y resolver
              tus dudas con una guía médica clara, este es el momento de pedir informes.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={ctaMain}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-extrabold text-[#F26A5E] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#F26A5E]/5 sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Pedir informes por WhatsApp
              </a>

              <a
                href={ctaConsult}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/15 sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Agendar consulta
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-center md:flex-row md:text-left">
            <div>
              <p className="text-base font-bold text-slate-900">Diplomado Maternidad 360</p>
              <p className="text-sm text-slate-500">
                Formación presencial para futuras mamás en Saltillo, Coahuila
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={ctaMain}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-600"
              >
                WhatsApp
              </a>
              <a
                href="#llegar"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

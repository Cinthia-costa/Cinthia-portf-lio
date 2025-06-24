"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Network,
  Target,
  ChevronDown,
  Database,
  Shield,
  BarChart3,
  Globe,
  Server,
  Palette,
  BookOpen,
  Zap,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header/Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
              <span className="text-4xl font-bold text-white">CC</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">CINTHIA ALVES DA COSTA</h1>
            <p className="text-xl mb-2 text-red-100">Desenvolvedora em Formação | Técnica em Redes</p>
            <p className="text-lg text-red-200 mb-8">19 Anos • Fortaleza - Ceará</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-4 h-4" />
                <span>Fortaleza - Ceará</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Mail className="w-4 h-4" />
                <span>cinthiacosta110@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50"
                onClick={() => window.open("https://www.linkedin.com/in/cinthia-costa-358b02274", "_blank")}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50"
                onClick={() => window.open("https://github.com/Cinthia-costa", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70 cursor-pointer" onClick={() => scrollToSection("objetivo")} />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Objetivo Profissional */}
        <section id="objetivo" className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">Perfil Profissional</h2>
          </div>
          <Card className="border-red-200 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Jovem profissional em ascensão na área de Tecnologia da Informação, com foco em Desenvolvimento de
                Software e Cibersegurança. Com sólida base técnica adquirida em cursos técnicos e graduação, já atuo em
                projetos de suporte técnico e desenvolvimento de plataformas digitais. Tenho como objetivo consolidar
                minha carreira como desenvolvedora e especialista em segurança da informação, contribuindo com soluções
                inovadoras e seguras para o ambiente digital.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Formação Acadêmica */}
        <section id="formacao">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">Formação Acadêmica</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700">Ensino Superior - Cursando</CardTitle>
                <CardDescription className="text-red-600">2024 - 2026</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Análise e Desenvolvimento de Sistemas</h3>
                <p className="text-gray-600">Centro Universitário Ateneu</p>
                <Badge className="mt-3 bg-red-100 text-red-700 hover:bg-red-200">Em Andamento</Badge>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700">Técnico Integrado ao Ensino Médio</CardTitle>
                <CardDescription className="text-red-600">2021 - 2023</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Técnico em Redes de Computadores</h3>
                <p className="text-gray-600">EEEP Ícaro de Sousa Moreira</p>
                <Badge className="mt-3 bg-green-100 text-green-700">Concluído</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section id="experiencia">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">Experiência Profissional</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-red-700 text-xl">TIMENOW</CardTitle>
                    <CardDescription className="text-red-600 font-medium">Assistente Técnico</CardDescription>
                  </div>
                  <Badge className="bg-red-600 text-white">Atual</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-3">Abril/2024 - Presente</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Desenvolvimento de plataformas digitais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700">CENTRO UNIVERSITÁRIO ATENEU</CardTitle>
                <CardDescription className="text-red-600">
                  Auxiliar Administrativa - Inteligência Comercial
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-3">Fevereiro/2024 - Outubro/2024</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Suporte nas atividades administrativas e operacionais da área de Inteligência Comercial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700">SEAPEN</CardTitle>
                <CardDescription className="text-red-600">Estágio Auxiliar Administrativa</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-3">Agosto/2023 - Dezembro/2023 (5 meses)</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Apoio nas rotinas administrativas e organização de documentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Atendimento ao público e suporte às demandas operacionais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section id="habilidades">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">Habilidades Técnicas</h2>
          </div>

          {/* Front-End */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Front-End</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-1">HTML5</h4>
                  <Badge className="bg-orange-100 text-orange-700">Avançado</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Palette className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-1">CSS3</h4>
                  <Badge className="bg-blue-100 text-blue-700">Avançado</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-1">JavaScript</h4>
                  <Badge className="bg-yellow-100 text-yellow-700">Intermediário</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold mb-1">React</h4>
                  <Badge className="bg-cyan-100 text-cyan-700">Em Aprendizado</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Bootstrap</h4>
                  <Badge className="bg-purple-100 text-purple-700">Intermediário</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back-End */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Server className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Back-End</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold mb-1">PHP</h4>
                  <Badge className="bg-indigo-100 text-indigo-700">Básico</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Server className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Node.js</h4>
                  <Badge className="bg-green-100 text-green-700">Básico</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-1">MySQL</h4>
                  <Badge className="bg-blue-100 text-blue-700">Básico</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-1">APIs</h4>
                  <Badge className="bg-orange-100 text-orange-700">Básico</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cibersegurança */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Cibersegurança</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Segurança da Informação</h4>
                  <Badge className="bg-red-100 text-red-700">Fundamentos</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Network className="w-6 h-6 text-gray-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Redes Seguras</h4>
                  <Badge className="bg-gray-100 text-gray-700">Básico</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Pentest</h4>
                  <Badge className="bg-purple-100 text-purple-700">Interesse</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Outras Habilidades */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Outras Habilidades</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Power BI</h4>
                  <Badge className="bg-yellow-100 text-yellow-700">Intermediário</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Excel</h4>
                  <Badge className="bg-green-100 text-green-700">Avançado</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Network className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Redes</h4>
                  <Badge className="bg-blue-100 text-blue-700">Técnico</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold mb-1">Inglês</h4>
                  <Badge className="bg-indigo-100 text-indigo-700">Básico</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Atualmente Estudando */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Atualmente Estudando</h3>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">JavaScript Avançado</h4>
                    <Badge className="mt-1 bg-yellow-100 text-yellow-700 text-xs">Em Progresso</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">React.js</h4>
                    <Badge className="mt-1 bg-cyan-100 text-cyan-700 text-xs">Em Progresso</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Cibersegurança</h4>
                    <Badge className="mt-1 bg-red-100 text-red-700 text-xs">Em Progresso</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Database className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Banco de Dados</h4>
                    <Badge className="mt-1 bg-blue-100 text-blue-700 text-xs">Em Progresso</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formação Complementar */}
        <section id="certificacoes">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">Formação Complementar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Microsoft Excel 2016 - Básico e Intermediário", hours: "35 horas" },
              { name: "Microsoft Power BI para Business Intelligence", hours: "72 horas" },
              { name: "Introdução a Redes de Computadores", hours: "35 horas" },
              { name: "Fundamentos de TI - Hardware e Software", hours: "15 horas" },
              { name: "Suporte Técnico em Tecnologia da Informação", hours: "100 horas" },
            ].map((cert, index) => (
              <Card key={index} className="border-red-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">{cert.name}</h3>
                      <Badge variant="outline" className="border-red-200 text-red-600">
                        {cert.hours}
                      </Badge>
                    </div>
                    <Award className="w-5 h-5 text-red-500 ml-2 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-4">Vamos Conversar?</h3>
          <p className="mb-6 text-red-100">
            Estou sempre aberta a novas oportunidades e desafios na área de tecnologia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              className="bg-white text-red-600 hover:bg-red-50"
              onClick={() => window.open("mailto:cinthiacosta110@gmail.com")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Enviar E-mail
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-red-600 hover:bg-red-50"
              onClick={() => window.open("https://www.linkedin.com/in/cinthia-costa-358b02274", "_blank")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-red-600 hover:bg-red-50"
              onClick={() => window.open("https://github.com/Cinthia-costa", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

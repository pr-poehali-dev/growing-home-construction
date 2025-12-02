import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [houseModules, setHouseModules] = useState(1);
  const [area, setArea] = useState(50);
  const [floors, setFloors] = useState(1);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const calculatePrice = () => {
    const basePrice = 25000;
    return (basePrice * area * floors).toLocaleString('ru-RU');
  };

  const projects = [
    {
      title: 'Стартовый модуль',
      area: '50 м²',
      modules: 1,
      description: 'Идеальное начало для молодой семьи',
      features: ['1 спальня', 'Кухня-гостиная', 'Санузел', 'Терраса'],
      image: 'https://cdn.poehali.dev/projects/f3244d60-6572-4d78-8638-d635511f8455/files/718de6d5-672c-483c-8a6c-1d49cd996438.jpg'
    },
    {
      title: 'Семейный дом',
      area: '100 м²',
      modules: 2,
      description: 'Расширение для растущей семьи',
      features: ['3 спальни', 'Гостиная', '2 санузла', 'Кабинет'],
      image: 'https://cdn.poehali.dev/projects/f3244d60-6572-4d78-8638-d635511f8455/files/d63718a0-91e9-4631-ab11-d69f29800945.jpg'
    },
    {
      title: 'Просторная резиденция',
      area: '150 м²',
      modules: 3,
      description: 'Полноценный дом с дополнительным пространством',
      features: ['4 спальни', 'Гостиная', '3 санузла', 'Гардеробная', 'Гараж'],
      image: 'https://cdn.poehali.dev/projects/f3244d60-6572-4d78-8638-d635511f8455/files/d17198e7-28b2-4bf2-9bae-2c604fcb446a.jpg'
    }
  ];

  const techFeatures = [
    {
      icon: 'Boxes',
      title: 'Модульная система',
      description: 'Панели производятся на заводе с точностью до миллиметра'
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Готовые стены привозятся на объект за 1 день'
    },
    {
      icon: 'Hammer',
      title: 'Монтаж 5-7 дней',
      description: 'Сборка дома как конструктора — быстро и качественно'
    },
    {
      icon: 'TrendingUp',
      title: 'Возможность роста',
      description: 'Добавляйте модули по мере необходимости'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Home" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Растущий Дом
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                О технологии
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Расчёт стоимости
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Дом, который{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  растёт вместе с вами
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Инновационная технология prefab-строительства. Начните с малого и расширяйте дом по мере необходимости.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('calculator')}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  Рассчитать стоимость
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('technology')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse"></div>
                <div className="relative z-10 h-full flex flex-col gap-4">
                  {[1, 2, 3].map((module, idx) => (
                    <div
                      key={module}
                      className="flex-1 bg-white rounded-xl shadow-lg flex items-center justify-center font-bold text-2xl text-gray-700 transition-all duration-500 hover:scale-105"
                      style={{
                        animationDelay: `${idx * 0.2}s`,
                        opacity: houseModules >= module ? 1 : 0.3
                      }}
                    >
                      Модуль {module}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 text-center">
                <Label className="text-lg font-semibold mb-2 block">
                  Количество модулей: {houseModules}
                </Label>
                <Slider
                  value={[houseModules]}
                  onValueChange={(value) => setHouseModules(value[0])}
                  min={1}
                  max={3}
                  step={1}
                  className="max-w-xs mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Технология <span className="text-primary">Prefab</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каркасно-панельное строительство нового поколения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, idx) => (
              <Card
                key={idx}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5-7 дней</div>
                <div className="text-gray-700">Срок сборки</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">99%</div>
                <div className="text-gray-700">Заводская готовность</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">+30%</div>
                <div className="text-gray-700">Экономия времени</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="text-secondary">проекты</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От компактного старта до просторной резиденции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 hover:border-primary"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold text-primary shadow-lg">
                    {project.area}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Рассчитайте <span className="text-accent">стоимость</span>
            </h2>
            <p className="text-xl text-gray-600">
              Узнайте примерную стоимость вашего растущего дома
            </p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <Label className="text-lg font-semibold mb-3 block">
                    Площадь дома: {area} м²
                  </Label>
                  <Slider
                    value={[area]}
                    onValueChange={(value) => setArea(value[0])}
                    min={30}
                    max={200}
                    step={10}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>30 м²</span>
                    <span>200 м²</span>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">
                    Количество этажей: {floors}
                  </Label>
                  <Slider
                    value={[floors]}
                    onValueChange={(value) => setFloors(value[0])}
                    min={1}
                    max={2}
                    step={1}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 этаж</span>
                    <span>2 этажа</span>
                  </div>
                </div>

                <div className="pt-6 border-t-2">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center">
                    <div className="text-sm text-gray-600 mb-2">Примерная стоимость</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {calculatePrice()} ₽
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {Math.round(25000).toLocaleString('ru-RU')} ₽/м²
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  onClick={() => scrollToSection('contacts')}
                >
                  Получить точный расчёт
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь <span className="text-primary">с нами</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ответим на все вопросы и поможем реализовать проект
            </p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-gray-600">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-gray-600">info@growhouse.ru</div>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.ru" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="mt-2 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Home" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Растущий Дом</span>
              </div>
              <p className="text-gray-400">
                Инновационное строительство для современной жизни
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-gray-400">
                <div className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection('hero')}>Главная</div>
                <div className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection('technology')}>О технологии</div>
                <div className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection('projects')}>Проекты</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (999) 123-45-67</div>
                <div>info@growhouse.ru</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Растущий Дом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
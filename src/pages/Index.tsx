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
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-light text-primary tracking-wide">
              Растущий Дом
            </span>
            <div className="hidden md:flex gap-12">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                Технология
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                Стоимость
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                Контакты
              </button>
            </div>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              variant="default"
            >
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-40 pb-32 px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1] text-primary">
                Дом, который растёт вместе с вами
              </h1>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light">
                Инновационная технология prefab-строительства. Начните с малого и расширяйте дом по мере необходимости.
              </p>
              <div className="flex gap-6">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('calculator')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                  Рассчитать стоимость
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('technology')}
                  className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-muted p-12 relative overflow-hidden">
                <div className="relative z-10 h-full flex flex-col gap-6">
                  {[1, 2, 3].map((module, idx) => (
                    <div
                      key={module}
                      className="flex-1 bg-white border border-border flex items-center justify-center text-xl text-primary transition-all duration-500"
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
              <div className="mt-8 text-center">
                <Label className="text-sm font-light mb-4 block text-muted-foreground uppercase tracking-wider">
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

      <section id="technology" className="py-32 px-8 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl mb-6 text-primary">
              Технология Prefab
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Каркасно-панельное строительство нового поколения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6">
                  <Icon name={feature.icon} className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 border-t border-border pt-20">
            <div className="grid md:grid-cols-3 gap-16 text-center">
              <div>
                <div className="text-5xl mb-4 text-primary">5-7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Дней сборки</div>
              </div>
              <div>
                <div className="text-5xl mb-4 text-primary">99%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Заводская готовность</div>
              </div>
              <div>
                <div className="text-5xl mb-4 text-primary">+30%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Экономия времени</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl mb-6 text-primary">
              Наши проекты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              От компактного старта до просторной резиденции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-white px-4 py-2 text-sm text-primary">
                    {project.area}
                  </div>
                </div>
                <h3 className="text-2xl mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-6 font-light leading-relaxed">{project.description}</p>
                <div className="space-y-3">
                  {project.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-secondary"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-32 px-8 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl mb-6 text-primary">
              Рассчитайте стоимость
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Узнайте примерную стоимость вашего растущего дома
            </p>
          </div>
          <div className="bg-white p-12">
            <div className="space-y-12">
              <div>
                <Label className="text-sm font-light mb-6 block text-muted-foreground uppercase tracking-wider">
                  Площадь дома: {area} м²
                </Label>
                <Slider
                  value={[area]}
                  onValueChange={(value) => setArea(value[0])}
                  min={30}
                  max={200}
                  step={10}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>30 м²</span>
                  <span>200 м²</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-light mb-6 block text-muted-foreground uppercase tracking-wider">
                  Количество этажей: {floors}
                </Label>
                <Slider
                  value={[floors]}
                  onValueChange={(value) => setFloors(value[0])}
                  min={1}
                  max={2}
                  step={1}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1 этаж</span>
                  <span>2 этажа</span>
                </div>
              </div>

              <div className="pt-12 border-t border-border">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Примерная стоимость</div>
                  <div className="text-5xl mb-2 text-primary">
                    {calculatePrice()} ₽
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.round(25000).toLocaleString('ru-RU')} ₽/м²
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                onClick={() => scrollToSection('contacts')}
              >
                Получить точный расчёт
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl mb-6 text-primary">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Ответим на все вопросы и поможем реализовать проект
            </p>
          </div>
          <div className="bg-muted p-12">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Телефон</div>
                <div className="text-lg text-primary">+7 (999) 123-45-67</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Email</div>
                <div className="text-lg text-primary">info@growhouse.ru</div>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="name" className="text-sm text-muted-foreground uppercase tracking-wider">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" className="mt-3 bg-white" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm text-muted-foreground uppercase tracking-wider">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" className="mt-3 bg-white" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm text-muted-foreground uppercase tracking-wider">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.ru" className="mt-3 bg-white" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm text-muted-foreground uppercase tracking-wider">Сообщение</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                  className="mt-3 w-full px-4 py-3 border border-input bg-white focus:outline-none focus:ring-1 focus:ring-ring font-light"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-16 px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-16 mb-12">
            <div>
              <span className="text-2xl font-light mb-6 block">Растущий Дом</span>
              <p className="text-primary-foreground/70 font-light">
                Инновационное строительство для современной жизни
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6">Навигация</h4>
              <div className="space-y-3 text-primary-foreground/70 font-light">
                <div className="cursor-pointer hover:text-primary-foreground transition-colors" onClick={() => scrollToSection('hero')}>Главная</div>
                <div className="cursor-pointer hover:text-primary-foreground transition-colors" onClick={() => scrollToSection('technology')}>Технология</div>
                <div className="cursor-pointer hover:text-primary-foreground transition-colors" onClick={() => scrollToSection('projects')}>Проекты</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6">Контакты</h4>
              <div className="space-y-3 text-primary-foreground/70 font-light">
                <div>+7 (999) 123-45-67</div>
                <div>info@growhouse.ru</div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm font-light">
            <p>&copy; 2024 Растущий Дом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
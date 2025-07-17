import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const products = [
    {
      id: 1,
      name: 'PLA пластик',
      price: '1,200₽',
      image: '/img/142b127f-fc34-4660-8abb-9eb14dac2be7.jpg',
      category: 'Материалы',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Arduino Uno R3',
      price: '2,500₽',
      image: '/img/ac7ca706-4885-4891-a8f3-940c60004c06.jpg',
      category: 'Электроника',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Сопло 0.4мм',
      price: '350₽',
      image: '/img/142b127f-fc34-4660-8abb-9eb14dac2be7.jpg',
      category: 'Запчасти',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Raspberry Pi 4',
      price: '8,900₽',
      image: '/img/ac7ca706-4885-4891-a8f3-940c60004c06.jpg',
      category: 'Электроника',
      rating: 4.9,
    },
  ];

  const services = [
    {
      title: '3D Печать',
      description: 'Высококачественная 3D печать на профессиональном оборудовании',
      icon: 'Printer',
      features: ['FDM печать', 'SLA печать', 'Материалы: PLA, ABS, PETG', 'Пост-обработка']
    },
    {
      title: 'Покраска изделий',
      description: 'Профессиональная покраска 3D напечатанных деталей',
      icon: 'Palette',
      features: ['Грунтовка', 'Покраска', 'Лакировка', 'Спецэффекты']
    },
    {
      title: 'Калькулятор стоимости',
      description: 'Загрузите файл и получите точную стоимость печати',
      icon: 'Calculator',
      features: ['Анализ STL', 'Расчет материала', 'Время печати', 'Моментальная оценка']
    }
  ];

  return (
    <div className="min-h-screen gradient-bg text-foreground">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/884287a5-dfd3-4103-be0b-2db226ef7ba0.jpg" 
                alt="Miveltic3D Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <h1 className="text-2xl text-thin text-gray-900 dark:text-white">Miveltic3D</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-light hover:text-orange-600 transition-colors">Главная</a>
              <a href="#catalog" className="text-light hover:text-orange-600 transition-colors">Каталог</a>
              <a href="#services" className="text-light hover:text-orange-600 transition-colors">3D Печать</a>
              <a href="#calculator" className="text-light hover:text-orange-600 transition-colors">Калькулятор</a>
              <a href="#about" className="text-light hover:text-orange-600 transition-colors">О нас</a>
              <a href="#contact" className="text-light hover:text-orange-600 transition-colors">Контакты</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Sun" className="h-4 w-4" />
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-orange-500"
                />
                <Icon name="Moon" className="h-4 w-4" />
              </div>
              <Button variant="outline" size="sm" className="text-light border-gray-300 hover:bg-orange-50">
                <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl text-thin mb-6 text-gray-900 dark:text-white">
              Профессиональная <span className="text-orange-600">3D печать</span> и <span className="text-yellow-600">электроника</span>
            </h2>
            <p className="text-xl text-light text-gray-700 dark:text-gray-300 mb-8">
              Создаем будущее с помощью современных технологий. 3D печать, покраска, электронные компоненты — все в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 border border-orange-200 text-medium">
                <Icon name="Printer" className="mr-2 h-5 w-5" />
                Заказать печать
              </Button>
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50 border border-yellow-200 text-medium">
                <Icon name="Calculator" className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-thin text-center mb-12 text-gray-900 dark:text-white">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name={service.icon} className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl text-medium text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-light text-gray-600 dark:text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-light text-gray-700 dark:text-gray-300">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl text-thin text-center mb-8 text-gray-900 dark:text-white">Калькулятор стоимости</h2>
            <Card className="animate-scale-in bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-medium text-gray-900 dark:text-white">
                  <Icon name="Calculator" className="mr-2 h-5 w-5 text-orange-500" />
                  Рассчитать стоимость печати
                </CardTitle>
                <CardDescription className="text-light text-gray-600 dark:text-gray-400">
                  Загрузите STL файл и получите точную стоимость изготовления
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="file">STL файл</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".stl"
                    className="cursor-pointer"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="material">Материал</Label>
                    <select className="w-full p-2 border rounded-md bg-background">
                      <option>PLA</option>
                      <option>ABS</option>
                      <option>PETG</option>
                      <option>TPU</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quality">Качество</Label>
                    <select className="w-full p-2 border rounded-md bg-background">
                      <option>Стандарт (0.2мм)</option>
                      <option>Высокое (0.1мм)</option>
                      <option>Черновое (0.3мм)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="painting" className="rounded" />
                  <Label htmlFor="painting">Покраска изделия</Label>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">Примерная стоимость</p>
                    <p className="text-3xl font-bold text-orange-500">1,250₽</p>
                    <p className="text-sm">Время печати: ~4 часа</p>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Каталог товаров</h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Все товары</TabsTrigger>
              <TabsTrigger value="materials">Материалы</TabsTrigger>
              <TabsTrigger value="electronics">Электроника</TabsTrigger>
              <TabsTrigger value="parts">Запчасти</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center text-sm">
                          <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                          {product.rating}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-orange-500">{product.price}</span>
                        <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                          <Icon name="ShoppingCart" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materials" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.category === 'Материалы').map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center text-sm">
                          <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                          {product.rating}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-orange-500">{product.price}</span>
                        <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                          <Icon name="ShoppingCart" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="electronics" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.category === 'Электроника').map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center text-sm">
                          <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                          {product.rating}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-orange-500">{product.price}</span>
                        <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                          <Icon name="ShoppingCart" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="parts" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.category === 'Запчасти').map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center text-sm">
                          <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                          {product.rating}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-orange-500">{product.price}</span>
                        <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                          <Icon name="ShoppingCart" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">О компании Miveltic3D</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы — команда профессионалов, специализирующихся на 3D печати и электронике. 
              Наша миссия — сделать современные технологии доступными для всех.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-muted-foreground">Выполненных проектов</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка клиентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-500">99%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Box" className="h-6 w-6 text-orange-500" />
                <h3 className="font-bold text-orange-500">Miveltic3D</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная 3D печать и электроника для воплощения ваших идей.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">3D Печать</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">Покраска</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">Электроника</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">Материалы</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">Электроника</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">Запчасти</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-orange-500">Инструменты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@miveltic3d.ru
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, ул. Технологическая, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            © 2024 Miveltic3D. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
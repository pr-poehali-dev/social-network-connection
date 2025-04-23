
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavBar from "@/components/NavBar";
import UserGrid from "@/components/UserGrid";
import { Search, Users, Sparkles, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      
      <main className="container pt-24 pb-10">
        <section className="mb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent animate-fade-in">
              Знакомства и общение
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Найдите новых друзей и интересных собеседников для общения
            </p>
            
            <div className="relative max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Input 
                placeholder="Поиск людей по интересам, городу..." 
                className="pl-12 h-12 rounded-full shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Button className="absolute right-1 top-1 h-10 rounded-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                Найти
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="outline" className="rounded-full">
                <Users size={18} className="mr-2" />
                Люди рядом
              </Button>
              <Button variant="outline" className="rounded-full">
                <Sparkles size={18} className="mr-2" />
                Интересные
              </Button>
              <Button variant="outline" className="rounded-full">
                <Clock size={18} className="mr-2" />
                Онлайн
              </Button>
            </div>
          </div>
        </section>
        
        <section>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Рекомендуемые люди</h2>
              <TabsList className="bg-white/50">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="new">Новые</TabsTrigger>
                <TabsTrigger value="active">Активные</TabsTrigger>
                <TabsTrigger value="popular">Популярные</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <UserGrid />
            </TabsContent>
            <TabsContent value="new">
              <div className="text-center py-10 text-gray-500">
                <p>Скоро тут появятся новые пользователи</p>
              </div>
            </TabsContent>
            <TabsContent value="active">
              <div className="text-center py-10 text-gray-500">
                <p>Скоро тут появятся активные пользователи</p>
              </div>
            </TabsContent>
            <TabsContent value="popular">
              <div className="text-center py-10 text-gray-500">
                <p>Скоро тут появятся популярные пользователи</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="container text-center text-gray-500 text-sm">
          <p>© 2023 Сервис знакомств и общения. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

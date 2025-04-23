
import ProfileCard from "./ProfileCard";

// Демо-данные для пользователей
const users = [
  {
    id: 1,
    name: "Анна",
    age: 27,
    location: "Москва",
    bio: "Люблю путешествия, книги и хорошую музыку. Ищу интересных собеседников для общения.",
    avatar: "",
    interests: ["Путешествия", "Книги", "Музыка"],
    online: true,
  },
  {
    id: 2,
    name: "Максим",
    age: 31,
    location: "Санкт-Петербург",
    bio: "Программист, занимаюсь спортом, увлекаюсь кино и настольными играми.",
    avatar: "",
    interests: ["Спорт", "Кино", "IT"],
    online: false,
  },
  {
    id: 3,
    name: "Елена",
    age: 25,
    location: "Казань",
    bio: "Фотограф, творческая личность. Люблю природу и животных. Ищу друзей по интересам.",
    avatar: "",
    interests: ["Фотография", "Искусство", "Природа"],
    online: true,
  },
  {
    id: 4,
    name: "Алексей",
    age: 29,
    location: "Новосибирск",
    bio: "Предприниматель, интересуюсь саморазвитием и психологией. Готов к знакомствам.",
    avatar: "",
    interests: ["Бизнес", "Психология", "Саморазвитие"],
    online: false,
  },
  {
    id: 5,
    name: "Ольга",
    age: 24,
    location: "Екатеринбург",
    bio: "Студентка, изучаю иностранные языки. Люблю танцы и активный отдых.",
    avatar: "",
    interests: ["Языки", "Танцы", "Путешествия"],
    online: true,
  },
  {
    id: 6,
    name: "Дмитрий",
    age: 33,
    location: "Москва",
    bio: "Музыкант, играю на гитаре. Ищу единомышленников для общения и совместного творчества.",
    avatar: "",
    interests: ["Музыка", "Гитара", "Концерты"],
    online: false,
  },
];

const UserGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          name={user.name}
          age={user.age}
          location={user.location}
          bio={user.bio}
          avatar={user.avatar}
          interests={user.interests}
          online={user.online}
        />
      ))}
    </div>
  );
};

export default UserGrid;

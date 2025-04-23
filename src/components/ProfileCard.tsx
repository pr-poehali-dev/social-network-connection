
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, MessageCircle, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  bio: string;
  avatar: string;
  interests: string[];
  online?: boolean;
}

const ProfileCard = ({
  name,
  age,
  location,
  bio,
  avatar,
  interests,
  online = false,
}: ProfileCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative pb-[60%] overflow-hidden bg-slate-100">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/placeholder.svg" alt="Изображение" className="w-16 h-16 opacity-20" />
          </div>
        )}
        {online && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-green-500 hover:bg-green-600">
              Онлайн
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{name}, {age}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <Avatar className={`${online ? 'ring-2 ring-green-500 ring-offset-2' : ''}`}>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>

        <p className="mt-2 text-sm line-clamp-2">{bio}</p>

        <div className="mt-3 flex flex-wrap gap-1">
          {interests.map((interest, index) => (
            <Badge key={index} variant="secondary" className="bg-[#E5DEFF] text-[#7E69AB]">
              {interest}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-0">
        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-[#9b87f5]">
          <Heart size={18} className="mr-1" />
          <span>Нравится</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-[#9b87f5]">
          <MessageCircle size={18} className="mr-1" />
          <span>Написать</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-[#9b87f5]">
          <UserPlus size={18} className="mr-1" />
          <span>Добавить</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;

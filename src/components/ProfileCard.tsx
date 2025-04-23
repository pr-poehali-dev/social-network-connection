import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageCircle, Heart, User2 } from "lucide-react";

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
  online?: boolean;
  distance?: string;
}

export default function ProfileCard({
  id,
  name,
  age,
  location,
  bio,
  imageUrl,
  online = false,
  distance = "10км",
}: ProfileCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-[1.02] dark-card-glow border-pink-metallic/20">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${name}, ${age}`}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white font-semibold text-xl flex items-center gap-2">
                {name}, {age} 
                {online && <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full"></span>}
              </h3>
              <p className="text-white/80 text-sm flex items-center gap-1">
                <span>📍</span> {location} • {distance}
              </p>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-3 border-t border-border/30 bg-card/50">
        <Button variant="ghost" size="icon" className="text-pink-metallic hover:text-pink-light hover:bg-pink-dark/10">
          <MessageCircle size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-pink-metallic hover:text-pink-light hover:bg-pink-dark/10">
          <Heart size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-pink-metallic hover:text-pink-light hover:bg-pink-dark/10">
          <User2 size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
}

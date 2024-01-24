import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

interface PropertiesCardProps {
  title: string;
  icon: React.ReactNode;
}

export function PropertiesCard({ title, icon }: PropertiesCardProps) {
  const popular = [
    {
      title: "250 sqr yard",
      description: "Marlas",
    },
    {
      title: "500 sqr yard",
      description: "Marlas",
    },
    {
      title: "1000 sqr yard",
      description: "Marlas",
    },
    {
      title: "250 sqr yard",
      description: "Marlas",
    },
    {
      title: "500 sqr yard",
      description: "Marlas",
    },
    {
      title: "1000 sqr yard",
      description: "Marlas",
    },
  ];
  const type = [
    {
      title: "250 sqr yard",
      description: "Marlas",
    },
    {
      title: "500 sqr yard",
      description: "Marlas",
    },
    {
      title: "1000 sqr yard",
      description: "Marlas",
    },
    {
      title: "250 sqr yard",
      description: "Marlas",
    },
    {
      title: "500 sqr yard",
      description: "Marlas",
    },
    {
      title: "1000 sqr yard",
      description: "Marlas",
    },
  ];
  const AreaSize = [
    {
      title: "250 sqr yard",
      description: "Marlas",
    },
    {
      title: "500 sqr yard",
      description: "Marlas",
    },
    {
      title: "1000 sqr yard",
      description: "Marlas",
    },
    {
      title: "250 sqr yard",
      description: "Marlas",
    },
    {
      title: "500 sqr yard",
      description: "Marlas",
    },
    {
      title: "1000 sqr yard",
      description: "Marlas",
    },
  ];

  return (
    <Card className={cn("w-[450px]")}>
      <AspectRatio ratio={16 / 9}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-4">
              <div className="text-green-700">{icon}</div>
              {title}
            </div>
          </CardTitle>
        </CardHeader>
        <Tabs defaultValue="popular" className="w-[400px] mx-10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="type">Type</TabsTrigger>
            <TabsTrigger value="area">Area Size</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      {/* <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        
                        </CardContent>
                      </Card> */}
                      <div className="grid w-full grid-cols-3 gap-3">
                        {popular.map((item,index) => (
                          <Card key={index} className="p-1 flex flex-col items-center">
                            <div>{item.title}</div>
                            <div className="text-gray-500">
                              {item.description}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="type">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      {/* <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        
                        </CardContent>
                      </Card> */}
                      <div className="grid w-full grid-cols-3 gap-3">
                        {popular.map((item, index) => (
                          <Card key={index} className="p-1 flex flex-col items-center">
                            <div>{item.title}</div>
                            <div className="text-gray-500">
                              {item.description}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="area">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      {/* <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        
                        </CardContent>
                      </Card> */}
                      <div className="grid w-full grid-cols-3 gap-3">
                        {popular.map((item, index) => (
                          <Card key={index} className="p-1 flex flex-col items-center">
                            <div>{item.title}</div>
                            <div className="text-gray-500">
                              {item.description}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>
      </AspectRatio>
    </Card>
  );
}

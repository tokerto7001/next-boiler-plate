import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ITrendCardProps {
  data: {
    title: string;
    content: string;
    image: StaticImageData;
  };
}

export default function TrendCard({ data }: ITrendCardProps) {
  return (
    <Card
      data-testid="trendCard"
      className="flex flex-col gap-3 hover:bg-neutral p-6 rounded-xl hover:cursor-pointer md:w-1/3"
    >
      <CardHeader className="h-1/5 flex items-center justify-center">
        <CardTitle className="text-center text-md  lg:text-xl md:text-md">
          {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-3/6 flex justify-center items-center">
        <div className="relative h-36 w-full">
          <Image
            src={data.image}
            alt="Blog Image"
            fill={true}
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="h-1/5 flex items-center justify-center">
        <Link href="/example">
          <Button className="bg-primary-main text-white hover:bg-primary-hovered disabled:bg-primary-disabled">
            Read Now!
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

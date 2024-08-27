import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

interface ITrendCardProps {
  data: {
    title: string;
    content: string;
  };
}

export default function TrendCard({ data }: ITrendCardProps) {
  return (
    <Card className="flex flex-col gap-3 hover:bg-neutral p-6 rounded-xl hover:cursor-pointer">
        <CardHeader className="h-1/4">
          <CardTitle className="text-center text-lg md:text-xl">{data.title}</CardTitle>
        </CardHeader>
        <CardContent className="h-1/2 flex items-center justify-center md:text-lg text-md">
          <p>{data.content}</p>
        </CardContent>
        <CardFooter className="h-1/4 flex items-center justify-center">
            <Button className="bg-primary-main text-white hover:bg-primary-hovered disabled:bg-primary-disabled">Read Now!</Button>
        </CardFooter>
    </Card>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  FacebookIcon,
  Instagram,
  Locate,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
  X,
} from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row space-x-5 items-center w-full md:h-screen">
      <div className="flex flex-col ml-[100px] md:p-5 w-full p-5 h-full  md:mt-[300px]">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          Contact us
        </h1>
        <h3 className="md:text-2xl font-bold pt-3 text-center md:text-left">
          Feel free to contact us!
        </h3>
        <p className="w-[80%] text-center mt-5 md:text-left">
          We are a team of developers and designers who are passionate about
          creating beautiful and functional websites.
        </p>
        <div className="flex flex-col mt-8 space-y-5 md:space-y-4 w-[35%]">
          <div className="flex space-x-2">
            <MapPin />
            <p>climson road, NY, USA</p>
          </div>
          <div className="flex space-x-2">
            <Phone />
            <p>+09876543567</p>
          </div>
          <div className="flex space-x-2">
            <Mail />
            <p>abc@gmail.com</p>
          </div>
        </div>
        <div className="flex mt-5 space-x-3">
          <Facebook className=" hover:scale-150 transform transition-transform duration-300 cursor-pointer" />
          <Twitter className=" hover:scale-150 transform transition-transform duration-300 cursor-pointer" />
          <Instagram className=" hover:scale-150 transform transition-transform duration-300 cursor-pointer" />
        </div>
      </div>
      <div className="flex-col items-start w-full p-5 md:p-0  h-full md:mt-[300px]">
        <div className="flex flex-col mr-5 space-y-5 pt-5">
          <div className="w-[60%] p-5 border border-gray-200 rounded-md shadow-md">
            <form className="space-y-8">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl text-bold">Sent us a message</h3>
                <input
                  type="name"
                  placeholder="Name"
                  className="border-2 border-gray-200 rounded-md p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 border-gray-200 rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border-2 border-gray-200 rounded-md p-2"
                />
                <textarea
                  placeholder="Message"
                  className="border-2 border-gray-200 rounded-md p-2"
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

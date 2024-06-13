import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row space-x-5 items-center w-full md:h-screen">
      <div className="flex flex-col items-center md:h-screen md:mt-[250px] w-full">
        <img
          src={
            "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
          }
          alt="image"
          className=" w-full md:w-2/3 h-[350px] object-cover md:rounded-md"
        />
      </div>
      <div className="flex-col items-start w-full p-5 md:p-0 ">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          About us
        </h1>
        <h3 className="md:text-2xl font-bold pt-3 text-center md:text-left">
          Welcome to Recipe App.
        </h3>
        <div className="flex-col mr-5 space-y-5 pt-5">
          <p>
            G&R Sizzling, formerly known as Express Eat, started as a local
            business in Makati City, providing delicious meals to the citizens,
            employees, and students in the area. Our goal has always been to
            offer a diverse range of flavorful dishes that cater to various
            tastes and preferences.
          </p>
          <p>
            As G&R Sizzling transitions to a more systematic approach of
            delivering foods to our clients and customers, Express Eat continues
            to be the heart of our kitchen operations. Our platform features a
            wide variety of recipes not only from the Philippines but also from
            different countries around the world. With our user-friendly search
            bar, visitors can easily find the recipe they desire.
          </p>

          <p>
            We take pride in providing detailed instructions on how to prepare
            each recipe, ensuring that even novice cooks can create delicious
            meals with ease. As G&R Sizzling expands its horizons and ventures
            into new culinary territories, we remain committed to providing our
            users with exceptional recipes and culinary experiences.{" "}
          </p>

          <p>
            We invite you to explore our website and discover the perfect recipe
            to satisfy your cravings. Welcome to G&R Sizzling, where culinary
            delights await!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomeHero() {
  const techstack = [
    "Next.js 15-RC",
    "React 19",
    "Tailwind 3",
    "Lucide-react icons",
  ];

  return (
    <section className="container py-16 flex flex-col gap-6 flex-grow justify-center items-center text-black">
      <p className="text-xl font-medium">
        Welcome to your project. This application utilizes the following
        technologies:
      </p>
      <ul>
        {techstack.map((stack, i) => (
          <li key={i}>{stack}</li>
        ))}
      </ul>

      <h2 className="italic">Important Notes</h2>
      <ul className="list-disc">
        <li>
          Ensure that all package versions are current before commencing work
          with this boilerplate.
        </li>
        <li>
          Adhere to best practices when developing and naming your pages and
          components.
        </li>
        <li>
          Utilize appropriate semantic HTML tags to enhance accessibility and
          SEO.
        </li>
        <li>
          The header navigation is designed to be mobile-friendly. Please test
          this page on a mobile device to verify functionality.
        </li>
      </ul>

      <h2 className="italic">Next Steps</h2>
      <p className="text-red-500">
        Update the site name in the `constants.js/ts` file, as this will be
        reflected throughout the application and is important for SEO purposes.
      </p>
    </section>
  );
}

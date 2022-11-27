import Heading from "src/components/shared/ui/Heading";

export default function HowToUseHomePage() {
  return (
    <section className="">
      <div className="flex items-center justify-center">
        <div className="w-full py-24 laptop:max-w-2xl">
          <div className="container">
            <div className="space-y-10">
              <h1 className="text-2xl font-bold leading-snug">How to use?</h1>
              <List>
                <ListItem
                  heading="Step 1: Copy the overlay url"
                  description="Copy the link we gave you after you signed in."
                />
                <ListItem
                  heading="Step 2: Open your broadcasting tool"
                  description="Open your broadcasting tool and add a new browser source. Paste the overlay link into the URL field."
                />
                <ListItem
                  heading="Step 3: Set up the sizes"
                  description="Width: 285, Height: 76. The dimensions should be set to 285x76 to avoid problems."
                />
                <ListItem
                  heading="Step 4: And done!"
                  description="The songs you've been listening to will now appear immediately in the source you've added."
                />
              </List>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-8">{children}</ul>;
};

const ListItem = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  return (
    <li>
      <div>
        <Heading as="h6">{heading}</Heading>
        <p className="text-gray-400">{description}</p>
      </div>
    </li>
  );
};

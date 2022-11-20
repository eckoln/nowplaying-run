import Heading from "@/ui/Heading";

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
                  heading="Step 1: Copy the overlays url"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae est error reiciendis numquam aspernatur cum
                      modi sint veniam enim laudantium? Aliquid esse voluptatem
                      cumque nesciunt libero maiores eaque blanditiis
                      asperiores."
                />
                <ListItem
                  heading="Step 2: Get your broadcasting tool"
                  description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae est error reiciendis numquam aspernatur cum
                  modi sint veniam enim laudantium? Aliquid esse voluptatem
                  cumque nesciunt libero maiores eaque blanditiis
                  asperiores."
                />
                <ListItem
                  heading=" Step 3: Set-up the sizes"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae est error reiciendis numquam aspernatur cum
                  modi sint veniam enim laudantium? Aliquid esse voluptatem
                  cumque nesciunt libero maiores eaque blanditiis
                  asperiores."
                />
                <ListItem
                  heading="Step 4: And done!"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae est error reiciendis numquam aspernatur cum
                  modi sint veniam enim laudantium? Aliquid esse voluptatem
                  cumque nesciunt libero maiores eaque blanditiis
                  asperiores."
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
